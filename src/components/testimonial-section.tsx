import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  HStack,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, title, quote }) => {
  const textRef = React.useRef<HTMLParagraphElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [dynamicWidth, setDynamicWidth] = React.useState(280);
  const [isMobile] = useMediaQuery(["(max-width: 768px)"]);

  React.useEffect(() => {
    if (textRef.current && containerRef.current) {
      // Calculate width based on text length
      const minWidth = 280;
      const maxWidth = isMobile ? 300 : 600;

      // Use text length as a basis for width calculation
      const textLength = quote.length;

      // Short text: ~80 chars or less = min width
      // Long text: ~200+ chars = max width
      let calculatedWidth;
      if (textLength <= 80) {
        calculatedWidth = minWidth;
      } else if (textLength >= 200) {
        calculatedWidth = maxWidth;
      } else {
        const ratio = (textLength - 80) / (200 - 80);
        calculatedWidth = minWidth + ratio * (maxWidth - minWidth);
      }

      setDynamicWidth(Math.round(calculatedWidth));
    }
  }, [quote]);

  return (
    <Box
      ref={containerRef}
      bg="white"
      borderRadius="xl"
      p={{ base: "20px", lg: "20px" }}
      w={`${dynamicWidth}px`}
      h={{ base: "136px", lg: "136px" }}
      boxShadow="md"
      mr={{ base: 3, lg: 6 }}
      flexShrink={0}
    >
      <HStack mb={2}>
        <Heading as="h3" fontSize={16} fontWeight={600} color="#19191A">
          {name}
        </Heading>
        <Text fontSize={13} fontWeight={500} color="#96979A">
          {title}
        </Text>
      </HStack>
      <Text
        ref={textRef}
        fontSize={{ base: "14px", lg: "16px" }}
        fontWeight={500}
        color="#1D2129"
        lineHeight="1.2"
        whiteSpace="normal"
        wordBreak="break-word"
      >
        "{quote}"
      </Text>
    </Box>
  );
};

export const TestimonialSection: React.FC = () => {
  const testimonialContainerRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const testimonials = [
    {
      name: "Jack F",
      title: "Ex Blackrock PM",
      quote:
        "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
    },
    {
      name: "Yash P",
      title: "Research, 3poch Crypto Hedge Fund",
      quote:
        "I use Loch everyday now. I don't think I could analyze crypto whale trends and markets without it. I'm addicted!",
    },
    {
      name: "Shiv S",
      title: "Co-Founder, Magik Labs",
      quote:
        "Managing my own portfolio is helpful and well designed. What's really interesting is watching the whales though. No one else has made whale tracking so simple.",
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (testimonialContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - testimonialContainerRef.current.offsetLeft);
      setScrollLeft(testimonialContainerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !testimonialContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - testimonialContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    testimonialContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (testimonialContainerRef.current) {
      setIsDragging(true);
      setStartX(
        e.touches[0].pageX - testimonialContainerRef.current.offsetLeft,
      );
      setScrollLeft(testimonialContainerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !testimonialContainerRef.current) return;
    const x = e.touches[0].pageX - testimonialContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    testimonialContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    const container = testimonialContainerRef.current;
    if (!container) return;

    setTimeout(() => {
      if (
        container.scrollLeft === 0 &&
        container.scrollWidth > container.clientWidth
      ) {
        container.scrollLeft = 10;
        setTimeout(() => {
          container.scrollLeft = 0;
        }, 300);
      }
    }, 500);
  }, [testimonials.length]);

  return (
    <Box mb={4} position="relative" w="full" pb={{ base: 4, lg: 0 }}>
      <Flex align="flex-end" gap={{ base: 2, md: 4, lg: 12 }}>
        <Box flexShrink={0} mb={{ base: 0, lg: 0 }}>
          <Box
            w={{ base: "36px", lg: "60px" }}
            h={{ base: "36px", lg: "60px" }}
          >
            <Image src="/loch-logo.svg" alt="logo" w="full" h="full" />
          </Box>
        </Box>
        <Flex
          ref={testimonialContainerRef}
          overflowX="hidden"
          cursor="grab"
          flexGrow={1}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          mr={{ base: 0, lg: 0 }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Testimonial
                name={testimonial.name}
                title={testimonial.title}
                quote={testimonial.quote}
              />
            </MotionBox>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
