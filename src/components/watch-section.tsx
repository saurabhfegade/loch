import React from "react";
import { Box, Flex, Heading, Icon, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const MotionBox = motion(Box);

export const WatchSection: React.FC = () => {
  return (
    <Flex
      direction={{ base: "column-reverse", lg: "row" }}
      justify="space-between"
      align="flex-start"
      h="full"
      pr={{ base: 4, sm: 4, md: 8, lg: 0 }}
    >
      <MotionBox
        order={{ base: 1, lg: 2 }}
        pr={{ base: 0, sm: 0, md: 0, lg: 8, xl: 14 }}
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
        gap={{ base: 2, lg: 4 }}
        mt={4}
      >
        <Image src="/eye-icon.svg" alt="Eye Icon" w={"30px"} h={"20px"} />
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
          textAlign="right"
        >
          Watch what the
          <br />
          whales are doing
        </Heading>
        <Text
          color="#F2F2F2"
          fontSize={{ base: "sm", lg: "14px", xl: "16px" }}
          fontWeight={500}
          maxW="md"
          fontFamily="Inter"
          lineHeight="1.2"
          textAlign="right"
          opacity={0.7}
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
        mb={{ base: 4, lg: 0 }}
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
