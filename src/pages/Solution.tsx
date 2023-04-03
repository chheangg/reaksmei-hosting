import { Box} from "@chakra-ui/react"
import { useState } from "react"

import ProductPanelHeader from "../components/ProductPanel/ProductPanelTab";
import ProductPanel from "../components/ProductPanel/ProductPanel";

const Solution = () => {
  return (
    <Box pt='12vh'>
      <Box mx='10vw'>
        <ProductPanelHeader />
        <ProductPanel>
          <div></div>
        </ProductPanel>
      </Box>
    </Box>
  )
}

export default Solution;