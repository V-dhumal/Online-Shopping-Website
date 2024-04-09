import './OrderNow.css'
import Navbar from '../../components/Navbar/Navbar'

function OrderNow() {
  return (
    <div>
        <Navbar />
        <h1 style={{textAlign: 'center',margin: '150px',fontSize: '70px'}}> OrderNow 🏡 </h1>
        <p>Order Now Page</p>
        <h2>Ordered Successfully!!!</h2>
        <input type='text' placeholder='Enter Your Product' />
    </div>
  )
}

export default OrderNow