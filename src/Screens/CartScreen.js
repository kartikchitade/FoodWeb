import React from 'react';
import data from '../data';


const CartScreen = (props) => {
    // console.log(props.match.params.id);
    // const[cartItems] = useState([]);
    const product = data.find(x=>x._id === props.match.params.id)
    return (
        <>
            {/* <h2>Cart Items</h2>
           {cartItems.length === 0 && <div>Cart is empty</div>}  */}
                
                    <div className="cards" key={product._id}  >
                        <div className="card">
                                <img src={product.image} alt="" className="card_img" />
                            <div className="card_info">
                                <span className="card_category">{product.item}</span>
                                <h3 className="card_title">₹{product.price}</h3>
                                <button>-</button>
                             <button>Add</button>
                             <button>+</button>
                            </div>
                        </div> 
                    </div>
            </>
    );
}

export default CartScreen;

