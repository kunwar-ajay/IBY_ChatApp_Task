// import {
//   Box,
//   Container,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
//   Text,
// } from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useHistory } from "react-router";
// import Login from "../components/Authentication/Login";
// import Signup from "../components/Authentication/Signup";

// function Homepage() {
//   const history = useHistory();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("userInfo"));

//     if (user) history.push("/chats");
//   }, [history]);

//   return (
//     <Container maxW="xl" centerContent>
//       <Box
//         d="flex"
//         justifyContent="center"
//         p={3}
//         bg="white"
//         w="100%"
//         m="40px 0 15px 0"
//         borderRadius="lg"
//         borderWidth="1px"
//       >
//         {/* <Text fontSize="4xl" fontFamily="Work sans">
//           ChatBeSideYou
//         </Text> */}
//         <Text 
//   fontSize="4xl" 
//   fontFamily="Arial"  // Changed font family
//   fontWeight="bold"  // Makes the text bolder
//   letterSpacing="wide"  // Adds space between the letters
// >
//   ChatBeSideYou
// </Text>

//       </Box>
//       <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
//         <Tabs isFitted variant="soft-rounded">
//           <TabList mb="1em">
//             <Tab>Login</Tab>
//             <Tab>Sign Up</Tab>
//           </TabList>
//           <TabPanels>
//             <TabPanel>
//               <Login />
//             </TabPanel>
//             <TabPanel>
//               <Signup />
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>
//     </Container>
//   );
// }

// export default Homepage;/



import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        // bg="gray.800"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        box-shadow="gba(50, 50, 93,0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
        bg="#3A6D8C"
        
      >
        <Text 
          fontSize="4xl" 
          fontFamily="Arial"  // Changed font family
          fontWeight="bold"   // Makes the text bolder
          letterSpacing="wide"  // Adds space between the letters
          // color="white"   // Light gray color for the text
          color= "white"
        >
          ChatBesideYou
        </Text>
      </Box>
      <Box w="100%" p={4} borderRadius="lg" borderWidth="1px"
        box-shadow="rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"
        // bg="rgb(121,101,9)"//
        bg="linear-gradient(90deg, rgba(121,101,9,1) 0%, rgba(121,101,9,1) 3%, rgba(0,212,255,1) 71%, rgba(2,0,36,1) 100%)"
          >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab color="white">Login</Tab>
            <Tab color="white">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;

