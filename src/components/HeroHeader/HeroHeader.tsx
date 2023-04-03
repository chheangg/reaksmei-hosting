import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import heroBg from '../../assets/hero-bg.png';
import headerLogo from '../../assets/header-logo.png';

const HeroHeader = () => (
  <Flex 
    pt='12vh'
    h='52vh'
    alignItems='center' 
    bgImage={heroBg} 
    objectPosition='center bottom' 
    position='relative' 
    left='0' 
    right='0' 
    px='10vw'
    borderBottomLeftRadius='50% 5%'
    borderBottomRightRadius='50% 5%'
    >
    <Box color='yellow.300'>
      <Heading fontSize='72'>
        The Kingdoms Host!
      </Heading>
      <Text mt='2' fontSize='32' fontWeight='semibold' color='orange.400'>
        Affordable, Scalable, and Reliable services
      </Text>
      <Button
        mt='8'
        fontSize='24'
        size='lg'
        variant='outline'
        color='orange.50'
        _hover={{
          bgColor: 'yellow.300',
          color: 'orange.500'
        }}
      >Browse Now</Button>
    </Box>
    <Box ml='20vw' height='100%'>
      <Image h='75%' src={headerLogo} />
    </Box>
  </Flex>
)

export default HeroHeader