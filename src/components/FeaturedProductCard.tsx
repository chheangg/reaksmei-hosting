import { Box, Card, CardHeader, CardBody, Heading, Grid, VStack, Flex, Text, Button } from "@chakra-ui/react";
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

const FeaturedProductCard = ({ icon, title, content, price, to } : Props) => (
  <Card 
    p={{ base: '0rem', lg: '1.5rem'}}
    boxShadow='xl'
    transition='box-shadow 200ms ease-in-out'
    _hover={{
      transform: "translateY(-20px) scale(1.1)",
      zIndex: 1,
      boxShadow: '2px 2px 10px 5px orange'
    }}
  >
    <CardHeader pb='0'>
      <VStack>
        <Box color='orange.500'>{icon}</Box>
        <Heading           
          bgGradient='linear(to-l, orange.300, yellow.400)'
          bgClip='text'
          fontSize={{ base: '1rem', lg: '2.25rem'}}
        >{title}</Heading>
      </VStack>
    </CardHeader>
    <CardBody pt={{ base: '0.5rem', lg: '1rem'}}>
      <Grid templateRows='60% 50%' alignItems='center'>
        <Text mb={{ base: '0.5rem', lg: '1rem'}} fontSize={{ base: '0.8rem', lg: '1rem'}}>{content}</Text>
        <Flex flexDir={{ base: 'column', lg: 'row'}} w='100%' alignItems='center' justifyContent='space-between' p='0'>
          <Box alignSelf='start'>
            <Text fontWeight='bold' fontSize={{ base: '0.8rem', lg: '1rem'}}>Starting from</Text>
            <Text color='orange.500' fontWeight='semibold' fontSize={{ base: '0.8rem', lg: '1rem'}}>${price.toFixed(2)}/month</Text>
          </Box>
          <Button
            mt={{ base: '0.5rem', lg: '0' }}
            bgGradient='linear(to-br, orange.400, yellow.400)' 
            color='gray.50' 
            as={ReachLink} 
            to={to}
            _hover={{
              color: 'gray.700'
            }}
          >Browse now</Button>
        </Flex>
      </Grid>
    </CardBody>
  </Card>
)

export default FeaturedProductCard