import { Box, Heading, Text, Grid, Divider, Skeleton } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { To } from "react-router-dom";
import { OperationVariables, useQuery, DocumentNode } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom"
import { DEDICATED_PLANS, GAME_PLANS, VPS_PLANS, WEB_PLANS } from "../queries";

import { Plan } from "../types";

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
  query: DocumentNode,
  to: To,
}

const tabs: Tab[] = [
  {
    id: 0,
    name: 'Virtual Private Server',
    to: './solutions/vps',
    icon: <BiServer />,
    query: VPS_PLANS
  },
  {
    id: 1,
    name: 'Dedicated Server',
    to: './solutions/dedicated',
    icon: <GrServer />,
    query: DEDICATED_PLANS
  },
  {
    id: 2,
    name: 'Web Hosting',
    to: './solutions/web',
    icon: <MdOutlineWeb />,
    query: WEB_PLANS
  },
  {
    id: 3,
    name: 'Game Hosting',
    to: './solutions/game',
    icon: <FaGamepad />,
    query: GAME_PLANS
  }
]

const returnPlans = (data: OperationVariables): JSX.Element => {
  if (data.vpsPlans) {
    return data.vpsPlans.map((plan: Plan) => <ProductCard key={plan.id} plan={plan} />)
  }
  
  if (data.dedicatedPlans) {
    return data.dedicatedPlans.map((plan: Plan) => <ProductCard key={plan.id} plan={plan} />)
  }

  if (data.webPlans) {
    return data.webPlans.map((plan: Plan) => <ProductCard key={plan.id} plan={plan} />)
  }

  if (data.gamePlans) {
    return data.gamePlans.map((plan: Plan) => <ProductCard key={plan.id} plan={plan} />)
  }

  throw new Error('Unknown type')
}

const getSelectedTab = (pathname: string): Tab => {
  const tab = tabs.find(tab => tab.to === '.' + pathname);

  if (tab) {
    return tab;
  }

  throw new Error('Unknown tab');
}

const Solution = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<Tab>(getSelectedTab(location.pathname));
  const result = useQuery(selectedTab.query);

  const handleOnSelectTab = (tab: Tab) => {
    navigate(`/${tab.to}`);
  }

  useEffect(() => {
    setSelectedTab(getSelectedTab(location.pathname));
  }, [location.pathname])

  if (result.loading) {
    return (
      <Box pt='12vh'>
        <Box mx='10vw'>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Box>
      </Box>
    )
  }

  if (result.error || !result.data) {
    throw new Error('Unknown error has happened: Server side');
  }

  return (
    <Box pt='12vh' mb='20vh'>
      <Box mx='10vw'>
        <ProductPanelHeader tabs={tabs} handleOnTap={handleOnSelectTab} selectedTab={selectedTab.id} />
        <ProductPanel>
          <Heading color='yellow.400'>{selectedTab.name} Plans</Heading>
          <Text fontSize='xl' fontWeight='semibold'>Choose the plan you need!</Text>
          <Divider borderColor='gray.700' my='1rem' />
          <Grid mt='1rem' gap='5rem' templateColumns='1fr 1fr 1fr' autoRows='45vh'>
            {
              returnPlans(result.data)
            }
          </Grid>
        </ProductPanel>
      </Box>
    </Box>
  )
}

export default Solution;