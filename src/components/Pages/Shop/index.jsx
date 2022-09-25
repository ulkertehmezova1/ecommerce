import React from 'react'
import './style.css'
import '../../../assets/images/products/prod_1.webp'
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { products } from '../../../store/products.js';

export const Shop = () => {
  return (
    <div style={{padding:"30px"}}>
    <Grid container>
{
    products.map((product)=>(

        <Grid item lg={3} md={4} xs={12} sm={12}  >
<div className='product'>
    <a className='img-prod'>
        <img className='img-fluid' src={require(`../../../assets/images/products/${product.image}`)} />
        <span className='status'>30%</span>
     
    </a>
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
            <div className='icon'><ShoppingCartIcon /></div>
            <div className='icon'><FavoriteIcon /></div>
        </div>
    </div>
</div>
</Grid>
    ))
}

</Grid>

    </div>
  )
}
