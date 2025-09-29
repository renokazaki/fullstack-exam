import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

type NavbarProps = {
  items: string[];
};
const Navbar = ({ items }: NavbarProps) => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          {items.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <Link href={`/${item}`} className={styles.navLink}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
