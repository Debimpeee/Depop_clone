import React from 'react'
import styles from "./styles.module.css"


const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.men_cont}>
            <div className={styles.mens_wear}>
                <h1>Menswear</h1>
                <button className={styles.shop_btn}>Shop now</button>
            </div>
        </div>

        <div className={styles.women_cont}>
            <div className={styles.womens_wear}>
                <h1>Womenswear</h1>
                <button>Shop now</button>
            </div>
        </div>
     
    </div>
  )
}

export default Hero
