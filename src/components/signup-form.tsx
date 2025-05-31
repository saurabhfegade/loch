import React from "react";
import { Box, Button, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const SignupForm: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const validateEmail = (email: string) => {
    return email.includes("@") && email.includes(".");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Redirect to welcome page
    window.location.href = "https://app.loch.one/welcome";
  };

  return (
    <VStack
      justify="center"
      align="center"
      // minH="500px"
      h="full"
      px={{ base: 8, lg: 6 }}
      py={{ base: 8, lg: 0 }}
    >
      <MotionBox
        w="full"
        maxW={{ base: "auto", md: "md", lg: "sm" }}
        transform={isHovered || isFocused ? "scale(1.02)" : "scale(1)"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Heading
          as="h2"
          fontSize={{ base: "24px", lg: "39px" }}
          lineHeight="1.2"
          fontWeight={500}
          color="#B0B1B3"
          letterSpacing="0px"
          mb={4}
        >
          Sign up for
          <br />
          exclusive access.
        </Heading>

        <form onSubmit={handleSubmit}>
          <Box mb={4}>
            <Input
              type="email"
              w={{ base: "full", lg: "340px" }}
              h="60px"
              placeholder="Your email address"
              _placeholder={{
                color: "#CACBCC",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "1.2",
                letterSpacing: "0px",
                fontFamily: "Inter",
                paddingLeft: "10px",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              size="md"
              borderColor={error ? "red.500" : "#E5E5E6"}
              borderRadius="8px"
            />
            {error && (
              <Text color="red.500" fontSize="sm" mt={1}>
                {error}
              </Text>
            )}
          </Box>

          <Button
            type="submit"
            w={{ base: "full", lg: "340px" }}
            h="60px"
            bg="#19191A"
            _hover={{ bg: "black" }}
            color="white"
            py={{ base: 3, lg: "18px" }}
            px={{ base: 3, lg: "28px" }}
            size="md"
            borderRadius="8px"
            fontSize="16px"
            fontWeight={600}
            lineHeight="1.2"
            letterSpacing="0px"
          >
            Get started
          </Button>
        </form>

        <Text
          // textAlign="center"
          color="#19191A"
          mt={8}
          fontSize="16px"
          fontWeight={600}
          lineHeight="1.2"
          letterSpacing="0px"
        >
          You&apos;ll receive an email with an invite link to join.
        </Text>
      </MotionBox>
    </VStack>
  );
};
