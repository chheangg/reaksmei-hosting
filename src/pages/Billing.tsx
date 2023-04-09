import { Box, TableContainer, Table, Thead, Tr, Th, Td, Heading, Tbody, Tfoot, Grid, Text, Image, Icon, Button, Flex } from "@chakra-ui/react"
import { Plan } from "../types";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext, TokenContextObj } from "../context/TokenContext";
import { BsCreditCard2FrontFill } from 'react-icons/bs';
import paypalLogo from '../assets/paypal-logo.avif';
import abaLogo from '../assets/aba-logo.jpeg';

interface Prop {
  orders: Plan[],
  setOrders: React.Dispatch<React.SetStateAction<Plan[]>>
  setFailOrder: (tokenobj: TokenContextObj) => void
}

const Billing = ({ orders, setOrders, setFailOrder }: Prop) => {
  const [error, setError] = useState<boolean>(false);
  const [paymentOption, setPaymentOption] = useState<number>(0);
  const tokenObj = useContext(TokenContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (!tokenObj || !(orders.length > 0)) {
      navigate('/');
      setFailOrder(tokenObj);
    }
  })
  
  return (
    <Box minH='80vh' pt='12vh' pb='10vh' px='10vw'>
      <Heading fontSize={{ base: '2.5rem', lg: '72' }}>Billings</Heading>
      <TableContainer mt='5vh' bgColor='gray.50' borderRadius='xl'>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                Plan name
              </Th>
              <Th isNumeric>
                Quantity
              </Th>
              <Th isNumeric>
                Price Per Plan
              </Th>
              <Th isNumeric>
                Cost
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map(order => 
              <Tr color='gray.700' key={order.id}>
                <Td borderLeft='10px solid' borderBottom='0' borderColor={order.color}>{order.name}</Td>
                <Td isNumeric>{order.ordered}</Td>
                <Td isNumeric>${order.price.toFixed(2)}</Td>
                <Td isNumeric>${order.ordered ? (order.ordered * order.price).toFixed(2) : 0.00}</Td>
              </Tr>  
            )}
          </Tbody>
          <Tfoot>
            <Tr color='gray.700'>
              <Td><Heading fontSize='18'>Total Cost</Heading></Td>
              <Td isNumeric>{orders.reduce((previousVal, currentVal) => currentVal.ordered ? previousVal + currentVal.ordered : 0, 0)}</Td>
              <Td isNumeric></Td>
              <Td isNumeric>${orders.reduce((previousVal, currentVal) => currentVal.ordered ? previousVal + currentVal.ordered * currentVal.price : 0, 0).toFixed(2)}</Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Heading mt='2rem' fontSize={{ base: '2.5rem', lg: '72' }}>Payment Options</Heading>
      <Grid mt='1rem' templateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }} autoRows='20vh' gap='1.5rem' color='gray.700' textAlign='center' fontWeight='semibold'>
        <Box 
          onClick={() => {setPaymentOption(1)}} 
          p='1rem' 
          display='flex' 
          flexDir='column' 
          justifyContent='space-between' 
          alignItems='center' 
          borderRadius='xl' 
          bgColor='gray.50'
          border={paymentOption === 1 ? '4px solid' : '0'}
          borderColor='green.300'
          _hover={{ bgColor: 'gray.200' }}
          >
          <Image w='auto' h='75%' src={abaLogo} alt=''></Image>
          <Text>ABA Payway</Text>
        </Box>
        <Box 
          onClick={() => {setPaymentOption(2)}} 
          p='1rem' 
          display='flex' 
          flexDir='column' 
          justifyContent='space-between'
          alignItems='center' 
          borderRadius='xl' 
          bgColor='gray.50'
          border={paymentOption === 2 ? '4px solid' : '0'}
          borderColor='green.300'
          _hover={{ bgColor: 'gray.200' }}
          >
          <Image w='auto' h='75%' src={paypalLogo} alt=''></Image>
          <Text>Paypal</Text>
        </Box>
        <Box 
          onClick={() => {setPaymentOption(3)}} 
          p='1rem' 
          display='flex' 
          flexDir='column' 
          justifyContent='space-between' 
          alignItems='center' 
          borderRadius='xl' 
          bgColor='gray.50'
          border={paymentOption === 3 ? '4px solid' : '0'}
          borderColor='green.300'
          >
          <Icon as={BsCreditCard2FrontFill} w='auto' h='75%'/>
          <Text>Credit Card</Text>  
        </Box>
      </Grid>
      <Text display={error ? 'block' : 'none'} mt='1rem' color='red.600'>You must specify a payment option*</Text>
      <Flex justifyContent='flex-end'>
        <Button 
          bgColor='green.300' 
          size='lg' 
          mt='2rem' 
          _hover={{ color: 'gray.700' }} 
          onClick={() => {
            if (paymentOption === 0) {
              setError(true);
            } else {
              navigate('/');
              setOrders([]);
            }
          }}
        >
          Checkout
        </Button>
      </Flex>
    </Box>
  )
}

export default Billing;