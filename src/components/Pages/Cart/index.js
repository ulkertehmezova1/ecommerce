
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Paper } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
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
              card?.map((product) => (

                <TableRow>
                  <TableCell><button style={{ all: "unset" }} onClick={() => handleRemove(product)}><ClearIcon /></button></TableCell>
                  <TableCell>
                    <img className='img-table' src={require(`../../../assets/images/products/${product.image}`)} />
                  </TableCell>
                  <TableCell>
                    {product.name}
                  </TableCell>
                  <TableCell>
                    {product.price}
                  </TableCell>
                  <TableCell>
                    <div className='div-table'>
                      <button style={{ all: "unset" }} onClick={() => handleIncrease(product)}>+</button>
                      <p>{product.quantity}</p>
                      <button style={{ all: "unset" }} onClick={() => handleDecrease(product)}>-</button>
                    </div>
                  </TableCell>
                  <TableCell>{product.price * product.quantity}</TableCell>
                </TableRow>
              ))
            }

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
