import { 
    Box, DrawerCloseButton, Text,
    DrawerContent, DrawerHeader, 
    DrawerOverlay, DrawerFooter, 
    Button, DrawerBody, Flex, Accordion, 
    Grid, IconButton, AccordionIcon,
    AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { Drawer, useDisclosure } from "@chakra-ui/react";
import { Plan } from "./types";

import { FiCpu } from 'react-icons/fi'
import { BsMemory, BsDeviceSsd } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { OrdersContext } from "./context/OrdersContext";
import { TokenContext, TokenContextObj } from "./context/TokenContext";
import NavBar from "./components/NavBar/NavBar";
import Billing from "./pages/Billing";
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ orders, setOrders ] = useState<Plan[]>([]); 
  const [ token, setToken ] = useState<string>('');
  const [ failOrder, setFailOrder ] = useState<boolean>(false);
  const [ registrationSuccess, setRegistrationSuccess ] = useState<boolean>(false);
  const [ loginSuccess, setLoginSuccess ] = useState<boolean>(false);
  const navigate = useNavigate();
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const token = window.localStorage.getItem('host-site-token');

    if (token) {
      setToken(token);
    }
  }, []);

  const handleFailOrder = (tokenObj: TokenContextObj) => {
    if (tokenObj) {
      setFailOrder(true);
      if (!tokenObj.failOrder) {
        setTimeout(() => (tokenObj && setFailOrder) ? setFailOrder(false) : null, 5000)
      }
    }
  }

  return (
    <TokenContext.Provider value={{ token, failOrder, setFailOrder: handleFailOrder }}>
      <Box bgGradient='linear(to-b, orange.500, orange.300)' minHeight='100vh' color='orange.50'>
        <NavBar 
          setOrders={setOrders}
          failOrder={failOrder}
          registrationSuccess={registrationSuccess} 
          loginSuccess={loginSuccess} 
          drawerRef={btnRef} 
          openDrawer={onOpen} 
          token={token}
          setToken={setToken} 
        />
        <OrdersContext.Provider value={{ orders, setOrders }}>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='/solutions'>
              {['vps', 'dedicated', 'web', 'game'].map((route => 
                <Route 
                  key={route} 
                  path={route} 
                  element={
                    <Solution />
                  } 
                  index={route === 'vps'} 
                />
              ))}
            </Route>
            <Route path='/contact' element={<Contact />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/billing' element={<Billing orders={orders} setOrders={setOrders} setFailOrder={handleFailOrder} />} />
            <Route path='/account'>
              <Route index element={<Account />} />
              <Route path='register' element={<Register setRegistrationSuccess={setRegistrationSuccess} />} />
              <Route path='login' element={<Login setToken={setToken} setLoginSuccess={setLoginSuccess} />} />
            </Route>
          </Routes>
        </OrdersContext.Provider>
        <Footer />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bgGradient='linear(to-br, gray.50, gray.200)' color='gray.700'>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>Order Cart</DrawerHeader>
            <DrawerBody p='0'>
              {
                orders 
                ?
                <Accordion defaultIndex={[0]} allowMultiple>
                  {
                    orders.map(order => {
                      return (
                        <AccordionItem display='flex' flexDir='column' key={order.id}>
                          <AccordionButton borderLeft='10px solid' borderColor={`${order.color}`} height='4rem' justifyContent='space-between'>
                            <Text fontWeight='semibold'>
                              {order.name}
                            </Text>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>
                            <Flex gap='0.5rem' alignItems='center'><FiCpu size='20' /> <Text fontWeight='semibold'>{order.cpu}</Text></Flex>
                            <Flex gap='0.5rem' alignItems='center'><BsMemory size='20' /> <Text fontWeight='semibold'>{order.ram}</Text></Flex>
                            <Flex gap='0.5rem' alignItems='center'><BsDeviceSsd size='20' /> <Text fontWeight='semibold'>{order.ssd}</Text></Flex>
                            <Text mt='1rem'>{order.extra?.map((extra, i) => extra + ((order.extra?.length === i + 1) ? '.' : ', '))}</Text>
                            <Grid templateColumns='1fr 1fr 1fr' alignItems='center' justifyItems='center'>
                              <IconButton 
                                variant='ghost' 
                                color='orange.400' 
                                aria-label="remove one" 
                                icon={<AiOutlineMinus />} 
                                onClick={() => (order.setOrdered && order.ordered) ? order.setOrdered(order.ordered - 1) : null }
                              ></IconButton>
                              <Text fontWeight='bold'>{String(order.ordered)}</Text>
                              <IconButton 
                                variant='ghost' 
                                color='orange.400' 
                                aria-label="add one" 
                                icon={<AiOutlinePlus />} 
                                onClick={() => (order.setOrdered && order.ordered) ? order.setOrdered(order.ordered + 1) : null } 
                                ></IconButton>
                            </Grid>
                          </AccordionPanel>
                        </AccordionItem>
                      );
                    }
                    )
                  }
                </Accordion>
                :
                <Flex height='100%' dir="column" alignItems='center' justifyContent='center'>
                  Order seems empty...
                </Flex>
                } 
            </DrawerBody>
            <DrawerFooter>
              <Button variant='outline' borderColor='gray.700' mr={3} onClick={onClose} _hover={{ bgGradient: ''}}>
                Cancel
              </Button>
              <Button 
                bgGradient='linear(to-br, orange.500, yellow.300)' 
                color='gray.50' 
                onClick={
                  token || orders.length > 0  ?
                    () => {
                      onClose();
                      navigate('/billing')
                    }
                    : 
                    () => handleFailOrder({ token, failOrder, setFailOrder: handleFailOrder }
                  )
                }
                _hover={{ color: 'gray.700' }}
              >
                Checkout
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </TokenContext.Provider>
  );
}

export default App;