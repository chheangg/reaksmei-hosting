import { Box, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, DrawerFooter, Button, DrawerBody, Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import { Drawer, useDisclosure } from "@chakra-ui/react";
import { Plan } from "./types";

import { OrdersContext } from "./context/OrdersContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ orders, setOrders ] = useState<Plan[]>([]); 
  const [ token, setToken ] = useState<string>('');
  const [ registrationSuccess, setRegistrationSuccess ] = useState<boolean>(false);
  const [ loginSuccess, setLoginSuccess ] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const token = window.localStorage.getItem('host-site-token');

    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <Box bgGradient='linear(to-b, orange.500, orange.300)' minHeight='100vh' color='orange.50'>
      <NavBar 
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
          <Route path='/about' element={<About />} />
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
          <DrawerBody>
            <Flex height='100%' dir="column" alignItems='center' justifyContent='center'>
              Order seems empty...
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' borderColor='gray.700' mr={3} onClick={onClose} _hover={{ bgGradient: ''}}>
              Cancel
            </Button>
            <Button bgGradient='linear(to-br, orange.500, yellow.300)' color='gray.50' _hover={{ color: 'gray.700' }}>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default App;