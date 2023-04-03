import { Box } from "@chakra-ui/react"

const ProductPanel = ({children} : { children: JSX.Element }) => (
  <Box 
    bgColor='gray.50'
    minHeight='75vh'
    borderBottomLeftRadius='3xl'
    borderBottomRightRadius='3xl'
  >
    {children}
  </Box>
)

export default ProductPanel