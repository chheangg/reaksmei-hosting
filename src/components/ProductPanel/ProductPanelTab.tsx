import { Grid, Button } from "@chakra-ui/react"
import { useState, useEffect } from 'react';

import { Tab } from "../../pages/Solution";

interface Props {
  tabs: Tab[]
  selectedTab: number,
  handleOnTap: (tab: Tab) => void
}

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const ProductPanelHeader = ({ tabs, handleOnTap, selectedTab } : Props) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Grid 
          templateColumns={
            ['auto', 'auto', 'auto', 'auto']
              .map((cell, index) => selectedTab === index && (windowDimensions.width > 0 && windowDimensions.width < 1000) ? '1fr' : cell)
              .join(' ')
          }
          bgColor='gray.400'
          borderTopRadius='20px'
          borderBottom='0'
        >
          {tabs.map(tab => (
            <Button
              borderTopRadius='20px'
              display='flex'
              fontSize={{ base: '0.8rem', lg: '1rem' }}
              bgColor={selectedTab === tab.id ? 'gray.50' : 'gray.400'}
              borderBottomLeftRadius='0'
              borderBottomRightRadius='0' 
              borderBottom='0'
              color='gray.700'
              key={tab.id}
              leftIcon={tab.icon}
              onClick={() => handleOnTap(tab)}
            >
              { windowDimensions.width > 0 && windowDimensions.width < 1000 && selectedTab !== tab.id ?
                ''
                :
                tab.name
              }
            </Button>
          ))}
    </Grid>
  )
}

export default ProductPanelHeader;