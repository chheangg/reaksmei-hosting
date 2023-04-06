import { Box, Heading, Input, FormLabel, Flex, Button } from "@chakra-ui/react"

const Login = () => (
  <Box pt='12vh' minHeight='85vh'>
    <Heading fontSize='72' textAlign='center' bgClip='text' bgGradient='linear(to-bl, gray.50, yellow.100)'>Sign-in</Heading>
    <Flex mt='2rem' justifyContent='center'>
      <Box py='1rem' px='1.5rem' borderRadius='xl' w='30vw' as='form' bgGradient='linear(to-b, gray.50, gray.200)' color='gray.700'>
        <Heading textAlign='center'>Login Form</Heading>
        <FormLabel htmlFor="email" >Username</FormLabel>
        <Input id='email' name='username' borderColor='gray.700' placeholder="john.appleseed@email.com"></Input>
        <FormLabel htmlFor="password" mt='1rem'>Password</FormLabel>
        <Input id='password' name='password' borderColor='gray.700' placeholder="Minimum of 8 characters"></Input>
        <Flex mt='1.5rem' justifyContent='center'>
          <Button w='95%' bgGradient='linear(to-r, orange.300, yellow.300)' color='gray.50' _hover={{ color: 'gray.700'}}>Login Now</Button>
        </Flex>
      </Box>
    </Flex>
  </Box>
)

export default Login;