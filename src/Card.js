function Card({product,addToCart,cartItems}){
    return (
        <div className="col-lg-4 p-3 mb-3 box"> 
        <div className="row"> 
          <div className="col-lg-12"> 
            <img className="img-fluid" src={product.image}/> 
          </div> 
        </div>
        <div className="row">
        <div className="col-lg-12">
        <h4>{product.name}</h4>
        <h6>₹ {product.price}</h6>
        <button disabled={cartItems.some(obj=>obj.id===product.id)} onClick={()=>{addToCart(product)}} className="btn btn-sm btn-primary">
            {cartItems.some(obj=>obj.id===product.id)?"Added to Cart":"Add to Cart"}
        </button>
        </div>
        </div>
        </div>
    )
}
export default Card;