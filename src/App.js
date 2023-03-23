import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import Cart from './Cart';

function App() {
  const[products,setProducts]=useState([
    {
      id:1,
      name:'Apple iPhone 12',
      price: 79900, 
      image: 'https://media.croma.com/image/upload/v1662702995/Croma%20Assets/Communication/Mobiles/Images/261943_ffc6cl.png/mxw_2048,f_auto'
    },
    {
      id:2,
      name:'Samsung Galaxy A71',
      price: 22000,
      image:'https://media.croma.com/image/upload/v1666992553/Croma%20Assets/Communication/Mobiles/Images/233768_qn7m8w.png/mxw_1440,f_auto'
    },
    {
      id:3,
      name:'OnePlus 10 Pro',
      price:61000,
      image:'https://media.croma.com/image/upload/v1666992010/Croma%20Assets/Communication/Mobiles/Images/250719_t2svgl.png'
    },
    {
      id:4,
      name:'Xiomi 10',
      price:12000,
      image:'https://media.croma.com/image/upload/v1662438329/Croma%20Assets/Communication/Mobiles/Images/251042_cjw7wb.png/mxw_1440,s_webp,f_auto'
    },
    {
      id:5,
      name:'Nokia G31',
      price:14000,
      image:'https://media.croma.com/image/upload/v1662435270/Croma%20Assets/Communication/Mobiles/Images/251584_hdcuw4.png/mxw_1440,s_webp,f_auto'
    },
    {
      id:6,
      name:'Oppo F21 Pro',
      price:21000,
      image:'https://media.croma.com/image/upload/v1662436729/Croma%20Assets/Communication/Mobiles/Images/251267_x4lcmx.png/mxw_1440,s_webp,f_auto'
    }
  ])
  const[cartItems,setCartItems]=useState([])
  let addToCart=(product)=>{
    setCartItems([...cartItems,product])
  }
  let removeFromCart=(cartItem)=>{ 
    const indexVal=cartItems.findIndex(obj=>obj.id===cartItem.id); 
    cartItems.splice(indexVal,1); 
    setCartItems([...cartItems]) 
  } 
  return (
    <>
    <Header/>
    <section className="py-5">
      <div className="container">
        <div className="row d-flex justify-content-around">
          <div className="col-lg-8">
            <div className="row">
              {
                products.map((product,index)=>{
                  return <Card key={index} product={product} addToCart={addToCart} cartItems={cartItems}></Card>
                })
              }
            </div>
          </div>
          <div className="col-lg-3">
            <h3>Cart</h3>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart}></Cart>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
export default App;
