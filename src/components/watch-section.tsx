import React from "react";
import { Box, Flex, Heading, Icon, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const MotionBox = motion(Box);

export const WatchSection: React.FC = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      justify="space-between"
      align="flex-start"
      h="full"
    >
      <MotionBox
        order={{ base: 1, lg: 2 }}
        pr={{ base: 0, lg: 12 }}
        mb={{ base: 6, lg: 0 }}
        ml={{ base: 0, lg: 6 }}
        w={{ base: "full", lg: "auto" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        display="flex"
        flexDirection="column"
        // justifyContent="flex-end"
        alignItems="flex-end"
        gap={4}
      >
        <Flex align="center">
          <Icon as={Eye} color="white" boxSize={{ base: 6, lg: 8 }} />
        </Flex>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", lg: "3xl" }}
          fontWeight="semibold"
          color="white"
          // mb={3}
          textAlign="right"
          fontFamily="Inter"
          lineHeight="1.2"
        >
          Watch what the
          <br />
          whales are doing
        </Heading>
        <Text
          color="whiteAlpha.800"
          fontSize={{ base: "xs", lg: "sm" }}
          textAlign="right"
          fontFamily="Inter"
          lineHeight="1.2"
        >
          All whales are not equal. Know exactly
          <br /> what the whales impacting YOUR <br /> portfolio are doing.
        </Text>
      </MotionBox>

      <Box
        bg="white"
        borderRadius="xl"
        boxShadow="lg"
        w={{ base: "full", lg: "320px", xl: "335px" }}
        // h="306px"
      >
        <Image
          src="/loch-cohorts-1.png"
          alt="Whale Dashboard"
          objectFit="cover"
          w="full"
          h="full"
          borderRadius="lg"
        />
      </Box>
    </Flex>
  );
};
