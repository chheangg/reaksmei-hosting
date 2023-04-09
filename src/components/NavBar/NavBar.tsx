import { useEffect, useState } from "react"
import { 
  Box,
  Image,
  Grid,
  Button,
  Flex,
  Menu,
  MenuButton, 
  MenuList,
  IconButton,
  MenuItem,
  Alert, AlertIcon, AlertTitle, AlertDescription 
} from "@chakra-ui/react"
import { Link, useNavigate, To } from "react-router-dom"
import { RiArrowDownSLine } from 'react-icons/ri'
import { BiServer } from 'react-icons/bi'
import { VscServerEnvironment } from "react-icons/vsc";
import { FaGamepad } from 'react-icons/fa'
import { MdOutlineWeb } from 'react-icons/md'
import { CiShoppingCart } from 'react-icons/ci';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { Plan } from "../../types"
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
    text: 'faq',
    to: '/faq',
    interactivity: false,
  },
  {
    id: 4,
    text: 'about',
    to: '/About',
    interactivity: false,
  },
  {
    id: 5,
    text: 'Account',
    to: '/account',
    interactivity: false,
  }
]

interface Props {
  drawerRef: React.RefObject<HTMLButtonElement>
  openDrawer: () => void,
  token: string,
  setToken: React.Dispatch<React.SetStateAction<string>>,
  registrationSuccess: boolean,
  loginSuccess: boolean,
  failOrder: boolean,
  setOrders: React.Dispatch<React.SetStateAction<Plan[]>>
}

const NavBar = ({ drawerRef, openDrawer, token, setToken, setOrders, registrationSuccess, loginSuccess, failOrder }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
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

  const buttonsInfoToComponent = (buttons: NavButton[], setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
    return buttons.map(button => {
      if (!button.id || !button.text) {
        throw new Error('An error occured in components');
      }

      if (!button.interactivity && button.to) {
        return (
          <Button 
            color={{
              base: 'gray.700',
              lg: 'gray.50'
            }}
            key={button.id} 
            variant='link' 
            fontSize='xl' 
            bgColor={button.text === 'Account' ? 'yellow.400' : ''}
            p={button.text === 'Account' ? '1rem 2rem' : ''}
            onClick={token && button.text === 'Account' ? () => {
              setMenuVisible(false)
              setToken('')
              window.localStorage.removeItem('host-site-token')
              setOrders([]);
              navigate('/');
            } : () => {
              setMenuVisible(false)
            }}
            >
             {!(token && button.text === 'Account') ? 
              <Link to={button.to as To}>{button.text.charAt(0).toUpperCase() + button.text.slice(1)}</Link>
              : 'Sign Out'}
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
                  onClick={() => {
                    navigate(item.to)
                    setMenuVisible(false)
                  }}>
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
    <Box
      bg='transparent'
      position='fixed' 
      zIndex='2'
      left='0' 
      right='0' 
    >
      {
        registrationSuccess ?
          <Alert color='gray.700' status="success">
            <AlertIcon />
            <AlertTitle>Registration successful!</AlertTitle>
            <AlertDescription>{token ? 'You must place an order on an item' : 'Please login to continue'}</AlertDescription>
          </Alert>
        : null
      }
      {
        loginSuccess ?
        <Alert color='gray.700' status="success">
          <AlertIcon />
          <AlertTitle>Login successful!</AlertTitle>
          <AlertDescription>You may now place orders.</AlertDescription>
        </Alert>
        : null
      }
      {
        failOrder ?
        <Alert color='gray.700' status="error">
          <AlertIcon />
          <AlertTitle>Order failed!</AlertTitle>
          <AlertDescription>Please login to place orders</AlertDescription>
        </Alert>
        : null
      }
      <Grid
          position='relative'
          bgColor={scrollPosition > 20 ? 'orange.500' : ''}
          templateColumns='1fr 1fr'
          zIndex='0'
          alignItems='center'
          py='7'
          px='10vw'
          transition='2 00ms ease-in-out background-color'
        >
        <Button
          aria-label="Home Button"
          variant='unstyled'
        >
          <Link to='/'>
            <Image 
              h={{
                base: '50%',
                lg: '100%'
              }} 
              src={logo} 
              alt=''
            />
          </Link>
        </Button>
        <Flex
          display={{
            base: 'flex',
            lg: 'none'
          }}
          justifyContent='flex-end'
        >
            <IconButton 
              display={{
                base: 'block',
                lg: 'none'
              }}
              mr='0.25rem'
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
          <IconButton
            bgColor='transparent'
            aria-label='menu'
            icon={<GiHamburgerMenu size='32' />}
            onClick={() => setMenuVisible(!menuVisible)}
            _hover={{
              bgColor: 'transparent'
            }}
          >
          </IconButton>
        </Flex>
        <Box
          bgColor={{ 
            base: 'rgba(0, 0, 0, 0.5)',
            lg: 'transparent' 
          }}
          position={{ 
            base: 'absolute', 
            lg: 'static'
          }}
          h={{
            base: '100vh',
            lg: 'auto'
          }}
          top={{
            base: '0',
            lg: '',
          }}
          bottom={{
            base: '0',
            lg: '',
          }}
          left={{
            base: '0',
            lg: '',
          }}
          right={{
            base: '0',
            lg: '',
          }}
          display={{
            base: menuVisible ? 'flex' : 'none',
            lg: 'block'
          }}
        >
          <Box
            position={{
              base: 'absolute',
              lg: 'static'
            }}
            right={{
              base: '0',
              lg: ''
            }}
            h={{
              base: '100%',
              lg: 'auto'
            }}
            w={{
              base: '75%',
              lg: 'auto'
            }}
            bgColor={{
              base: 'gray.50',
              lg: 'transparent'
            }}
            color={{
              base: 'gray.700',
              lg: 'gray.50'
            }}
            px={{
              base: '10vw',
              lg: '0'    
            }}
            py={{
              base: '30vh',
              lg: '0'
            }}
            display='flex'
            flexDir={{
              base: 'column',
              lg: 'row'
            }}
            gap={{
              base: '2rem',
              lg: '0'
            }}
            justifyContent='space-between' 
            alignItems='center'
          >
            <IconButton
              display={{
                base: 'block',
                lg: 'none'
              }}
              size='md'
              position='absolute'
              mt='2rem'
              mr='2rem'
              top='0'
              right='0'
              bgColor='transparent'
              aria-label='close menu'
              icon={<AiOutlineClose size='32' />}
              onClick={() => setMenuVisible(!menuVisible)}
              _hover={{
                bgColor: 'transparent'
              }}
            >

            </IconButton>
            {
              buttonsInfoToComponent(buttonsInfo, setMenuVisible)
            }
            <IconButton 
              display={{
                base: 'none',
                lg: 'block'
              }}
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
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default NavBar;