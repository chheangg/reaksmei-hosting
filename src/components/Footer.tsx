import { Box, Center, Grid, Image, Link, Text, Heading, Divider, VStack } from "@chakra-ui/react";
import FooterListElement from "./FooterListElement";

import logo from '../assets/reaksmei.png';

const Footer = () => (
  <footer>
    <Box px='10vw' py={{ base: '5vh', lg: '0'}} h={{ base: 'auto', lg: '30vh' }} bgColor='gray.50' color='gray.700'>
      <Grid justifyContent='start' alignItems='center' templateColumns={{ base: 'auto auto', lg: 'auto 1.5fr 1fr 1fr'} } h='100%' gap='5ch'>
        <Box>
          <Center h='2.5rem' alignContent='center'>
            <Image h='100%' src={logo} alt='reaksmei logo' />
          </Center>
          <Text mt='1rem' textAlign='center' fontWeight='semibold'>
            Made by <Link href='http://github.com/chheangg/reaksmei-hosting' color='orange.300' isExternal>Chheang</Link>
          </Text>
        </Box>
        <Box></Box> 
        <Box mt={{ base: '0', lg: '2rem' }} alignSelf='start'>
          <Heading fontSize={{ base: '1.5rem', lg: '2rem'}}>Solutions</Heading>
          <Divider mt='0.5rem' mb='1rem' border='2px solid' borderColor='orange.300'  />
          <VStack alignItems='start'>
            <FooterListElement text={'Virtual Private Server'} to='./solutions/vps' />
            <FooterListElement text={'Dedicated Server'} to='./solutions/dedicated' />
            <FooterListElement text={'Web Hosting'} to='./solutions/web' />
            <FooterListElement text={'Game Hosting'} to='./solutions/game' />
          </VStack>
        </Box>
        <Box mt={{ base: '0', lg: '2rem' }} alignSelf='start'>
          <Heading fontSize={{ base: '1.5rem', lg: '2rem'}}>Pages</Heading>
          <Divider mt='0.5rem' mb='1rem' border='2px solid' borderColor='orange.300'/>
          <VStack alignItems='start'>
            <FooterListElement text={'Contact'} to='/contact' />
            <FooterListElement text={'Faq'} to='/faq' />
            <FooterListElement text={'About'} to='/about' />
            <FooterListElement text={'Account'} to='/account' />
          </VStack>
        </Box>
      </Grid>
    </Box>
  </footer>
)

export default Footer;