import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Styles from "../styles/Main.module.css";

function Main() {
  return (
    <div className={Styles.Main}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.55,
            },
          },
        }}
      >
        <h1 className={Styles.title}>Hi, I'm Isaac. a Web Stuff Maker</h1>
      </motion.div>

      <p className={Styles.blurb}>
        or a Web developer & Designer resolving end to end business problems, if
        you're not into abbreviations.
      </p>

      <Link href="/about">
        <a className={Styles.cta}>let's work together</a>
      </Link>
      <img src="/me.png" alt="dd" className={Styles.me} />
    </div>
  );
}

export default Main;
