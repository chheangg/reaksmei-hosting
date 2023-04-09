import { Box, Heading, Text, Button, Image, Grid } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import heroBg from '../../assets/hero-bg.png';
import headerLogo from '../../assets/header-logo.png';

const HeroHeader = () => (
  <Box bgColor='orange.500'>
      <Grid
      templateColumns={{
        base: '1fr auto',
        lg: '1fr 1fr'
      }}
      gap='1rem'
      pt={{
        base: '8vh',
        lg: '12vh'
      }}
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
              base: '2.5rem',
              lg: "4.5rem"
            }}>
          The Kingdoms Host!
        </Heading>
        <Text 
          bgGradient='linear(to-l, orange.500, orange.300)'
          bgClip='text'
          mt='2' 
          fontSize={{
            base: '0.8rem',
            lg: "2rem"
          }} fontWeight='semibold' color='orange.400'>
          Affordable, Scalable, and Reliable services
        </Text>
        <Button
          mt={{
            base: '6',
            lg: '8'
          }}
          fontSize={{
            base: '1.2rem',
            lg: '1.5rem'
          }}
          padding={{
            base: '1rem',
            lg: '2rem'
          }}
          variant='outline'
          color='orange.50'
          _hover={{
            bgGradient: 'linear(to-l, yellow.300, orange.300)',
            color: 'gray.700'
          }}
          as={ReachLink}
          to='/solutions/vps'
        >Browse Now</Button>
      </Box>
      <Box display='flex' alignItems='center' mb='5%' ml={{ base: '0', lg: '20vw'}} height='100%'>
        <Image h={{ base: '30%', lg: '75%' }}  src={headerLogo} />
      </Box>
    </Grid>
  </Box>
)

export default HeroHeader