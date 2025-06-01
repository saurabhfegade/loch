import React from "react";
import { Box, Container, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { NotificationCarousel } from "./components/notification-carousel";
import { TestimonialSection } from "./components/testimonial-section";
import { SignupForm } from "./components/signup-form";
import { WatchSection } from "./components/watch-section";

const App: React.FC = () => {
  return (
    <Flex
      direction={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
      minH="100vh"
      w="full"
      h="100vh"
      fontFamily="Inter"
      bg="rgba(25, 25, 26, 1)"
    >
      <Box
        w={{ base: "full", lg: "56%" }}
        position="relative"
        overflowY={{ base: "auto", lg: "auto" }}
        h={{ base: "60%", lg: "full" }}
        pl={{ base: 4, sm: 4, md: 8, lg: 8, xl: 12 }}
        bg="url('/bg-gradient.svg') no-repeat center center"
        bgSize="cover"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
            background: "#F2F2F2",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#B0B1B3",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#888",
          },
          scrollbarWidth: "thin", // Firefox
          scrollbarColor: "#2F15D0 #F2F2F2", // Firefox
        }}
      >
        <Container
          maxW="container.xl"
          px={0}
          py={{ base: 6, lg: 8 }}
          h="full"
          display="flex"
          flexDirection="column"
        >
          <Flex
            direction={{ base: "column", md: "row", lg: "row" }}
            align="start"
            justify="space-between"
            w="full"
            gap={0}
          >
            <Flex
              w={{ base: "full", lg: "50%" }}
              mb={{ base: 8, lg: 0 }}
              flexDirection="column"
              gap={{ base: 4, lg: 4, xl: 6 }}
            >
              <Image
                src="/bell-icon-1.svg"
                alt="Bell Icon"
                w={"32px"}
                h={"32px"}
              />
              <Heading
                as="h1"
                fontSize={{
                  base: "20px",
                  sm: "24px",
                  md: "26px",
                  lg: "26px",
                  xl: "32px",
                }}
                fontWeight={500}
                lineHeight="1.2"
                color="#F2F2F2"
                textShadow="0px 4px 4px #00000040"
                // mb={{ base: 3, lg: 4 }}
                fontFamily="Inter"
              >
                Get notified when a<br />
                highly correlated
                <br />
                whale makes a move
              </Heading>
              <Text
                color="#F2F2F2"
                fontSize={{ base: "sm", lg: "14px", xl: "16px" }}
                fontWeight={500}
                maxW="md"
                fontFamily="Inter"
                lineHeight="1.2"
                opacity={0.7}
              >
                Find out when a certain whale moves
                <br /> more than any preset amount on-chain or
                <br />
                when a dormant whale you care about
                <br /> becomes active.
              </Text>
            </Flex>

            <Box
              // w={{ base: "full", lg: "45%", xl: "40%" }}
              mt={0}
            >
              <NotificationCarousel />
            </Box>
          </Flex>

          <Box mt={{ base: 8, lg: 12, xl: 16 }} flexGrow={1}>
            <WatchSection />
          </Box>

          <Box
            mt={{ base: 8, lg: 8 }}
            borderTop="1px"
            borderColor="whiteAlpha.200"
            pb={12}
            // pt={4}
            // pb={{ base: 0, lg: 12 }}
          >
            <Box pr={{ base: 4, sm: 4, md: 8, lg: 8, xl: 12 }}>
              <Heading
                as="h2"
                fontSize={{ base: "xl", lg: "2xl" }}
                fontWeight="semibold"
                color="white"
                textAlign="right"
                mb={4}
                fontFamily="Inter"
              >
                Testimonials
              </Heading>
              <Box h="1px" w="full" bg="#E5E5E680" mt={6} mb={12} />
            </Box>
            <TestimonialSection />
          </Box>
        </Container>
      </Box>
      <Box
        w={{ base: "full", lg: "44%" }}
        bg="white"
        h={{ base: "40%", lg: "100vh" }}
        overflowY="auto"
      >
        <SignupForm />
      </Box>
    </Flex>
  );
};

export default App;
