import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Button,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Bell, BarChart2, Clock, ChevronDown } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MotionBox = motion(Box);

interface NotificationCardProps {
  icon: React.ElementType;
  title: React.ReactNode;
  content: React.ReactNode;
  rightContent: React.ReactNode;
  isFirst?: boolean;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  icon: IconComponent,
  title,
  content,
  rightContent,
  isFirst = false,
}) => {
  return (
    <Box
      borderRadius="xl"
      p={{ base: 4, lg: 4 }}
      // minW="240px"
      w="190px"
      h="171px"
      boxShadow="lg"
      background={
        isFirst
          ? "linear-gradient(180deg, #ffffff 45.5%,rgba(22, 93, 255, 0.8) 240%)"
          : "white"
      }
      // mr={"20px !important"}
      // flexShrink={0}
    >
      <Flex justify="space-between" align="center">
        <Icon as={IconComponent} boxSize={6} color="gray.700" />
        {rightContent}
      </Flex>
      {title}
      {content}
    </Box>
  );
};

export const NotificationCarousel: React.FC = () => {
  const cards = [
    {
      icon: Bell,
      title: (
        <Heading
          as="h3"
          fontSize={14}
          fontWeight={500}
          color="#19191A"
          lineHeight={1.2}
          my={4}
        >
          We'll be sending notifications to you here
        </Heading>
      ),
      content: <Box p={4} bg="gray.100" borderRadius="md"></Box>,
      rightContent: (
        <Text fontSize="xs" color="gray.700" fontWeight="medium">
          Save
        </Text>
      ),
    },
    {
      icon: BarChart2,
      title: (
        <Heading
          mt={8}
          mb={2}
          as="h3"
          fontSize="sm"
          fontWeight={500}
          color="#19191A"
          lineHeight={1.2}
        >
          Notify me when any whale moves more than
        </Heading>
      ),
      content: (
        <Flex align="center">
          <Box bg="gray.100" borderRadius="md" px={2} py={1}>
            <HStack gap={1}>
              <Text fontSize="xs" color="gray.700" fontWeight="medium">
                $1,000.00
              </Text>
              <Icon as={ChevronDown} boxSize={3} />
            </HStack>
          </Box>
        </Flex>
      ),
      rightContent: (
        <Checkbox.Root
          defaultChecked
          size={"sm"}
          variant={"solid"}
          colorPalette={"blue"}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>
      ),
    },
    {
      icon: Clock,
      title: (
        <Heading
          mt={6}
          mb={2}
          as="h3"
          fontSize="sm"
          fontWeight={500}
          color="#19191A"
          lineHeight={1.2}
        >
          Notify me when any wallet dormant for
        </Heading>
      ),
      content: (
        <Box>
          <Flex align="center">
            <Box bg="gray.100" borderRadius="md" px={2} py={1}>
              <HStack gap={1}>
                <Text fontSize="xs" color="gray.700" fontWeight="medium">
                  {"> 30 days"}
                </Text>
                <Icon as={ChevronDown} boxSize={3} />
              </HStack>
            </Box>
          </Flex>
          <Heading
            mt={2}
            as="h3"
            fontSize="sm"
            fontWeight={500}
            color="#19191A"
            lineHeight={1.2}
          >
            becomes active
          </Heading>
        </Box>
      ),
      rightContent: (
        <Checkbox.Root
          defaultChecked
          size={"sm"}
          variant={"solid"}
          colorPalette={"blue"}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>
      ),
    },
  ];

  const responsive = {
    xl: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.75,
      partialVisibilityGutter: 40,
    },
    lg: {
      breakpoint: { max: 1024, min: 768 },
      items: 1.5,
      // partialVisibilityGutter: 40,
    },
    md: {
      breakpoint: { max: 768, min: 640 },
      items: 1.75,
      partialVisibilityGutter: 40,
    },
    sm: {
      breakpoint: { max: 640, min: 375 },
      items: 1.8,
      partialVisibilityGutter: 40,
    },
    base: {
      breakpoint: { max: 375, min: 350 },
      items: 1.75,
      partialVisibilityGutter: 40,
    },
    xs: {
      breakpoint: { max: 350, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <Box
      position="relative"
      w={{ base: "95vw", sm: "95vw", md: "360px", lg: "360px", xl: "360px" }}
    >
      {/* <style>
        {`
          .carousel-container {
            width: 320px !important;
          }
        `}
      </style> */}
      <Carousel
        responsive={responsive}
        infinite={true}
        // autoPlay={true}
        autoPlaySpeed={3000}
        centerMode={false}
        // partialVisible={true}
        removeArrowOnDeviceType={["xl", "lg", "md", "sm", "base", "xs"]}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {cards.map((card, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            mr={index !== cards.length - 1 ? "20px" : 0}
            width="300px !important"
          >
            <NotificationCard
              icon={card.icon}
              title={card.title}
              content={card.content}
              rightContent={card.rightContent}
              isFirst={index === 0}
            />
          </MotionBox>
        ))}
      </Carousel>
      {/* Right shadow overlay - more visible for testing */}
      <Box
        position="absolute"
        top={0}
        right={0}
        h="100%"
        w="100px"
        pointerEvents="none"
        // zIndex={2}
        style={{
          // filter: "blur(10px)",
          background: "linear-gradient(to right, transparent, black)",

          // borderTopRightRadius: "16px",
          // borderBottomRightRadius: "16px",
        }}
      />
    </Box>
  );
};
