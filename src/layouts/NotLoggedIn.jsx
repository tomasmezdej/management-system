
import {Outlet} from "react-router-dom";
import { Center, Flex } from '@chakra-ui/react'

const NotLoggedIn = () => {

  return (
    <>
      <Flex h={flex.flexHeight}>
          <Outlet />
      </Flex>
    </>
  );
};

// STYLING
// xs sm md lg
const flex = {
  flexHeight : ['100vh', '100vh', '100vh', '100vh']
}
const outlet = {
  outletWidth: ["100%", "100%", "100%", "100%"],
  outletHeight: ['100vh', '100vh', '100vh','100vh']
}

export default NotLoggedIn;

