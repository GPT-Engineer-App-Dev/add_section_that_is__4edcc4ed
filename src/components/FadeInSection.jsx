import React, { useEffect, useRef } from "react";
import { Box, Text, Fade, useDisclosure } from "@chakra-ui/react";

const FadeInSection = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onToggle();
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onToggle]);

  return (
    <Box ref={ref} visibility={isOpen ? "visible" : "hidden"}>
      <Fade in={isOpen}>{children}</Fade>
    </Box>
  );
};

export default FadeInSection;
