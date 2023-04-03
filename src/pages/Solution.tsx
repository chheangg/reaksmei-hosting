import { Box, Heading, Text, Grid, Divider } from "@chakra-ui/react"
import { useState } from "react";
import { To } from "react-router-dom";

import ProductPanelHeader from "../components/ProductPanel/ProductPanelTab";
import ProductPanel from "../components/ProductPanel/ProductPanel";
import ProductCard from "../components/ProductCard";

import { BiServer } from 'react-icons/bi'
import { GrServer } from 'react-icons/gr'
import { FaGamepad } from 'react-icons/fa'
import { MdOutlineWeb } from 'react-icons/md'

export interface Tab {
  id: number,
  name: string,
  icon: JSX.Element,
  to: To,
}

const tabs: Tab[] = [
  {
    id: 0,
    name: 'Virtual Private Server',
    to: './solutions/vps',
    icon: <BiServer />
  },
  {
    id: 1,
    name: 'Dedicated Server',
    to: './solutions/dedicated',
    icon: <GrServer />
  },
  {
    id: 2,
    name: 'Web Hosting',
    to: './solutions/web',
    icon: <MdOutlineWeb />
  },
  {
    id: 3,
    name: 'Game Hosting',
    to: './solutions/game',
    icon: <FaGamepad />
  }
]

const Solution = () => {
  const [selectedTab, SetSelectedTab] = useState<Tab>(tabs[0]);
  return (
    <Box pt='12vh'>
      <Box mx='10vw'>
        <ProductPanelHeader tabs={tabs} setSelectedTab={SetSelectedTab} />
        <ProductPanel>
          <Heading color='yellow.400'>{selectedTab.name} Plans</Heading>
          <Text fontSize='xl' fontWeight='semibold'>Choose the plan you need!</Text>
          <Divider borderColor='gray.700' my='1rem' />
          <Grid mt='1rem' gap='5rem' templateColumns='1fr 1fr 1fr' autoRows='40vh'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </ProductPanel>
      </Box>
    </Box>
  )
}

export default Solution;