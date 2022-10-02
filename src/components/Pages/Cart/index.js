

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Alert, Grid, Paper } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import './style.css'

export const Cart = () => {

  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();


  const total = card.reduce((acc, curr) => (acc + curr.price * curr.quantity), 0);

  const handleRemove = (item) => {
    dispatch({ type: "REMOVE", payload: item })
  }
  const handleIncrease = (item) => {
    dispatch({ type: "INCREASE", payload: item })
  }

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch({ type: "DECREASE", payload: item })
    } else {
      dispatch({ type: "REMOVE", payload: item })

    }
  }
  return (
    <>
      <div className='div-img'>
        <h1>My cart</h1>
      </div>

      {
        card.length ? <div>

          <div className='table-cart'>
            <TableContainer
              component={Paper}
            >
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>Product name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {
                    card?.map((product, i) => (
                      <TableRow key={i}>
                        <TableCell><button style={{ all: "unset" }} onClick={() => handleRemove(product)}><ClearIcon /></button></TableCell>
                        <TableCell>
                          <img className='img-table' src={require(`../../../assets/images/products/${product.image}`)} alt="Product" />
                        </TableCell>
                        <TableCell>
                          {product.name}
                        </TableCell>
                        <TableCell>
                          {`$${product.price}.00`}
                        </TableCell>
                        <TableCell>
                          <div className='div-table'>
                            <button style={{ all: "unset" }} onClick={() => handleIncrease(product)}>+</button>
                            <p>{product.quantity}</p>
                            <button style={{ all: "unset" }} onClick={() => handleDecrease(product)}>-</button>
                          </div>
                        </TableCell>
                        <TableCell>{`$${product.price * product.quantity} .00`}</TableCell>
                      </TableRow>
                    ))
                  }

                </TableBody>
              </Table>
            </TableContainer>

          </div>

          <div>
            <Grid container justifyContent={'space-between'} alignItems={"flex-start"}>
              <Grid item xs={12} lg={4} md={4}>
                <form onSubmit={(e)=>{
                  e.preventDefault();
                  Swal.fire({
                    icon: 'success',
                    title: 'Coupon code succsessfully applied',
                    text: 'We will periodically send you updates and special offers'
                  });

                }}>
                <div className='form content'>
                  <h3>Coupon code</h3>
                  <p>Enter your cupon code if you have one</p>
                  <label for="cupon">Coupon code</label>
                  <input type="text" id="cupon" required/>
                </div>
                <button className='submit' type='submit'>Apply Coupon</button>
                </form>
              </Grid>

              <Grid item xs={12} lg={4} md={4}>
                <form onSubmit={(e)=>{
                  e.preventDefault();
                  Swal.fire({
                    icon: 'success',
                    title: 'Succes estimate',
                    text: 'We will periodically send you updates and special offers'
                  });
                }}>
                <div className='form content'>
                  <h3>Estimate Shipping and Tax</h3>
                  <p>Enter your destination to get a shipping estimate</p>
                  <div>
                    <label for="country">Country</label>
                    <input type="text" id="country" required />
                  </div>
                  <div>
                    <label for="state">State/Province</label>
                    <input type="text" id="state" required />
                  </div>
                  <div>
                    <label for="zip">Zip/Postal Code</label>
                    <input type="text" id="zip" required/>
                  </div>
                </div>
                <button className='submit' type='submit'>Estimate</button>
                </form>
              </Grid>

              <Grid item xs={12} lg={4} md={4}>
                <div className='form content'>
                  <h3>Cart Totals</h3>
                  <p>
                    <span className='span-margin'>Subtotal</span>
                    <span>{`$ ${total}.00`}</span>
                  </p>
                  <p>
                    <span className='span-margin'>Delivery</span>
                    <span>$0.00</span>
                  </p>
                  <p>
                    <span className='span-margin'>Discount</span>
                    <span>$0.00</span>
                  </p>
                  <hr />
                  <p>
                    <span className='span-margin'>TOTAL</span>
                    <span style={{ color: "#000", fontWeight: "bolder" }}>{`$ ${total}.00`}</span>
                  </p>

                </div>
                <button className='submit' onClick={()=>{
  Swal.fire({
    icon: 'success',
    title: "Your order saved",
    text: 'We will periodically send you updates and special offers'
  });
                   
                }} >Proceed</button>
              </Grid>
            </Grid>


          </div>

        </div>
          :
          <div className='empty-card'>
            <SentimentVeryDissatisfiedIcon />
            <h1>There are no products in your card</h1>
          </div>

      }
    </>
  )
}

