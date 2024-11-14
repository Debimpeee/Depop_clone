import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png"
import styles from "./styles.module.css"

const Header = () => {
    const items = [
        '"pink ralph lauren shirt"',
        '"grey nike sweatpants"',
        '"black dickies cargos"',
        '"white linen trousers"',
        '"blue carhartt jeans"',
        '"black josie top"',
        '"red corteiz cargos"',
        '"white lululemon skirt"',
        '"black converse"',
        '"green corduroy shirt"'
    ]
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                if (prevIndex === items.length - 1) {
                    setDirection(-1);
                } 
                else if (prevIndex === 0) {
                    setDirection(1);
                }
                return prevIndex + direction;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [direction]);

  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <img src={Logo} alt="" />
        </div>

        <div className={styles.searchbar}>
            <CiSearch size={20}/>
            <input type="text" placeholder={`Search for ${items[index]}`}/>
        </div>
{/* 
        aria-label="Search for items, brands, or styles…": An accessibility attribute that gives screen readers a description of the input’s purpose, helpful for visually impaired users.
        aria-haspopup="dialog" and aria-controls="search-suggestions": Suggests that a search suggestion or autocomplete dialog opens when typing in this input field.
        maxlength="2048": Restricts input to a maximum of 2048 characters, preventing overly long entries.
 */}


        <div className={styles.actions}>

            <div className={styles.likes}>
                <span className="icon"><MdFavoriteBorder size={25} /></span>
            </div>

            <div className={styles.shop}>
                <span className="icon"><IoBagOutline size={25} /></span>
            </div>

            <div>
                <button className={styles.sell_now}>Sell now</button>
            </div>

            <div>
                <button className={styles.sign_up}>Sign up</button>
            </div>

            <div>
                <button className={styles.login}>Log in</button>
            </div>
        </div>
    </div>
  )
}

export default Header

















