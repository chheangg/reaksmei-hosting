import { Box, Flex, Heading, Button, Grid, Text } from "@chakra-ui/react"
import { Link as ReachLink } from "react-router-dom";

const Account = () => (
  <Box pt='12vh' minHeight='80vh'>
    <Heading fontSize='72' textAlign='center' bgClip='text' bgGradient='linear(to-bl, gray.50, yellow.100)'>Account Page</Heading>
    <Flex mt='5ch' flexDir='column' alignItems='center'>
        <Text color='gray.700' fontSize='48' fontWeight='semibold'>
          Have an account?
        </Text>
        <Text color='gray.700' fontSize='24' fontWeight='semibold'>
          You can sign-in below with the Login button.
        </Text>
      <Grid mt='1rem' w='25vw' gap='2rem' justifyContent='center' templateColumns='1fr 1fr'>
        <Button 
          _hover={{ color: 'gray.700' }}
          as={ReachLink}
          to='./register'
          size='lg'
          py='2rem'
          fontSize='36'
          bgGradient='linear(to-r, yellow.300, orange.300)'
        >Register</Button>
        <Button 
          _hover={{ color: 'gray.700' }}
          color='gray.50'
          as={ReachLink}
          to='./login'
          size='lg'
          py='2rem'
          fontSize='36'
          bgGradient='linear(to-r, yellow.300, orange.300)'
        >Login</Button>
      </Grid>
    </Flex>
  </Box>
)

export default Account;