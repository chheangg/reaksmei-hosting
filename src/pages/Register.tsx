import { Box, Heading, FormLabel, Flex, Grid, FormControl, Input, Button } from "@chakra-ui/react"
import { useMutation } from "@apollo/client";
import { REGISTRATION } from "../mutations";
import { useNavigate } from "react-router-dom";

interface Props {
  setRegistrationSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const Register = ({ setRegistrationSuccess }: Props) => {
  const navigate = useNavigate();
  const [ createUser ] = useMutation(REGISTRATION, {
    onError: (err) => console.log(err)
  });

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      first_name: { value: string };
      last_name: { value: string };
      username: { value: string };
      password: { value: string };
      confirmed_password: { value: string };
    };

    createUser({ 
      variables: {
        firstName: target.first_name.value,
        lastName: target.last_name.value,
        username: target.username.value,
        password: target.password.value,
        confirmedPassword: target.confirmed_password.value
      } 
    });
    navigate('/')
    setRegistrationSuccess(true)
    setTimeout(() => setRegistrationSuccess(false), 10000)
  }

  return (
    <Box pt='12vh' minHeight='85vh' mx={{ base: '2.5rem', lg: '0' }}>
      <Heading fontSize={{ base: '2.5rem', lg: '72' }} textAlign='center' bgClip='text' bgGradient='linear(to-bl, gray.50, yellow.100)'>Create an account</Heading>
      <Flex mt='2rem' justifyContent='center'>
        <Box 
          onSubmit={submit} 
          py='1rem' 
          px={{ base: '1rem', lg: '1.5rem' }} 
          borderRadius='xl' 
          w={{ base: 'auto', lg: '32vw' }} 
          as='form' 
          bgGradient='linear(to-b, gray.50, gray.200)' 
          color='gray.700'
          mb={{ base: '3rem', lg: '0' }}
          >
          <Heading fontSize={{ base: '1rem' , lg: '1.5rem' }} textAlign='center'>Registration Form</Heading>
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
          <Input id='email' type='email' name='username' borderColor='gray.700' placeholder="john.appleseed@email.com"></Input>
          <FormLabel htmlFor="password" mt='1rem'>Password</FormLabel>
          <Input type='password' id='password' name='password' borderColor='gray.700' placeholder="Minimum of 8 characters"></Input>
          <FormLabel htmlFor="confirmed_password" mt='1rem'>Confirm Password</FormLabel>
          <Input type='password' id='confirmed_password' name='confirmed_password' borderColor='gray.700' placeholder="Minimum of 8 characters"></Input>
          <Flex mt='1.5rem' justifyContent='center'>
            <Button type='submit' w='95%' bgGradient='linear(to-r, orange.300, yellow.300)' color='gray.50' _hover={{ color: 'gray.700'}}>Register Now</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Register;