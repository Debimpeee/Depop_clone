import React, { useState } from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import image15 from "../../assets/image15.webp"
import image07 from "../../assets/image07.webp"
import image18 from "../../assets/image18.webp"
import image26 from "../../assets/image26.webp"
import image12 from "../../assets/image12.webp"
import image09 from "../../assets/image09.webp"
import image17 from "../../assets/image17.webp"
import image13 from "../../assets/image13.webp"
import image207 from "../../assets/image207.webp"
import image203 from "../../assets/image203.webp"
import image208 from "../../assets/image208.webp"
import image204 from "../../assets/image204.webp"
import image205 from "../../assets/image205.webp"
import image209 from "../../assets/image209.webp"
import image25 from "../../assets/image25.webp"
import image206 from "../../assets/image206.webp"
import image27 from "../../assets/image27.webp"
import styles from "./styles.module.css"

const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>

      {/* Hero Section */}
      <section className={styles.hero}>
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
      </section>


      {/* Sell Section */}
      <section className={styles.sell_section}>
        <div className={styles.buyforless}>
          <h2>Buy for less. Sell for free. Keep fashion circular.</h2>
          <button className={styles.buyforless_btn}>Sell now</button>
        </div>
        <div className={styles.carousel_container}>

          <div className={styles.carousel_slider1}>
            <div className={styles.carousel_item1}>
              <section className={styles.carousel_itemContainer}>
                <div className={styles.content_wrapper}>
                  <h2><span>No selling fees</span></h2>
                  <p>There are zero selling fees* on Depop. From July 18, there will be a new Marketplace Fee for buyers. See updated terms  <a href="https://depophelp.zendesk.com/hc/en-gb/articles/360001773148-Terms-of-Service#h_01JBVDQVJ1BRWBBERD7R3DV0FF">here</a>.</p>
                  <div className={styles.cta_wrapper}>
                    <a href="">
                      <span>List now</span>
                    </a>
                  </div>
                </div>
                <picture>
                  <img src={image25} alt="carousel image25" />
                </picture>
              </section>
            </div>
          </div>


          <div className={styles.carousel_slider2}>
            <div className={styles.carousel_item2}>
              <section className={styles.carousel_itemContainer}>
                <div className={styles.content_wrapper}>
                  <h2><span>Statement knitwear</span></h2>
                  <p>Weave some pattern into your look</p>
                  <div className={styles.cta_wrapper}>
                    <a href="">
                      <span>Shop now</span>
                    </a>
                  </div>
                </div>
                <picture>
                  <img src={image206} alt="carousel image206" />
                </picture>
              </section>
            </div>
          </div>


          <div className={styles.carousel_slider3}>
            <div className={styles.carousel_item3}>
              <section className={styles.carousel_itemContainer}>
                <div className={styles.content_wrapper}>
                  <h2><span>Holiday gifts</span></h2>
                  <p>Give them something special</p>
                  <div className={styles.cta_wrapper}>
                    <a href="">
                      <span>Explore now</span>
                    </a>
                  </div>
                </div>
                <picture>
                  <img src={image27} alt="carousel image27" />
                </picture>
              </section>
            </div>
          </div>

          <div className={styles.dots_container}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          <div className={styles.arrow_button}>
            <button> <GoArrowRight/> </button>
          </div>
        </div>
      </section> 
    

      {/* Branded Category */}
      <section className={styles.branded_category}>
        <div className={styles.branded_text}>
          <h2>You might be into</h2>
        </div>
        <div className={styles.boxed_container}>
          <div className={styles.box}>
            <a href="" className={styles.pill}>Sperry boots</a>
            <a href="" className={styles.pill}>Nike hoodies</a>
            <a href="" className={styles.pill}>Vintage American boots</a>
            <a href="" className={styles.pill}>L.L.Bean bags & purses</a>
            <a href="" className={styles.pill}>Levi's outerwear</a>
          </div>
        </div>
      </section>

      {/* Popular this week */}
      <section className={styles.popular}>
        <div className={styles.populartext}>
          <h2>Popular this week</h2>
        </div>

        <div className={styles.popular_carousel}>

          <div className={styles.imagetext_carousel}>
            <div className={styles.carousel_slide1}>

              <div className={styles.imagetext_section}>
                <a href="" className={styles.populartag}>
                  <div className={styles.popularimage}>
                    <img src={image17} alt="christmas sweater" />
                  </div>
                  <div className={styles.textcontainer}>
                    <h3>Christmas Sweater</h3>
                    <p><b>+1k</b> searches in the last week</p>
                  </div>
                </a>
              </div>

              <div className={styles.imagetext_section}>
                <a href="" className={styles.populartag}>
                  <div className={styles.popularimage}>
                    <img src={image13} alt="minimalist" width='833px' height='833px'/>
                  </div>
                  <div className={styles.textcontainer}>
                    <h3>Minimalist</h3>
                    <p><b>+5.5k</b> searches in the last week</p>
                  </div>
                </a>
              </div>

              <div className={styles.imagetext_section}>
                <a href="" className={styles.populartag}>
                  <div className={styles.popularimage}>
                    <img src={image207} alt="winter" width='833px' height='833px'/>
                  </div>
                  <div className={styles.textcontainer}>
                    <h3>Winter</h3>
                    <p><b>+1.3k</b> searches in the last week</p>
                  </div>
                </a>
              </div>

              <div className={styles.imagetext_section}>
                <a href="" className={styles.populartag}>
                  <div className={styles.popularimage}>
                    <img src={image203} alt="Vintage Carhartt jacket" width='833px' height='833px'/>
                  </div>
                  <div className={styles.textcontainer}>
                    <h3>Vintage Carhartt jacket</h3>
                    <p><b>+1.3k</b> searches in the last week</p>
                  </div>
                </a>
              </div>
            </div>


            <div className={styles.carousel_slide2}>

              <div className={styles.imagetext_section}>
                <a href="" className={styles.populartag}>
                  <div className={styles.popularimage}>
                    <img src={image208} alt="Moon Boots" width='833px' height='833px'/>
                  </div>
                  <div className={styles.textcontainer}>
                    <h3>Moon Boots</h3>
                    <p><b>+1.1k</b> searches in the last week</p>
                  </div>
                </a>
              </div>

              <div className={styles.imagetext_section}>
                <a href="" className={styles.populartag}>
                  <div className={styles.popularimage}>
                    <img src={image204} alt="Sweater dress" width='833px' height='833px'/>
                  </div>
                  <div className={styles.textcontainer}>
                    <h3>Sweater dress</h3>
                    <p><b>+1.2k</b> searches in the last week</p>
                  </div>
                </a>
              </div>

              <div className={styles.imagetext_section}>
                <a href="" className={styles.populartag}>
                  <div className={styles.popularimage}>
                    <img src={image205} alt="Winter jacket" width='833px' height='833px'/>
                  </div>
                  <div className={styles.textcontainer}>
                    <h3>Winter jacket</h3>
                    <p><b>+1.4k</b> searches in the last week</p>
                  </div>
                </a>
              </div>

              <div className={styles.imagetext_section}>
                <a href="" className={styles.populartag}>
                  <div className={styles.popularimage}>
                    <img src={image209} alt="Montbell puffer" width='833px' height='833px'/>
                  </div>
                  <div className={styles.textcontainer}>
                    <h3>Montbell puffer</h3>
                    <p><b>+1k</b> searches in the last week</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <button className={`${styles.styled_button} ${styles.styled_btn}`}>
            <GoArrowRight className={styles.arrowRight_icon} />
          </button>

        </div>
          
      </section>


      {/* Shop by price */}
      <section className={styles.price_section}>
        <div className={styles.byPrice_text}>
          <h2>Shop by price</h2>
        </div>
        <div className={styles.prices_tablets}>
          <div className={styles.prices_tablet}>
            <a href=""><h3 className={styles.under}>Under <b>$10</b></h3></a>
          </div>
          <div className={styles.prices_tablet}>
            <a href=""><h3 className={styles.under}>Under <b>$20</b></h3></a>
          </div>
          <div className={styles.prices_tablet}>
            <a href=""><h3 className={styles.under}>Under <b>$50</b></h3></a>
          </div>
          <div className={styles.prices_tablet}>
            <a href=""><h3 className={styles.under}>Under <b>$100</b></h3></a>
          </div>
        </div>
      </section>


      {/* Shop by style */}
      <section className={styles.shopby_style}>
        <div className={styles.byStyle_text}>
          <h2>Shop by style</h2>
        </div>
        <div className={styles.styleimage_container}>

          <div className={styles.style_imageText}>
            <div className={styles.style_image}>
              <img loading='lazy' src={image15} alt="animal print" />
            </div>
            <div className={styles.style_paragraph}>
              <p>Animal Print</p>
            </div>
          </div>

          <div className={styles.style_imageText}>
            <div className={styles.style_image}>
              <img loading='lazy' src={image07} alt="loungewear" />
            </div>
            <div className={styles.style_paragraph}>
              <p>Loungewear</p>
            </div>
          </div>

          <div className={styles.style_imageText}>
            <div className={styles.style_image}>
              <img loading='lazy' src={image18} alt="grunge" />
            </div>
            <div className={styles.style_paragraph}>
              <p>Grunge</p>
            </div>
          </div>

          <div className={styles.style_imageText}>
            <div className={styles.style_image}>
              <img loading='lazy' src={image26} alt="knit season" />
            </div>
            <div className={styles.style_paragraph}>
              <p>Knit season</p>
            </div>
          </div>

          <div className={styles.style_imageText}>
            <div className={styles.style_image}>
              <img loading='lazy' src={image12} alt="faux faur" />
            </div>
            <div className={styles.style_paragraph}>
              <p>Faux faur</p>
            </div>
          </div>

          <div className={styles.style_imageText}>
            <div className={styles.style_image}>
              <img loading='lazy' src={image09} alt="countryside chic" />
            </div>
            <div className={styles.style_paragraph}>
              <p>Countryside chic</p>
            </div>
          </div>

        </div>
      </section>






      {/* Winter warmers */}
      {/* <section className={styles.warmers}>
        <div className={styles.wintertext}>
          <h2>Winter warmers</h2>
          <div className={styles.striped}>
            <p>Are you into striped, simple or cable?</p>
            <button>See more</button>
          </div>
        </div>

        <div className={styles.productlist_container}>
          <li className={styles.productcard_container}>
            <div>
              <div className={styles.product_imageContainer}>
                <a href=""></a>
              </div>
              <div className={styles.product_listItem}>

              </div>
            </div>
          </li>
        </div>
      </section>
 */}


      <Footer />
    </div>
  )
}

export default Home
