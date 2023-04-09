import { Box, Heading, Text, Grid, Image } from "@chakra-ui/react"

const About = () => (
  <Box minH='80vh' pt='12vh' mb='12vh' px='10vw'>
    <Heading fontSize={{ base: '2.5rem', lg: '48' }}>About us</Heading>
    <Grid templateColumns={{ base: '1fr', lg: '1.5fr 1fr' }} gap='2rem'>
      <Box>
        <Text mt='1rem' fontSize={{ base: '0.8rem', lg: '1.5rem' }}>
          We are a newly disruptive business offering affordable, powerful and reliable server!
          Our servers based and located in Cambodia and in critical cities like Phnom Penh, 
          Sihanoukville and Siem Reap. We are headed by a team of aspiring youngsters and at the
          same time senior experts with decades or even centuries of experience in the industry
          ( They saw the dinosaur! ).
        </Text>
        <Text mt='2rem' fontSize={{ base: '0.8rem', lg: '1.5rem' }}>
          Anyways, if you have any question or is interested in the details of our solution. Feel
          free to contact us in the Contact page!
        </Text>
      </Box>
      <Image borderRadius='2xl' src='https://images.easytechjunkie.com/racks-of-servers.jpg' alt='server room' />
    </Grid>
  </Box>
)

export default About;