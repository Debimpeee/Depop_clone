import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import styles from "./styles.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>

      <div className={styles.footer_top}>
        <div className={styles.footer_topContainer}>

          <div className={styles.footer_desktopContainer}>
            <div className={styles.footer_columnContainer}>
              <div className={styles.footerColumnTitle}>
                <h4>Depop</h4>
              </div>

              <div className={styles.footerlink_wrapper}>
                <a href="">
                  <p>About us</p>
                </a>
              </div>
              <div className={styles.footerlink_wrapper}>
                <a href="">
                  <p>Careers</p>
                </a>
              </div>
              <div className={styles.footerlink_wrapper}>
                <a href="">
                  <p>Blog</p>
                </a>
              </div>
              <div className={styles.footerlink_wrapper}>
                <a href="">
                  <p>News</p>
                </a>
              </div>
              <div className={styles.footerlink_wrapper}>
                <a href="">
                  <p>Impact</p>
                </a>
              </div>
            </div>


            <div className={styles.footer_columnContainer}>
              <div className={styles.footerColumnTitle}>
                <h4>Sell</h4>
              </div>

              <div className={styles.footerlink_wrapper}>
                <a href="">
                  <p>Sell on Depop</p>
                </a>
              </div>
              <div className={styles.footerlink_wrapper}>
                <a href="">
                  <p>Become a Depop Creator</p>
                </a>
              </div>
            </div>


            <div className={styles.footer_columnContainer}>
              <div className={styles.footerColumnTitle}>
                <h4>Help</h4>
              </div>

              <div className={styles.footerlink_wrapper}>
                <a href="">
                  <p>Safety Centre</p>
                </a>
              </div>
              <div className={styles.footerlink_wrapper}>
                <a href="">
                  <p>Depop Status</p>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.footer_socialsContainer}>
            <div className={styles.footer_socials}>
              <a href="">
                <RiTwitterXLine/>
              </a>
              <a href="">
                <FaInstagram/>
              </a>
              <a href="">
                <FaTiktok/>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottomContainer}>

          <div className={styles.lang_place}>
            <div className={styles.country}>
              <select name="countries" id="countries">
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Ireland">Ireland</option>
                <option value="Italy">Italy</option>
                <option value="New Zealand ">New Zealand</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
              </select>
            </div>

            <div className={styles.language}>
              <select name="language" id="language">
                <option value="English">English</option>
                <option value="Français">Français</option>
                <option value="Deutsch">Deutsch</option>
                <option value="Italiano">Italiano</option>
              </select>
            </div>
          </div>

          <div className={styles.others}>
            <div className={styles.footerlink_wrapper}>
              <a href=""><p>Sitemaps</p></a>
            </div>
            <div className={styles.footerlink_wrapper}>
              <a href=""><p>Terms and Conditions</p></a>
            </div>
            <div className={styles.footerlink_wrapper}>
              <a href=""><p>Privacy</p></a>
            </div>
            <div className={styles.footerlink_wrapper}>
              <a href=""><p>Cookies</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
