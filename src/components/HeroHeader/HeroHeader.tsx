import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import heroBg from '../../assets/hero-bg.png';
import headerLogo from '../../assets/header-logo.png';

const HeroHeader = () => (
  <Box bgColor='orange.500'>
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
      borderColor='orange.100'
      borderBottomLeftRadius='50% 5%'
      borderBottomRightRadius='50% 5%'
      >
      <Box color='yellow.300'>
        <Heading 
          bgGradient='linear(to-l, yellow.300, orange.300)'
          bgClip='text'
          fontSize={{
            xl: '3rem',
            '2xl': '4.5rem',
        }}>
          The Kingdoms Host!
        </Heading>
        <Text 
          bgGradient='linear(to-l, orange.500, orange.300)'
          bgClip='text'
          mt='2' 
          fontSize={{
            lg: '1rem',
            xl: '2rem',
        }} fontWeight='semibold' color='orange.400'>
          Affordable, Scalable, and Reliable services
        </Text>
        <Button
          mt='8'
          fontSize={{
            lg: '0.8rem',
            xl: '1.5rem',
          }}
          p={{
            lg: '0.5rem',
            xl: '1.5rem'
          }}
          variant='outline'
          color='orange.50'
          _hover={{
            bgGradient: 'linear(to-l, yellow.300, orange.300)',
            color: 'gray.700'
          }}
        >Browse Now</Button>
      </Box>
      <Box ml='20vw' height='100%'>
        <Image h='75%' src={headerLogo} />
      </Box>
    </Flex>
  </Box>
)

export default HeroHeader