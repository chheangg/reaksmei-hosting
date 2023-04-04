import { Link } from "@chakra-ui/react"
import { Link as ReachLink, To } from "react-router-dom"

const FooterListElement = ({ text, to } : { text: string, to: To }) => (
  <Link fontSize='xl' fontWeight='medium' as={ReachLink} to={to}>
    {text}
  </Link>
)

export default FooterListElement