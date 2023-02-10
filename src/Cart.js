function Cart({cartItems,removeFromCart}){
 return (
    cartItems.length===0 ? <div className="lead fw-normal text-black-50 mb-0">Your cart is empty</div>:
    <>
    <ol className="list-group list-group-numbered">
        {
            cartItems.map((cartItem,index)=>{
                return(
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{cartItem.name}</div>
                            ₹ {cartItem.price}
                        </div>
                        <button onClick={()=>{removeFromCart(cartItem)}} className="badge bg-primary rounded-pill">X</button>
                    </li>
                )
            })
        }
    </ol>
    <h3 className="py-2">Total: ₹ {
    cartItems.reduce((accur,curr)=>{
        return accur=accur+curr.price
    },0)
    }</h3>
    </>
 )
}
export default Cart;