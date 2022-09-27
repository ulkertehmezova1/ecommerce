import React from 'react'
import b from './Blog.module.css'
import './blogstyle.css'
import { blogs } from '../../../store/blogs'
import { Link } from 'react-router-dom'
import BlogItem from './BlogItem'
import Sidebar from './Sidebar'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Blog() {

  AOS.init({
    duration: 500,
    easing: 'ease'
  });


  return (
    <>
      <div className={b.blog_page}>
        <div className={b.main} id="page_mainslider">
          <p data-aos="fade-up">
            <Link>
              home
            </Link>
            <Link>
              blog
            </Link>
          </p>
          <h1 data-aos="fade-up" data-aos-duration="800">
            blog
          </h1>
        </div>
        <div className={b.container}>
          <div className={b.all_blogs}>
            {
              blogs.map(e => (
                <BlogItem e={e} key={e.id} />
              ))
            }
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Blog
