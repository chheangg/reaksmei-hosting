import { Box, Heading, Text } from "@chakra-ui/react"

const Error = () => (
  <Box minH='80vh' pt='12vh' px='10vw'>
    <Heading>
      404 Error: Page not found...
    </Heading>
    <Text>
      Contact our admin through our contact page to resolve this issue.
    </Text>
  </Box>
)

export default Error;