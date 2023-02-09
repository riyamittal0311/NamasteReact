import { useSelector } from "react-redux";

import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector(state=>state.cart.totalPrice)

  return (
    <>
      {cartItems.length > 0 ? (
        <div>  
            <div className="flex justify-between m-6">
                  <h2 className="font-bold text-lg ">Your cart items</h2>
                  <span className="shadow-md p-2 hover: border hover:border-cyan-700"  >Total Price : <span className="font-bold text-cyan-700">₹{totalPrice}</span></span>
            </div>
          
            <FoodItem items={cartItems} />

        </div>
      
      ) : (
        <div  className="font-bold flex justify-center text-2xl p-2 m-2">No items in your cart</div>
      )}
    </>
  );
};
export default Cart;
