import styles from "./browse.module.scss";
import Sidebar from "./components/sidebar";

export default function BrowseLayout({ children }) {
  return (
    <>
      <main className={styles.main}>
        <Sidebar />
        {children}
      </main>
    </>
  );
}
