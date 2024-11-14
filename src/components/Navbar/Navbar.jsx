import React from 'react'
import styles from "./styles.module.css"

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navlist}>
        <li className={styles.navitem}>
          <button>Menswear</button>
        </li>
        <li className={styles.navitem}>
          <button>Womenswear</button>
        </li>
        <li className={styles.navitem}>
          <button>Kids</button>
        </li>
        <li className={styles.navitem}>
          <button>Sport</button>
        </li>
        <li className={styles.navitem}>
          <button>Gifts</button>
        </li>
        <li className={styles.navitem}>
          <button>Brands</button>
        </li>
        <li className={styles.red}>
          <button>Sale</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
