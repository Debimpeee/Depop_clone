import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
























// import React, { useState } from 'react';
// import Header from '../../components/header/header';
// import Navbar from '../../components/Navbar/Navbar';
// import Footer from '../../components/Footer/Footer';
// import { GoArrowRight, GoArrowLeft } from "react-icons/go";
// import image15 from "../../assets/image15.webp";
// import image07 from "../../assets/image07.webp";
// import image18 from "../../assets/image18.webp";
// import image26 from "../../assets/image26.webp";
// import image12 from "../../assets/image12.webp";
// import image09 from "../../assets/image09.webp";
// import image17 from "../../assets/image17.webp";
// import image13 from "../../assets/image13.webp";
// import image207 from "../../assets/image207.webp";
// import image203 from "../../assets/image203.webp";
// import image208 from "../../assets/image208.webp";
// import image204 from "../../assets/image204.webp";
// import image205 from "../../assets/image205.webp";
// import image209 from "../../assets/image209.webp";
// import image25 from "../../assets/image25.webp";
// import image206 from "../../assets/image206.webp";
// import image27 from "../../assets/image27.webp";
// import styles from "./styles.module.css";

// // Array with corrected slide items
// const slides = [
//   { src: image17, title: 'Christmas Sweater', searchCount: '+1k' },
//   { src: image13, title: 'Minimalist', searchCount: '+5.5k' },
//   { src: image207, title: 'Winter', searchCount: '+1.3k' },
//   { src: image203, title: 'Vintage Carhartt Jacket', searchCount: '+1.3k' },
//   { src: image208, title: 'Moon Boots', searchCount: '+1.1k' },
//   { src: image204, title: 'Sweater Dress', searchCount: '+1.2k' },
//   { src: image205, title: 'Winter Jacket', searchCount: '+1.4k' },
//   { src: image209, title: 'Montbell Puffer', searchCount: '+1k' },
// ];

// const itemsPerSlide = {
//   lg: 4,
//   md: 4,
//   sm: 2,
//   xl: 4,
//   xs: 2
// };

// function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = Math.ceil(slides.length / itemsPerSlide.lg);

//   const goToNextSlide = () => {
//     if (currentSlide < totalSlides - 1) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const goToPreviousSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   // Determine visible slides based on currentSlide and itemsPerSlide
//   const visibleSlides = slides.slice(
//     currentSlide * itemsPerSlide.lg,
//     (currentSlide + 1) * itemsPerSlide.lg
//   );

//   return (
//     <section className={styles.popular}>
//       <div className={styles.popularText}>
//         <h2>Popular this week</h2>
//       </div>

//       <div className={styles.popularCarousel} role="region" aria-labelledby="popular-carousel-heading">
//         <h3 id="popular-carousel-heading" className="visually-hidden">
//           Carousel of popular items this week
//         </h3>

//         <div className={styles.imagetextCarousel}>
//           {visibleSlides.map((slide, index) => (
//             <div key={index} className={styles.imagetextSection}>
//               <a href="#" className={styles.popularTag}>
//                 <div className={styles.popularImage}>
//                   <img src={slide.src} alt={slide.title} width="833px" height="833px" />
//                 </div>
//                 <div className={styles.textContainer}>
//                   <h3>{slide.title}</h3>
//                   <p><b>{slide.searchCount}</b> searches in the last week</p>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           onClick={goToPreviousSlide}
//           className={`${styles.styledButton} ${styles.styledBtn} ${currentSlide === 0 ? styles.disabled : ''}`}
//           aria-label="Previous slide"
//           disabled={currentSlide === 0}
//         >
//           <GoArrowLeft className={styles.arrowIcon} />
//         </button>
        
//         <button
//           onClick={goToNextSlide}
//           className={`${styles.styledButton} ${styles.styledBtn} ${currentSlide === totalSlides - 1 ? styles.disabled : ''}`}
//           aria-label="Next slide"
//           disabled={currentSlide === totalSlides - 1}
//         >
//           <GoArrowRight className={styles.arrowIcon} />
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Home;










