import { Box, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, DrawerFooter, Button, DrawerBody, Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { Drawer, useDisclosure } from "@chakra-ui/react";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Account from "./pages/Account";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <Box bgColor='orange.500' minHeight='100vh' color='orange.50' pb='20vh'>
      <NavBar drawerRef={btnRef} openDrawer={onOpen} />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/solutions'>
          <Route path='vps' element={<Solution />} index/>
          <Route path='dedicated' element={<Solution />} />
          <Route path='web' element={<Solution />} />
          <Route path='game' element={<Solution />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor='orange.400' color='gray.50'>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Order Cart</DrawerHeader>
          <DrawerBody>
            <Flex height='100%' dir="column" alignItems='center' justifyContent='center'>
              Order seems empty...
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button bgColor='yellow.300' color='gray.700'>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default App;