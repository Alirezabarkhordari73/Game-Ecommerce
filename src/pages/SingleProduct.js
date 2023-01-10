import React from "react";
import { motion } from "framer-motion";

import Layout from "../components/Layout/Layout";
import SingleProductPage from "../components/SingleProductPage/SingleProductPage";

const SingleProduct = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}>
      <Layout>
        <SingleProductPage />
      </Layout>
    </motion.div>
  );
};

export default SingleProduct;
