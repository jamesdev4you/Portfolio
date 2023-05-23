import React from "react";
import Sun from "../Images/sun.png";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export default function HomeImage() {
  return (
    <motion.div
      animate={{ rotate: [0, 45, 45, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
    >
      <img
        src={`${Sun}?w=164&h=164&fit=crop&auto=format`}
        alt="Sun"
        style={{ width: "800px", height: "800px" }}
      />
    </motion.div>
  );
}
