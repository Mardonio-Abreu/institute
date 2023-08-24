
function Cart (prop){
    return (
        <>
            <img className="cart" src="cartIcon.png" alt="Shopping cart"/>
            <span>{prop.quantity}</span>
        </>
        
        )
}

export default Cart;

