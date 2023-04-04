import { Grid, Button } from "@chakra-ui/react"

import { Tab } from "../../pages/Solution";

interface Props {
  tabs: Tab[]
  selectedTab: number,
  handleOnTap: (tab: Tab) => void
}

const ProductPanelHeader = ({ tabs, handleOnTap, selectedTab } : Props) => {
  
  return (
    <Grid 
          templateColumns='1fr 1fr 1fr 1fr' 
          bgColor='gray.400'
          borderTopRadius='3xl'
        >
          {tabs.map(tab => (
            <Button 
              borderRadius='20px'
              bgColor={selectedTab === tab.id ? 'gray.50' : 'gray.400'}
              borderBottomLeftRadius='0'
              borderBottomRightRadius='0' 
              color='gray.700'
              key={tab.id}
              leftIcon={tab.icon}
              onClick={() => handleOnTap(tab)}
            >
              {tab.name}
            </Button>
          ))}
    </Grid>
  )
}

export default ProductPanelHeader;