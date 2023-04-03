import { Box } from "@chakra-ui/react"

const ProductPanel = ({children} : { children: JSX.Element[] }) => (
  <Box 
    color='gray.700'
    bgColor='gray.50'
    minHeight='75vh'
    borderBottomLeftRadius='3xl'
    borderBottomRightRadius='3xl'
    px='2rem'
    py='2rem'
  >
    {children}
  </Box>
)

export default ProductPanel