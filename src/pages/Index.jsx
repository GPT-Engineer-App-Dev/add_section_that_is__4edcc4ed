import { Box, Center, Text, keyframes, css, VStack } from "@chakra-ui/react";
import FadeInSection from "../components/FadeInSection";
import { FaHeart } from "react-icons/fa";

// Define keyframes for the falling hearts
const fall = keyframes`
  0% { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

// Generate multiple animations with different delays for a more natural look
// Removed the generateAnimations function since it's no longer used

import styled from "@emotion/styled";

// Create a styled component for the falling hearts
// Apply the animations directly within the FallingHeart component using the css prop
const FallingHeart = styled(FaHeart)(() => ({
  position: "fixed",
  color: "white",
  fontSize: `${Math.random() * 1 + 0.5}rem`, // Make them smaller
  animation: `${fall} ${4 + Math.random() * 6}s linear ${Math.random() * 5}s infinite`,
  left: `${Math.random() * 100}vw`,
}));

const Index = () => {
  return (
    <Box position="relative" h="100vh" overflow="hidden" bg="black">
      <Center position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Text fontFamily="monospace" fontSize="6xl" color="white">
          Lovable
        </Text>
      </Center>
      <FadeInSection>
        <VStack spacing={4} paddingY="20">
          <Text color="white" fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text color="white" fontSize="xl">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text color="white" fontSize="xl">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </VStack>
      </FadeInSection>
      <FadeInSection>
        <VStack spacing={4} paddingY="20">
          <Text color="white" fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text color="white" fontSize="xl">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text color="white" fontSize="xl">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </VStack>
      </FadeInSection>
      {Array.from({ length: 50 }).map((_, index) => {
        const duration = 4 + Math.random() * 6;
        const delay = Math.random() * 5;
        const leftPosition = Math.random() * 100;

        return (
          <FallingHeart
            key={index}
            style={{
              animation: `${fall} ${duration}s linear ${delay}s infinite`,
              left: `${leftPosition}vw`,
            }}
          />
        );
      })}
    </Box>
  );
};

export default Index;
