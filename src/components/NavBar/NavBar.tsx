import { 
  Image,
  Box, 
  Grid,
  Button,
  Flex,
  Menu,
  MenuButton, 
  MenuList,
  MenuItem} from "@chakra-ui/react"
import { Link, To } from "react-router-dom"
import { RiArrowDownSLine } from 'react-icons/ri'
import { BiServer } from 'react-icons/bi'
import { GrServer } from 'react-icons/gr'
import { FaGamepad } from 'react-icons/fa'
import { MdOutlineWeb } from 'react-icons/md'
import logo from '../../assets/reaksmei.png';

interface menuItem {
  id: number,
  text: string,
  to: To,
  icon: JSX.Element,
}

interface NavButton {
  id: number,
  text: string,
  interactivity: boolean
  to?: To,
  menuItem?: menuItem[]
}

const buttonsInfo: NavButton[] = [
  {
    id: 1,
    text: 'solutions',
    interactivity: true,
    menuItem: [
      {
        id: 1,
        text: 'Virtual Private Server',
        to: '/solutions/vps',
        icon: <BiServer />
      },
      {
        id: 2,
        text: 'Dedicated Server',
        to: '/solutions/dedicated',
        icon: <GrServer />
      },
      {
        id: 3,
        text: 'Website Hosting',
        to: '/solutions/webhosting',
        icon: <MdOutlineWeb />
      },
      {
        id: 4,
        text: 'Game Hosting',
        to: '/solutions/gamehosting',
        icon: <FaGamepad />
      }
    ]
  },
  {
    id: 2,
    text: 'contact',
    to: '/contact',
    interactivity: false,
  },
  {
    id: 3,
    text: 'about',
    to: '/about',
    interactivity: false,
  },
  {
    id: 4,
    text: 'Account',
    to: '/account',
    interactivity: false,
  }
]

const NavBar = () => {
  const buttonsInfoToComponent = (buttons: NavButton[]) => {
    return buttons.map(button => {
      if (!button.id || !button.text) {
        throw new Error('An error occured in components');
      }

      if (!button.interactivity && button.to) {
        return (
          <Button 
            key={button.id} 
            variant='link' 
            fontSize='xl' 
            color='orange.50' 
            bgColor={button.text === 'Account' ? 'yellow.400' : ''}
            p={button.text === 'Account' ? '1rem 2rem' : ''}
            >
             <Link to={button.to as To}>{button.text.charAt(0).toUpperCase() + button.text.slice(1)}</Link>
          </Button>
        )
      } 

      if (button.interactivity && button.menuItem) {
        return (
          <Menu key={button.id}>
            <MenuButton   
              flexDir='row'
              alignItems='center'
              >
                <Button 
                  variant='link' 
                  color='orange.50'
                  rightIcon={<RiArrowDownSLine />}
                  fontWeight='medium' 
                  fontSize='xl' 
                  >
                  {button.text.charAt(0).toUpperCase() + button.text.slice(1)}
                </Button>
              </MenuButton>
            <MenuList bgColor='orange.200' border='1px solid black'>
              {button.menuItem.map(item => (
                <MenuItem bgColor='orange.200' color='blackAlpha.900' key={item.id} icon={item.icon} _hover={{bgColor: 'orange.300'}}>
                  <Link to={item.to}>{item.text}</Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        )
      }
    });
  }

  return (
    <Grid templateColumns='1fr 1fr' px='10vw' py='6' position='fixed' left='0' right='0'>
      <Button
        aria-label="Home Button"
        variant='unstyled'
      >
        <Link to='/'>
          <Image h='100%' src={logo} alt=''/>
        </Link>
      </Button>
      <Flex justifyContent='space-between'>
        {
          buttonsInfoToComponent(buttonsInfo)
        }
      </Flex>
    </Grid>
  )
}

export default NavBar;