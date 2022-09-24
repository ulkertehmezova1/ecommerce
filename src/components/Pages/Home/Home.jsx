import React from 'react'
import { useSelector } from 'react-redux'
import h from './Home.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";



function Home() {

    const { mainSlider, why, categories1, categories2 } = useSelector(state => state.reducerZohrab);


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
        </>
    )
}

export default Home