import React from "react";
import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";
import ContactPage from "../components/ContactPage/ContactPage";

const Contact = () => {
  // http://127.0.0.1:5000
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}>
      <Layout>
        <ContactPage />
      </Layout>
    </motion.div>
  );
};

export default Contact;
