import { Card, CardFooter, CardHeader, CardBody, IconButton, Flex, Divider, Text, Heading, Box, Grid } from "@chakra-ui/react"
import { CiShoppingCart } from 'react-icons/ci';
import { FiCpu } from 'react-icons/fi'
import { BsMemory, BsDeviceSsd } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti'
import { Plan } from "../types";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState, useContext, useEffect } from "react";

import { TokenContext } from "../context/TokenContext";
import { OrdersContext } from "../context/OrdersContext";

interface Props {
  plan: Plan
}

const ProductCard = ({ plan } : Props) => {
  const tokenObj = useContext(TokenContext);
  const { orders, setOrders } = useContext(OrdersContext);
  const [ordered, setOrdered] = useState<number>(0);
  let orderExist: Plan | undefined;

  const modifyOrders = () => {
    if (orders && setOrders) {
      setOrders(orders.map(order => (order.id === plan.id) ? {...order, ordered: ordered, setOrdered: handleSetHandle } : order));
    }
  }

  if (orders) {
    orderExist = orders.find(order => order.id === plan.id);
  }

  useEffect(() => {
    if (orders) {
      if (orderExist && orderExist.ordered) {
        setOrdered(orderExist.ordered);
      } 
    }
  }, [])

  const handleSetHandle = (ordered: number) => {
    if (orderExist && setOrders && orders) {
      if (ordered === 0 || orderExist.ordered === 0) {
        setOrdered(0);
        setOrders(orders.filter(order => order.id !== plan.id));
      } else {
        setOrdered(ordered);
        modifyOrders();
      }

    }
  }

  useEffect(() => {
    if (orders && setOrders) {
      if (ordered > 0) {
        if (orderExist) {
          modifyOrders();
        } else {
          setOrders([...orders, { ...plan, ordered: 1, setOrdered: setOrdered }]);
        }
      }

    }

  }, [ordered, orderExist?.ordered])

  if (!orders || !setOrders) {
    throw new Error("There has been an error: No Orders Context set")
  }

  return (
    <Card>
      <CardHeader borderTopRadius='lg' color='gray.50' bgColor={plan.color} p='0.5rem 1rem 0.25rem 1rem'>
        <Heading size='md'>{plan.name}</Heading>
      </CardHeader>
      <CardBody pt='1rem'>
        <Flex flexDir='column' gap='0.75rem'>
          <Flex gap='0.5rem' alignItems='center'><FiCpu size='20' /> <Text fontWeight='semibold'>{plan.cpu}</Text></Flex>
          <Flex gap='0.5rem' alignItems='center'><BsMemory size='20' /> <Text fontWeight='semibold'>{plan.ram}</Text></Flex>
          <Flex gap='0.5rem' alignItems='center'><BsDeviceSsd size='20' /> <Text fontWeight='semibold'>{plan.ssd}</Text></Flex> 
          <Flex flexDir='column' gap='0.5rem'>
            {plan.extra
              ?
              plan.extra.map(extra => (
                <Flex key={plan.extra?.indexOf(extra)} gap='0.5rem' alignItems='center'>
                  <Box bgColor='orange.300' color='gray.50' borderRadius='50%'><TiTick size='16' /></Box>
                  <Text>{extra}</Text>
                </Flex>
              ))
              :
              null
            }
          </Flex> 
        </Flex>
      </CardBody>
      <Divider borderColor='gray.700' />
      <CardFooter alignItems='center' justifyContent='space-between' py='0.5rem'>
        <Text fontSize='xl' fontWeight='bold'>${plan.price.toFixed(2)} / Month</Text>
        {
          ordered ?
          <Grid templateColumns='1fr 1fr 1fr' alignItems='center' justifyItems='center'>
            <IconButton variant='ghost' color='orange.400' aria-label="remove one" icon={<AiOutlineMinus />} onClick={() => setOrdered(ordered - 1)}></IconButton>
            <Text fontWeight='bold'>{String(ordered)}</Text>
            <IconButton variant='ghost' color='orange.400' aria-label="add one" icon={<AiOutlinePlus />} onClick={() => setOrdered(ordered + 1)}></IconButton>
          </Grid>
          :
          <IconButton 
            color='orange.400' 
            variant='ghost' 
            aria-label='Add to cart' 
            onClick={() => {
              if (tokenObj.token) {
                setOrdered(ordered + 1)
              } else {
                if (tokenObj.setFailOrder) {
                  tokenObj.setFailOrder(tokenObj);
                }
              }
            }} 
            icon={<CiShoppingCart 
              size='32' />} />
        }
      </CardFooter>
    </Card> 
  )
}



export default ProductCard