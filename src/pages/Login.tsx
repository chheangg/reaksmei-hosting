import { Box, Heading, Input, FormLabel, Flex, Button } from "@chakra-ui/react"
import { useMutation } from "@apollo/client";
import { LOGIN } from "../mutations";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setToken: React.Dispatch<React.SetStateAction<string>>,
  setLoginSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ setToken, setLoginSuccess } : Props) => {
  const [ login, result ] = useMutation(LOGIN);
  const navigate = useNavigate();

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
    }

    login({ 
      variables: {
        username: target.username.value,
        password: target.password.value
      }
    })
  }

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value
      setToken(token);
      window.localStorage.setItem('host-site-token', token)
      setLoginSuccess(true);
      setTimeout(() => setLoginSuccess(false), 5000);
      navigate('/');
    }
  }, [result.data])

  return (
    <Box pt='12vh' minHeight='85vh'>
      <Heading fontSize='72' textAlign='center' bgClip='text' bgGradient='linear(to-bl, gray.50, yellow.100)'>Sign-in</Heading>
      <Flex mt='2rem' justifyContent='center'>
        <Box onSubmit={submit} py='1rem' px='1.5rem' borderRadius='xl' w='30vw' as='form' bgGradient='linear(to-b, gray.50, gray.200)' color='gray.700'>
          <Heading textAlign='center'>Login Form</Heading>
          <FormLabel htmlFor="email" >Username</FormLabel>
          <Input type='email' id='email' name='username' borderColor='gray.700' placeholder="john.appleseed@email.com"></Input>
          <FormLabel htmlFor="password" mt='1rem'>Password</FormLabel>
          <Input type='password' id='password' name='password' borderColor='gray.700' placeholder="Minimum of 8 characters"></Input>
          <Flex mt='1.5rem' justifyContent='center'>
            <Button type='submit' w='95%' bgGradient='linear(to-r, orange.300, yellow.300)' color='gray.50' _hover={{ color: 'gray.700'}}>Login Now</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Login;