import React, { useState } from "react";
import { motion } from "framer-motion";

import Layout from "../components/Layout/Layout";
import HomePageContent from "../components/HomePageContent/HomePageContent";
import Topbanner from "../components/TopBanner/Topbanner";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}>
      <Layout>
        {/* <Topbanner  /> */}
        <HomePageContent />
      </Layout>
    </motion.div>
  );
}

export default Home;
