import { motion } from "framer-motion";
import { Box, Button } from "@mantine/core";

const MantineUiV7 = () => {
  return (
    <Box
      // To use framer motion, you need to pass the component prop
      component={motion.div}
      animate={{
        // slide in from the -100 to original position
        x: [-100, 0],
        opacity: 1,
        transition: { duration: 0.4 },
      }}
    >
      <h1>Mantine UI v7</h1>
      <h3>Framer Motion</h3>

      <Button
        component={motion.button}
        whileHover={{
          scale: 1.1,
          backgroundColor: "#06c",
        }}
        whileTap={{ scale: 0.9 }}
      >
        Click me
      </Button>
      <p>
        Mantine is a MIT-licensed open-source project with its ongoing
        development made possible entirely by the support of these awesome
        backers. If you'd like to join them, please consider:
      </p>
      <ul>
        <li>Become a sponsor or backer on OpenCollective.</li>
        <li>One-time donation via PayPal.</li>
        <li>Monthly donation via GitHub Sponsors.</li>
      </ul>
      <p>Your support means a lot to us, thank you!</p>
    </Box>
  );
};

export default MantineUiV7;
