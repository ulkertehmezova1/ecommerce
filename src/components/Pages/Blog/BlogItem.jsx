import React, { useState } from 'react'
import b from './Blog.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function BlogItem({ e }) {

    AOS.init({
        duration: 500,
        easing: 'ease'
    });

    const [com, setCom] = useState(false);


    return (
        <>
            <div className={b.blog_item} data-aos="fade-up">
                <div className={b.in_blog_item}>
                    <div className={b.blog_item_background}
                        style={{ backgroundImage: `url(${e.back})`, cursor: 'pointer' }}
                    >
                    </div>
                    <div className={b.blog_item_info}>
                        <span> {e.date}
                            <span className={b.comment_icon} onClick={() => setCom(!com)}>
                                <i className="fa-regular fa-comment"></i>
                                <sup>
                                    {e.comments.length}
                                </sup>
                            </span>
                        </span>
                        <h4> {e.name} </h4>
                        <p className={b.default_p}> {e.desc} </p>
                        <div className={b.btn}>
                            Read more
                        </div>
                    </div>
                </div>
                <div className={com ? b.blog_item_comments + ' ' + b.show_comments : b.blog_item_comments}>
                    {
                        e.comments.map((a, i) => (
                            <div className={b.comment} key={i}>
                                <img src={a.photo} alt="Customer" />
                                <div className={b.customer_info}>
                                    <h6>
                                        {a.client}
                                    </h6>
                                    <p>
                                        {a.review}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BlogItem