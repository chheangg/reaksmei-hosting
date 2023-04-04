import { Box, Heading, Text, Grid, Divider, Skeleton } from "@chakra-ui/react"
import { useState } from "react";
import { To } from "react-router-dom";
import { OperationVariables, useQuery } from "@apollo/client";
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

const queries = [
  VPS_PLANS,
  DEDICATED_PLANS,
  WEB_PLANS,
  GAME_PLANS
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

  throw new Error('Unknown Type detected')
}

const getSelectedTab = (pathname: string) => {
  switch(String(pathname.split('/')[2])) {
    case 'vps':
      return 0;
    case 'dedicated':
      return 1;
    case 'web':
      return 2;
    case 'game':
      return 3;
    default:
      throw new Error('Page not found');
  }
}

const Solution = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[getSelectedTab(location.pathname)]);
  const result = useQuery(queries[selectedTab.id]);

  const handleOnSelectTab = (tab: Tab) => {
    navigate(`/${tab.to}`);
    setSelectedTab(tab);
  }

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
    <Box pt='12vh'>
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