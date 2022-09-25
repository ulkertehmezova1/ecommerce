
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Paper, Tab } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ClearIcon from '@mui/icons-material/Clear';
import { products } from '../../../store/products';
import './style.css'

export const Cart = () => {
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
  products.map((product)=>(

    <TableRow>
      <TableCell><button style={{all:"unset"}}><ClearIcon /></button></TableCell>
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
        <button style={{all:"unset"}}>+</button>
        <p>{1}</p>
        <button style={{all:"unset"}}>-</button>
       </div>
      </TableCell>
      <TableCell>{product.price}</TableCell>
    </TableRow>
  ))
}

</TableBody>
</Table>
</TableContainer>
    </div>
  )
}
