import { Grid, Button } from "@chakra-ui/react"
import { useLocation, useNavigate, To } from "react-router-dom"

import { BiServer } from 'react-icons/bi'
import { GrServer } from 'react-icons/gr'
import { FaGamepad } from 'react-icons/fa'
import { MdOutlineWeb } from 'react-icons/md'

interface Tabs {
  id: number,
  name: string,
  icon: JSX.Element,
  to: To,
}

const tabs: Tabs[] = [
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

const ProductPanelHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTab = () => {
    switch(String(location.pathname.split('/')[2])) {
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
  return (
    <Grid 
          templateColumns='1fr 1fr 1fr 1fr' 
          bgColor='gray.400'
          borderTopRadius='3xl'
        >
          {tabs.map(tab => (
            <Button 
              borderRadius='20px'
              bgColor={selectedTab() === tab.id ? 'gray.50' : 'gray.400'}
              borderBottomLeftRadius='0'
              borderBottomRightRadius='0' 
              color='gray.700'
              key={tab.id}
              leftIcon={tab.icon}
              onClick={() => navigate(`/${tab.to}`)}
            >
              {tab.name}
            </Button>
          ))}
    </Grid>
  )
}

export default ProductPanelHeader;