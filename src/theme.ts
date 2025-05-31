import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
const config = defineConfig({
  theme: {
    breakpoints: {
      xl: "1200px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      base: "375px",
    },
    textStyles: {
      heading: {
        fontFamily: "Inter",
      },
      body: {
        fontFamily: "Inter",
      },
      paragraph: {
        fontFamily: "Inter",
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
