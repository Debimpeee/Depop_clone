import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import styles from "./styles.module.css"

const Search = () => {
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
    ];

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1)

    useEffect (() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                if(prevIndex === items.length - 1){
                    setDirection(-1)
                }
                else if(prevIndex === 0){
                    setDirection(1)
                }
                return prevIndex + direction
            });
        }, 2000)
        return () => clearInterval(interval)
    }, [direction])

  return (
    <div>
      <CiSearch/>
      <input type="text" placeholder={`Search for ${items[index]}`} />
    </div>
  )
}

export default Search






// import React, { useEffect, useState } from 'react';
// import { CiSearch } from "react-icons/ci";
// import styles from "./styles.module.css";

// const Search = () => {
//     const items = [
//         '"pink ralph lauren shirt"',
//         '"grey nike sweatpants"',
//         '"black dickies cargos"',
//         '"white linen trousers"',
//         '"blue carhartt jeans"',
//         '"black josie top"',
//         '"red corteiz cargos"',
//         '"white lululemon skirt"',
//         '"black converse"',
//         '"green corduroy shirt"'
//     ];

//     const [index, setIndex] = useState(0);
//     const [direction, setDirection] = useState(1);
//     const [sparkles, setSparkles] = useState([]);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prevIndex) => {
//                 if (prevIndex === items.length - 1) {
//                     setDirection(-1);
//                 } else if (prevIndex === 0) {
//                     setDirection(1);
//                 }
//                 return prevIndex + direction;
//             });
//         }, 2000);
//         return () => clearInterval(interval);
//     }, [direction, items.length]);

//     const handleClick = () => {
//         // Add scale animation
//         const currentItem = items[index];
//         console.log(`You clicked on: ${currentItem}`);
        
//         // Optionally add your own styling or animations here
//     };

//     const handleDoubleClick = (e) => {
//         const sparkle = document.createElement('span');
//         sparkle.textContent = '✨';
//         sparkle.style.position = 'absolute';
//         sparkle.style.left = `${Math.random() * 100}%`;
//         sparkle.style.top = `${Math.random() * 100}%`;
//         sparkle.style.transition = 'transform 1s';
//         sparkle.style.pointerEvents = 'none';

//         e.currentTarget.appendChild(sparkle);
//         setSparkles(prev => [...prev, sparkle]);

//         setTimeout(() => {
//             sparkle.remove();
//         }, 1000);
//     };

//     return (
//         <div className={styles.searchContainer} onDoubleClick={handleDoubleClick}>
//             <CiSearch />
//             <input 
//                 type="text" 
//                 placeholder={`Search for ${items[index]}`} 
//                 onClick={handleClick} 
//                 className={styles.searchInput}
//             />
//             {sparkles.map((sparkle, index) => (
//                 <span key={index} className={styles.sparkle}>{sparkle.textContent}</span>
//             ))}
//         </div>
//     );
// };

// export default Search;
