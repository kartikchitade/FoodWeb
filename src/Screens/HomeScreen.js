import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

const HomeScreen = (props) => {
//   const[cartItems,setCartItems] = useState([]);
//   const onAdd =(product)=>{
//     const exist = cartItems.find(x=>x.id === product.id);
//     if (exist) {
//         setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1}:x ))
//     }else{
//         setCartItems([...cartItems,{...product, qty:1}]);
//     }
// }  
   return (
        <>
            <div className="container">
            {data.map((product) => {
                return (
                    <div className="cards" key={product._id}  >
                        <div className="card">
                            <Link to={`/CartSCreen/` + product._id}>
                                <img src={product.image} alt="" className="card_img" />
                            </Link>
                            <div className="card_info">
                                <span className="card_category">{product.item}</span>
                                <h3 className="card_title">₹{product.price}</h3>
                             <Link to={`/CartSCreen/` + product._id}> <button>Add To Cart</button></Link> 
                            </div>
                        </div> 
                    </div>
                    )})}
              </div>
        </>
    );
}

export default HomeScreen;
