import { Box, Heading, Text, List, ListItem, ListIcon, Link, Flex  } from "@chakra-ui/react"
import { AiFillFacebook, AiOutlineMail, AiFillInstagram, AiFillPhone } from 'react-icons/ai'

const Contact = () => (
  <Box minH='80vh' pt='12vh' mb='12vh' px='10vw'>
    <Heading fontSize={{ base: '2.5rem', lg: '48' }}>Contact</Heading>
    <Text mt='1rem' fontSize={{ base: '0.8rem', lg: '1.2rem' }}>
      If you encounter any billing problems, problems concerning our product,
       please do not hesistate to contact us via the contacts below!
    </Text>
    <List mt='1rem' fontSize={{ base: '1rem', lg: '1.5rem' }} spacing={3}>
      <ListItem>
        <ListIcon as={AiFillFacebook} color='blue.500' bgColor='gray.50' />
        <Link href='https://www.facebook.com/koraeworae' isExternal>Chheang</Link>
      </ListItem>
      <ListItem>
        <ListIcon bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='content' as={AiFillInstagram} bgColor='gray.50' />
        <Link href='https://www.instagram.com/chheangg_/' isExternal>chheang_</Link>
      </ListItem>
      <ListItem>
        <ListIcon as={AiFillPhone} color='gray.50' />
        +855 (0)69 980 981
      </ListItem>
      <ListItem>
        <ListIcon as={AiOutlineMail} color='gray.50' />
        lyeangchheang@gmail.com
      </ListItem>
    </List>
    <Heading mt='1.5rem' mb='1rem' fontSize={{ base: '2.5rem', lg: '48' }}>Location</Heading>
    <Flex h='50vh'>
      <iframe 
        width='100%'
        height='100%'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15632.714789840284!2d104.90331196073215!3d11.610606409047227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095177ee61fd7d%3A0xa66cfdf83a58b2ae!2sAmerican%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1681026561871!5m2!1sen!2skh" 
        style={{ border:0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </Flex>
  </Box>
)

export default Contact;