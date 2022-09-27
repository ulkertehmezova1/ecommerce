import React from 'react'
import './style.css'
import '../../../assets/images/products/prod_1.webp'
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { products } from '../../../store/products.js';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export const Shop = () => {
    const card = useSelector((state) => state.card);
    const singlepro = useSelector((state) => state.singleObject);
    const filteredArr = useSelector((state) => state.filteredArr);

    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch({ type: "ADD", payload: item });
    }

    console.log(singlepro)

    return (
        <>
            <div className='div-img'>
                <h1>Products</h1>
            </div>
            <div className='button-group'>
                <button onClick={() => dispatch({ type: "ALL" })}>All</button>
                <button onClick={() => dispatch({ type: "FILTER", payload: "Vegetables" })}>Vegetables</button>
                <button onClick={() => dispatch({ type: "FILTER", payload: "Fruits" })}>Fruits</button>
                <button onClick={() => dispatch({ type: "FILTER", payload: "Juice" })}>Juice</button>
            </div>
            <div style={{ padding: "30px" }}>
                <Grid container>
                    {
                        filteredArr?.map((product, i) => (

                            <Grid item lg={3} md={4} xs={12} sm={12} key={i} >
                                <div className='product'>
                                    <Link to="/singleproduct" className='img-prod' onClick={() => dispatch({ type: "SINGLE", payload: product })}>
                                        <img className='img-fluid' src={require(`../../../assets/images/products/${product.image}`)} alt="Product" />
                                        <span className='status'>30%</span>

                                    </Link>
                                    <div className='text'>
                                        <h3>
                                            {product.name}
                                        </h3>
                                        <div className='d-flex'>
                                            <div className='pricing'>
                                                <p className='price'>
                                                    <span>{`$ ${product.price}`}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className='overlay'>
                                            <Link to='/cart'><div className='icon' onClick={() => addCart(product)}><button ><ShoppingCartIcon /></button></div></Link>
                                            <Link to="/singleproduct"><div className='icon' onClick={() => dispatch({ type: "SINGLE", payload: product })}><button><MenuIcon /></button></div></Link>
                                            <Link to="/wishlist"><div className='icon' onClick={() => dispatch({ type: "ADDTOWISH", payload: product })}><button><FavoriteIcon /></button></div></Link>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        ))
                    }

                </Grid>

            </div>
        </>
    )
}

