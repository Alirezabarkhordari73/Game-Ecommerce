import React from "react";
import "./SearchBox.css";
import { motion } from "framer-motion";

const SearchBox = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}>
      <div className="SearchBox-container">
        <form>
          <input
            className="searchbox-input-feild"
            type="text"
            placeholder="کلیدوازه مورد نظر را وارد کنید"></input>
          <button className="searchbox-btn">جستجو</button>
        </form>
      </div>
    </motion.div>
  );
};

export default SearchBox;
