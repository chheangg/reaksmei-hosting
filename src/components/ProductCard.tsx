import { Card, CardFooter, CardHeader, CardBody, IconButton, Flex, Divider, Text, Heading, Box } from "@chakra-ui/react"
import { CiShoppingCart } from 'react-icons/ci';
import { FiCpu } from 'react-icons/fi'
import { BsMemory, BsDeviceSsd } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti'

const ProductCard = () => (
  <Card>
    <CardHeader borderTopRadius='lg' color='gray.50' bgColor='blue.300' p='0.5rem 1rem 0.25rem 1rem'>
      <Heading size='md'>VPS BEGINNER PLAN</Heading>
    </CardHeader>
    <CardBody pt='1rem'>
      <Flex flexDir='column' gap='0.75rem'>
        <Flex gap='0.5rem' alignItems='center'><FiCpu size='20' /> <Text fontWeight='semibold'>1 CPU Thread</Text></Flex>
        <Flex gap='0.5rem' alignItems='center'><BsMemory size='20' /> <Text fontWeight='semibold'>1024Mb RAM</Text></Flex>
        <Flex gap='0.5rem' alignItems='center'><BsDeviceSsd size='20' /> <Text fontWeight='semibold'>20Gb SSD</Text></Flex> 
        <Flex flexDir='column' gap='0.5rem'>
          <Flex gap='0.5rem' alignItems='center'>
            <Box bgColor='orange.300' color='gray.50' borderRadius='50%'><TiTick size='16' /></Box>
            <Text>Unlimited Bandwidth</Text>
          </Flex>
          <Flex gap='0.5rem' alignItems='center'>
            <Box bgColor='orange.300' color='gray.50' borderRadius='50%'><TiTick size='16' /></Box>
            <Text>DDos Protection</Text>
          </Flex>
          <Flex gap='0.5rem' alignItems='center'>
            <Box bgColor='orange.300' color='gray.50' borderRadius='50%'><TiTick size='16' /></Box>
            <Text>Ryzen 9 5950x</Text>
          </Flex>
        </Flex> 
      </Flex>
    </CardBody>
    <Divider borderColor='gray.700' />
    <CardFooter alignItems='center' justifyContent='space-between' py='0.5rem'>
      <Text fontSize='xl' fontWeight='bold'>$5.00 / Month</Text>
      <IconButton color='orange.400' variant='ghost' aria-label='Add to cart' icon={<CiShoppingCart size='32' />} />
    </CardFooter>
  </Card> 
)

export default ProductCard