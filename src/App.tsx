import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Account from "./pages/Account";

const App = () => {
  return (
    <Box bgColor='orange.500' minHeight='200vh' color='orange.50'>
      <NavBar />
      <Box pt='12vh'>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/solutions' element={<Solution />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;