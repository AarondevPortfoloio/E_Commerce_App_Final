import './Home.css';
import { useCart } from './Cartcontext';


function Home(){
    const { cart } = useCart();
    console.log('Cart in Checkout:', cart);
    return(
        <>
        <p>Welcome Home</p>

        {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} >
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
        </>
    )


}




export default Home