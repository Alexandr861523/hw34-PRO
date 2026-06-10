import { NavLink, Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/hotels">Hotels</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;