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
          <motion.div className={styles.navitem}>
            <Link href={"/dapp"}>Browse</Link>
          </motion.div>
          <motion.div className={styles.navitem}>
            <Link href={"/dapp/user"}>User</Link>
          </motion.div>

          <motion.div className={styles.navitem}>
            <Link href={"/dapp/communities"}>Communities</Link>
          </motion.div>
          <motion.div className={styles.navitem}>
            <Link href={"/dapp/create/createCommunity"}>Create Community</Link>
          </motion.div>
          <motion.div className={styles.navitem}>
            <Link href={"/dapp/create/createPost"}>Create Post</Link>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}
