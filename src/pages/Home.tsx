import { Box, Heading, Grid, Text } from "@chakra-ui/react"
import FeatureCard from "../components/Home/FeatureCard";
import HeroHeader from "../components/HeroHeader/HeroHeader";

import { IoIosPricetags } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaShieldAlt } from "react-icons/fa";
import { BiSupport } from 'react-icons/bi';
import { GrStorage } from 'react-icons/gr';
import { MdWebAsset } from 'react-icons/md'

const featureCards = [
  {
    id: 1,
    icon: <AiOutlineClockCircle />,
    title: '99.5% Uptime for all servers',
    content: 'We guarantee an amazing uptime for all servers. No downtime will affect your profitability'
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: 'Incredible Ddos protection',
    content: 'We provided layer 3, 5, and 7 protection with Terabytes of bandwidth of protection'
  },
  {
    id: 3,
    icon: <BiSupport />,
    title: '24/7 Technical Support',
    content: 'Instaneous access to our pool of expert of Technical support with the skill and tool to diagnose and fix your problem.'
  },
  {
    id: 4,
    icon: <GrStorage />,
    title: 'Unmetered Storage',
    content: 'Unlimited storage at your disposal, with our plan, you could store your data as needed. (It may only be under the use of your business)'
  },
  {
    id: 5,
    icon: <MdWebAsset />,
    title: 'Ease of Usage',
    content: 'With our console interface, everything is within a click of your need! No more unimaginable and incomprehensible UI!'
  },
  {
    id: 6,
    icon: <IoIosPricetags />,
    title: 'Best Prices',
    content: 'Feel the quality at a price better than our competitors'
  }
]

const Home = () => (
  <Box>
    <HeroHeader />
    <Box px='10vw' py='5vh'>
      <Heading fontSize='64' fontFamily='Bebas Neue' letterSpacing='1px'>
        WHY CHOOSE US?
      </Heading>
      <Text fontSize='24'>
        Here are some reasons why!
      </Text>
      <Grid 
        mt='2rem'
        templateRows='250px 250px'
        templateColumns='1fr 1fr 1fr'
        gap='2rem'
      >
        {
          featureCards.map(featureCard => 
            <FeatureCard key={featureCard.id} {...featureCard} />
          )
        }
      </Grid>
    </Box>
  </Box>
)

export default Home;