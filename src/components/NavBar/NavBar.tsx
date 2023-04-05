import { useEffect, useState } from "react"
import { 
  Image,
  Grid,
  Button,
  Flex,
  Menu,
  MenuButton, 
  MenuList,
  IconButton,
  MenuItem
} from "@chakra-ui/react"
import { Link, useNavigate, To } from "react-router-dom"
import { RiArrowDownSLine } from 'react-icons/ri'
import { BiServer } from 'react-icons/bi'
import { VscServerEnvironment } from "react-icons/vsc";
import { FaGamepad } from 'react-icons/fa'
import { MdOutlineWeb } from 'react-icons/md'
import { CiShoppingCart } from 'react-icons/ci';
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
        icon: <VscServerEnvironment />
      },
      {
        id: 3,
        text: 'Website Hosting',
        to: '/solutions/web',
        icon: <MdOutlineWeb />
      },
      {
        id: 4,
        text: 'Game Hosting',
        to: '/solutions/game',
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

interface Props {
  drawerRef: React.RefObject<HTMLButtonElement>
  openDrawer: () => void
}

const NavBar = ({ drawerRef, openDrawer }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              fontWeight='700' 
              fontSize='xl' 
              >
                <Flex alignItems='center'>{button.text.charAt(0).toUpperCase() + button.text.slice(1)} <RiArrowDownSLine /></Flex>
              </MenuButton>
            <MenuList bgColor='orange.200' border='1px solid black'>
              {button.menuItem.map(item => (
                <MenuItem bgColor='orange.200' color='blackAlpha.900' key={item.id} icon={item.icon} _hover={{bgColor: 'orange.300'}}
                  onClick={() => navigate(item.to)}>
                  {item.text.charAt(0).toUpperCase() + item.text.slice(1)}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        )
      }
    });
  }

  return (
    <Grid 
      bgColor={scrollPosition > 20 ? 'orange.500' : ''}
      templateColumns='1fr 1fr'
      px='10vw' 
      py='6'
      position='fixed' 
      left='0' 
      right='0' 
      zIndex='1'
      transition='2 00ms ease-in-out background-color'
      >
      <Button
        aria-label="Home Button"
        variant='unstyled'
      >
        <Link to='/'>
          <Image h='100%' src={logo} alt=''/>
        </Link>
      </Button>
      <Flex justifyContent='space-between' alignItems='center'>
        {
          buttonsInfoToComponent(buttonsInfo)
        }
        <IconButton 
          variant='ghost'
          ref={drawerRef}
          onClick={openDrawer}
          aria-label='orders' 
          icon={<CiShoppingCart size='32' />} 
          bgColor='transparent' 
          _hover={{
            bgColor: 'yellow.300',
            color: 'orange.500'
          }}
          />
      </Flex>
    </Grid>
  )
}

export default NavBar;