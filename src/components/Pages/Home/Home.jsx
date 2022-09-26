import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import h from './Home.module.css'
import './homestyle.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import center from '../../../assets/images/categories/center.jpg'
import { products } from '../../../store/products'
import Timer from './Timer';
import { useDispatch} from 'react-redux';
import Swal from 'sweetalert2';
import AOS from 'aos'
import 'aos/dist/aos.css'


function Home() {

    const dispatch = useDispatch();

    AOS.init({
        duration: 500,
        easing: 'ease'
    });

    const { why, categories1, categories2, customers, partners } = useSelector(state => state.reducerZohrab);
    const addCart = (item) => {
        dispatch({ type: "ADD", payload: item });
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'You have subscribed to our updates!',
            text: 'We will periodically send you updates and special offers'
        });
        e.target.reset();
    }


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
                            <h1 data-aos="fade-up">
                                we serve fresh vegetables & fruits
                            </h1>
                            <p data-aos="fade-up">
                                we deliver organic vegetables & fruits
                            </p>
                            <div className={h.btn} data-aos="fade-up">
                                view details
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={h.slider + " " + h.slider2}>
                        <div className={h.in_slider}>
                            <h1 data-aos="fade-up">
                                100% fresh & organic foods
                            </h1>
                            <p data-aos="fade-up">
                                we deliver organic vegetables & fruits
                            </p>
                            <div className={h.btn} data-aos="fade-up">
                                view details
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className={h.why_section}>
                    <div className={h.container}>
                        {
                            why.map((e, i) => (
                                <div className={h.item} key={i} data-aos="fade-up" data-aos-delay={e.delay}>
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
                                categories1?.map((e, i) => (
                                    <div className={h.category} key={i} data-aos='fade-up'>
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
                                    <Link to='/shop' className={h.btn}>
                                        Shop now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={h.vege}>
                            {
                                categories2?.map((e, i) => (
                                    <div className={h.category} key={i} data-aos='fade-up'>
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
                        <span className={h.italic_span} data-aos="fade-up">
                            Featured Products
                        </span>
                        <h2 className={h.bold_h2} data-aos="fade-up">
                            Our Products
                        </h2>
                        <p className={h.default_p} data-aos="fade-up">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                        </p>
                        <div className={h.container + ' ' + h.products}>
                            {
                                products?.slice(0, 8).map(e => (
                                    <div className={h.product} key={e.id} data-aos="zoom-in" data-aos-delay={e.delay}>
                                        <Link to="/singleproduct">
                                            <img src={require(`../../../assets/images/products/${e.image}`)} alt="Product"
                                                onClick={() => dispatch({ type: "SINGLE", payload: e })} />
                                        </Link>
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
                                            <Link style={{ all: "unset" }} to="/singleproduct">
                                                <div className={h.prod_btn} onClick={() => dispatch({ type: "SINGLE", payload: e })}>
                                                    <i className="fa-solid fa-bars"></i>
                                                </div>
                                            </Link>
                                            <div className={h.prod_btn} onClick={() => addCart(e)}>
                                                <i className="fa-solid fa-cart-shopping"></i>
                                            </div>
                                            <div className={h.prod_btn}>
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        {
                                            e.sale &&
                                            <div className={h.prod_sale}>
                                                <span> {e.sale} </span>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={h.section1 + ' ' + h.deal}>
                    <div className={h.container} style={{ height: '100%' }}>
                        <div className={h.in_cont}></div>
                        <div className={h.in_cont}>
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
                        <span className={h.italic_span} data-aos="fade-up" data-aos-delay="100">
                            Testimony
                        </span>
                        <h2 className={h.bold_h2} data-aos="fade-up" data-aos-delay="100">
                            Our satisfied customer says
                        </h2>
                        <p className={h.default_p} data-aos="fade-up" data-aos-delay="100">
                            Far far away, behind the word mountains, far from the countries Vokalia and <br /> Consonantia, there live the blind texts. Separated they live in
                        </p>
                        <Swiper
                            slidesPerView={3}
                            loop={true}
                            speed={1000}
                            autoplay={{ delay: 1200 }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className={h.testimony_swiper}
                        >
                            {
                                customers.map((e, i) => (
                                    <SwiperSlide className={h.testimony_slider} key={i} data-aos="fade-up" data-aos-delay="100">
                                        <div className={h.image}>
                                            <img src={e.img} alt="Customer" />
                                            <span>
                                                <i className="fa-solid fa-quote-left"></i>
                                            </span>
                                        </div>
                                        <p className={h.default_p}>
                                            {e.text}
                                        </p>
                                        <h4>
                                            {e.name}
                                        </h4>
                                        <span>
                                            {e.prof}
                                        </span>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div className={h.section2} style={{ borderTop: '1px solid rgba(0,0,0,.1)' }}>
                    <div className={h.container}>
                        {
                            partners.map((e, i) => (
                                <a href={e.link} className={h.partner} target="_blank"
                                    rel="noopener noreferrer" key={i} data-aos="fade-up" data-aos-delay={e.delay}>
                                    <img src={e.img} alt="Partner" />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className={h.last_section}>
                    <div className={h.container}>
                        <div className={h.in_cont}>
                            <h2>
                                Subcribe to our Newsletter
                            </h2>
                            <div className={h.default_p}>
                                Get e-mail updates about our latest shops and special offers
                            </div>
                        </div>
                        <div className={h.in_cont}>
                            <form onSubmit={(e) => submitForm(e)}>
                                <input type="email" placeholder='Enter email address' />
                                <button>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className={h.toTop_btn} onClick={scrollTop}>
                        <i className="fa-solid fa-angle-up"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home