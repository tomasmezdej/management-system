
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from "./pages/HomePage"
import Default from "./layouts/Default"
import LoginPage from "./pages/LoginPage";
import NotLoggedIn from "./layouts/NotLoggedIn";

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/login" element={<NotLoggedIn />}>
            <Route index element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}


export default (App);

