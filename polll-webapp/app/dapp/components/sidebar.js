"use client";
import Link from "next/link";
import styles from "../browse.module.scss";
import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <>
      <motion.nav
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1, transition: { delay: -0.2 } }}
        transition={{ duration: 1 }}
        className={styles.sidebar}
      >
        <div className={styles.nav}>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1, transition: { delay: 1.2 } }}
            transition={{ type: "spring", duration: 0.8 }}
            whileHover={{
              type: "spring",
              x: 20,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className={styles.navitem}
          >
            <Link href={"/dapp"}>Browse</Link>
          </motion.div>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1, transition: { delay: 1.4 } }}
            transition={{ type: "spring", duration: 0.8 }}
            whileHover={{
              type: "spring",
              x: 20,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className={styles.navitem}
          >
            <Link href={"/dapp/create/createcommunity"}>Create</Link>
          </motion.div>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1, transition: { delay: 1.4 } }}
            transition={{ type: "spring", duration: 0.8 }}
            whileHover={{
              type: "spring",
              x: 20,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className={styles.navitem}
          >
            <Link href={"/dapp/user"}>User</Link>
          </motion.div>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1, transition: { delay: 1.4 } }}
            transition={{ type: "spring", duration: 0.8 }}
            whileHover={{
              type: "spring",
              x: 20,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className={styles.navitem}
          >
            <Link href={"/dapp/communities"}>create community</Link>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}
