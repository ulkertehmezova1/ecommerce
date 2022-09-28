import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import s from './Blog.module.css'
import { blogs, filters } from '../../../store/blogs'

function Sidebar({ setFilteredData }) {

    const { pathname } = useLocation();
    const [value, setValue] = useState('');
    const [active, setActive] = useState('all');
    const [data, setData] = useState([])

    const checked = (e) => {
        setActive(e.target.id)
    }

    useEffect(() => {
        if (active !== 'all') {
            let filtered = blogs.filter(e => e.category === active);
            setFilteredData(filtered);
            setData(filtered);
        }
        else {
            setFilteredData(blogs);
            setData(blogs);
        }
    }, [active, setFilteredData])

    useEffect(() => {
        setFilteredData(data.filter(a => {
            return a.name.toLowerCase().includes(value.toLowerCase()) ||
                a.desc.toLowerCase().includes(value.toLowerCase()) ||
                a.category.toLowerCase().includes(value.toLowerCase())
        }));
    }, [value, data, setFilteredData]);


    useEffect(() => {
        setValue('')
    }, [pathname])


    return (
        <>
            <div className={s.sidebar} id="sidebar_page">
                <div className={s.searchBar}>
                    <input
                        type="text"
                        className={s.search_input}
                        placeholder="Search..."
                        value={value}
                        onChange={(x) => setValue(x.target.value)}
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className={s.filterBar}>
                    <h3 className={s.filter_h3}>
                        Categories
                    </h3>
                    {
                        filters.map((e) => (
                            <div key={e.id}>
                                <input type="radio" name="filter" id={e.id} onClick={(a) => checked(a)} defaultChecked={e.id === 'all'} />
                                <label htmlFor={e.id}> {e.text} </label>
                            </div>
                        ))
                    }
                    <div className={pathname[pathname.length - 1] > 0 ? s.skin : ''}
                        title='To select a category, go back to the blogs page, please'
                    >
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar