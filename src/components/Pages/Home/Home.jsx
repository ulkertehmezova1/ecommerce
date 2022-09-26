import React from 'react'
import { useSelector } from 'react-redux'
import h from './Home.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";
import center from '../../../assets/images/categories/center.jpg'
import Timer from './Timer';

function Home() {

    const { why, categories1, categories2, products } = useSelector(state => state.reducerZohrab);
    let homeProducts = products.slice(0, 8);


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
                    <SwiperSlide className={h.slider + " " + h.slider1}>
                        <div className={h.in_slider}>
                            <h1>
                                we serve fresh vegetables & fruits
                            </h1>
                            <p>
                                we deliver organic vegetables & fruits
                            </p>
                            <div className={h.btn}>
                                view details
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={h.slider + " " + h.slider2}>
                        <div className={h.in_slider}>
                            <h1>
                                100% fresh & organic foods
                            </h1>
                            <p>
                                we deliver organic vegetables & fruits
                            </p>
                            <div className={h.btn}>
                                view details
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className={h.why_section}>
                    <div className={h.container}>
                        {
                            why.map((e, i) => (
                                <div className={h.item} key={i}>
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
                                categories1.map((e, i) => (
                                    <div className={h.category} key={i}>
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
                                    <h2 className={h.heading_text} style={{ fontSize: '24px' }}>
                                        Vegetables
                                    </h2>
                                    <p className={h.default_p}>
                                        Protect the health of every home
                                    </p>
                                    <div className={h.btn} style={{ textTransform: 'none' }}>
                                        Shop now
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={h.vege}>
                            {
                                categories2.map((e, i) => (
                                    <div className={h.category} key={i}>
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
                        <span className={h.italic_span}>
                            Featured Products
                        </span>
                        <h2 className={h.bold_h2}>
                            Our Products
                        </h2>
                        <p className={h.default_p}>
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
                                        <p className={h.price}>
                                            <p style={{ textDecoration: 'line-through', color: '#aeaeae' }}>
                                                {e.prevPrice ? `$ ${e.prevPrice}` : ''}
                                            </p>
                                            <p style={{ color: '#82ae46' }}>
                                                $ {e.price}
                                            </p>
                                        </p>
                                        <div className={h.prod_buttons}>
                                            <div className={h.prod_btn}> <i className="fa-solid fa-bars"></i> </div>
                                            <div className={h.prod_btn}> <i className="fa-solid fa-cart-shopping"></i> </div>
                                            <div className={h.prod_btn}> <i className="fa-solid fa-heart"></i> </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={h.section1 + ' ' + h.deal}>
                    <div className={h.container} style={{ height: '100%' }}>
                        <div className={h.in_deal}></div>
                        <div className={h.in_deal}>
                            <span className={h.italic_span}>
                                best price for you
                            </span>
                            <h2 className={h.bold_h2}>
                                Deal of the day
                            </h2>
                            <p className={h.default_p}>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                            </p>
                            <h3 className={h.heading_text} style={{ fontSize: '30px' }}>
                                Spinach
                            </h3>
                            <span className={h.deal_price}>
                                $10 <span style={{ color: '#82ae46' }}> now $5 only</span>
                            </span>
                            <div className={h.timer}>
                                <Timer />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={h.section2}>
                    <div className={h.container + ' ' + h.testimony_head}>
                        <span className={h.italic_span}>
                            Testimony
                        </span>
                        <h2 className={h.bold_h2}>
                            Our satisfied customer says
                        </h2>
                        <p className={h.default_p}>
                            Far far away, behind the word mountains, far from the countries Vokalia and <br/> Consonantia, there live the blind texts. Separated they live in
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home