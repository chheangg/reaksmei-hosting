import { Box, Heading, FormLabel, Flex, Grid, FormControl, Input, Button } from "@chakra-ui/react"

const Register = () => (
  <Box pt='12vh' minHeight='85vh'>
    <Heading fontSize='72' textAlign='center' bgClip='text' bgGradient='linear(to-bl, gray.50, yellow.100)'>Create an account</Heading>
    <Flex mt='2rem' justifyContent='center'>
      <Box py='1rem' px='1.5rem' borderRadius='xl' w='30vw' as='form' bgGradient='linear(to-b, gray.50, gray.200)' color='gray.700'>
        <Heading textAlign='center'>Registration Form</Heading>
        <Grid gap='1rem' templateColumns='1fr 1fr' mb='1.5rem'>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input name='first_name' borderColor='gray.700' placeholder="John"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input name='last_name' borderColor='gray.700' placeholder="Appleseed"></Input>
          </FormControl>
        </Grid>
        <FormLabel htmlFor="email" >Email</FormLabel>
        <Input id='email' name='username' borderColor='gray.700' placeholder="john.appleseed@email.com"></Input>
        <FormLabel htmlFor="password" mt='1rem'>Password</FormLabel>
        <Input id='password' name='password' borderColor='gray.700' placeholder="Minimum of 8 characters"></Input>
        <FormLabel htmlFor="confirmed_password" mt='1rem'>Confirm Password</FormLabel>
        <Input id='confirmed_password' name='confirmed_password' borderColor='gray.700' placeholder="Minimum of 8 characters"></Input>
        <Flex mt='1.5rem' justifyContent='center'>
          <Button w='95%' bgGradient='linear(to-r, orange.300, yellow.300)' color='gray.50' _hover={{ color: 'gray.700'}}>Register Now</Button>
        </Flex>
      </Box>
    </Flex>
  </Box>
)

export default Register;