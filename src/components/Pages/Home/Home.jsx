import React from 'react'
import { useSelector } from 'react-redux'
import h from './Home.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";
import center from '../../../assets/images/categories/center.jpg'


function Home() {

    const { mainSlider, why, categories1, categories2, products } = useSelector(state => state);
    let homeProducts = products.slice(0, 9);


    return (
        <>
            <div className={h.home_page}>
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    loop={true}
                    speed={800}
                    autoplay={{ delay: 1500 }}
                    modules={[EffectFade, Autoplay]}
                    className={h.main_swiper}
                >
                    {
                        mainSlider.map(e => (
                            <SwiperSlide className={h.slider}>
                                <img src={e.img} alt={e.alt} />
                                <div className={h.in_slider}>
                                    <h1>
                                        {e.text}
                                    </h1>
                                    <p>
                                        {e.p}
                                    </p>
                                    <div className={h.btn}>
                                        view details
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className={h.why_section}>
                    <div className={h.container}>
                        {
                            why.map(e => (
                                <div className={h.item}>
                                    <div className={h.icon} style={{ backgroundColor: e.bg }}>
                                        <img src={e.icon} alt={e.alt} />
                                    </div>
                                    <h3>
                                        {e.heading}
                                    </h3>
                                    <span>
                                        {e.span}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={h.section1}>
                    <div className={h.container}>
                        <div className={h.vege}>
                            {
                                categories1.map(e => (
                                    <div className={h.category}>
                                        <img src={e.img} alt={e.alt} />
                                        <span>
                                            {e.name}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={h.vege}>
                            <div className={h.category}>
                                <img src={center} alt='Vegetables' />
                                <div className={h.vege_info}>
                                    <h2>Vegetables</h2>
                                    <p>Protect the health of every home</p>
                                    <div className={h.btn} style={{ textTransform: 'none' }}>
                                        Shop now
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={h.vege}>
                            {
                                categories2.map(e => (
                                    <div className={h.category}>
                                        <img src={e.img} alt={e.alt} />
                                        <span>
                                            {e.name}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={h.section2}>
                    <div className={h.container + ' ' + h.our_products}>
                        <span>
                            Featured Products
                        </span>
                        <h2>
                            Our Products
                        </h2>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                        </p>
                        <div className={h.container + ' ' + h.products}>
                            {
                                homeProducts.map(e => (
                                    <div className={h.product} key={e.id}>
                                        <img src={e.img} alt="Product" />
                                        <h3>
                                            {e.name}
                                        </h3>
                                        <p className={h.prod_price}>
                                            <p style={{ textDecoration: 'line-through', color: '#aeaeae' }}>
                                                {e.prevPrice ? `$ ${e.prevPrice}` : ''}
                                            </p>
                                            <p style={{color: '#82ae46' }}>
                                                $ {e.price}
                                            </p>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home