import { Box, Heading, Grid, Text } from "@chakra-ui/react"
import FeatureCard from "../components/Home/FeatureCard";
import HeroHeader from "../components/HeroHeader/HeroHeader";
import angkorBg from '../assets/angkor-icon-bg.png';

import { IoIosPricetags } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaShieldAlt, FaGamepad } from "react-icons/fa";
import { VscServerEnvironment } from "react-icons/vsc";
import { BiSupport, BiServer  } from 'react-icons/bi';
import { GrStorage } from 'react-icons/gr';
import { MdWebAsset, MdOutlineWeb } from 'react-icons/md'
import FeaturedProductCard from "../components/FeaturedProductCard";

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
    <Box px='10vw' py='5vh' bgGradient='linear(to-b, orange.500, yellow.400)'>
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
    <Box bgImage={angkorBg} color='gray.700' px='10vw' py='5vh' bgGradient='linear(to-b, gray.50, gray.100)'>
      <Heading 
          bgGradient='linear(to-l, gray.900, gray.600)'
          bgClip='text'
        textAlign='center'
        >
          On Sales
        </Heading>
      <Text mt='0.5rem' textAlign='center' fontSize='lg'>Explore your plans today!</Text>
      <Grid
        mt='2rem'
        templateRows='50vh'
        templateColumns='1fr 1fr 1fr 1fr'
      >
        <FeaturedProductCard
          icon={<BiServer size={84} />}
          title='Virtual Private Server'
          content='Performant, reliable and affordable VPS to accomodate your needs. With DDos protection and Ryzen 7 CPU, the sky is the limit!'
          price={5}
          to='/solutions/vps'
        />
        <FeaturedProductCard
          icon={<VscServerEnvironment size={84} />}
          title='Dedicated Server'
          content='Powerful bare metal machines that are suitable for all sorts of cases. Runs on variety of CPU for your needs!'
          price={50}
          to='/solutions/dedicated'
        />
        <FeaturedProductCard
          icon={<MdOutlineWeb size={84} />}
          title='Website Hosting'
          content='Instances of server tuned and optimized for hosting websites, with tens to hundreds of possible on just a plan!'
          price={3}
          to='/solutions/web'
        />
        <FeaturedProductCard
          icon={<FaGamepad size={84} />}
          title='Gameserver Hosting'
          content='Suitable for a group of friends or even a community, experience lagless, low-latency, and secure performances!'
          price={70}
          to='/solutions/game'
        />
      </Grid>
    </Box>
  </Box>
)

export default Home;