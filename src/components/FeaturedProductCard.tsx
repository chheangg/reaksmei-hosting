import { Box, Card, CardHeader, CardBody, Heading, VStack, Flex, Text, Button } from "@chakra-ui/react";
import { To } from "react-router-dom";
import { Link as ReachLink } from 'react-router-dom';

interface Props {
  first?: boolean,
  last?: boolean,
  icon: JSX.Element,
  title: string,
  content: string,
  price: number,
  to: To,
}

const FeaturedProductCard = ({ first, last, icon, title, content, price, to } : Props) => (
  <Card 
    p='1.5rem'
    boxShadow='xl'
    transition='box-shadow 200ms ease-in-out'
    _hover={{
      transform: "translateX(-5%) translateY(-20px)",
      width: 'calc(100% + 10%)',
      zIndex: 1,
      boxShadow: '2px 2px 10px 5px orange'
    }}
  >
    <CardHeader pb='0'>
      <VStack>
        <Box color='orange.500'>{icon}</Box>
        <Heading>{title}</Heading>
      </VStack>
    </CardHeader>
    <CardBody pt='0.5rem'>
      <VStack>
        <Text mb='1rem'>{content}</Text>
        <Flex w='100%' alignItems='center' justifyContent='space-between' p='0'>
          <Box>
            <Text fontWeight='bold'>Starting from</Text>
            <Text color='orange.500' fontWeight='semibold'>${price.toFixed(2)}/month</Text>
          </Box>
          <Button bgColor='orange.500' color='gray.50' as={ReachLink} to={to}>Browse now</Button>
        </Flex>
      </VStack>
    </CardBody>
  </Card>
)

export default FeaturedProductCard