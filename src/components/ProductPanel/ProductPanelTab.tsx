import { Grid, Button } from "@chakra-ui/react"
import { useLocation, useNavigate } from "react-router-dom"

import { Tab } from "../../pages/Solution";

interface Props {
  tabs: Tab[]
  setSelectedTab: React.Dispatch<React.SetStateAction<Tab>>
}

const ProductPanelHeader = ({ tabs, setSelectedTab } : Props) => {
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
              onClick={() => {
                navigate(`/${tab.to}`);
                setSelectedTab(tab);
              }}
            >
              {tab.name}
            </Button>
          ))}
    </Grid>
  )
}

export default ProductPanelHeader;