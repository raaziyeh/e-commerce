import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import { useSelector, useDispatch } from "react-redux"
import { resetCart, deleteFromCart } from "../../redux/cartReducer"
import "./Cart.scss"

const Cart = () => {
	const cartProducts = useSelector((state) => state.cart.products)
	const dispatch = useDispatch()

	const totalPrice = () => {
		let total = 0
		cartProducts.forEach((item) => (total += item.price * item.quantity))
		return total.toFixed(2)
	}

	return (
		<div className="cart">
			{cartProducts.length !== 0 && (
				<>
					<span className="cart-header">Products in your cart</span>
					<div className="cart-body">
						{cartProducts.map((item) => {
							return (
								<div className="cart-item" key={item.id}>
									<img src={item.img} alt={item.title} />
									<div className="cart-details">
										<span className="name">{item.title}</span>
										<p> {item.desc?.substring(0, 100)}</p>
										<div className="amount">
											<span>{item.quantity}</span> × $<span>{item.price}</span>
										</div>
									</div>
									<DeleteOutlineIcon
										className="delete"
										onClick={() => dispatch(deleteFromCart(item.id))}
									/>
								</div>
							)
						})}
					</div>
					<div className="cart-actions">
						<div className="cart-footer">
							<span>SUBTOTAL</span>
							<span>${totalPrice()}</span>
						</div>
						<button className="cart-checkout">GO TO CHECKOUT</button>
						<span className="reset" onClick={() => dispatch(resetCart())}>
							reset cart
						</span>
					</div>
				</>
			)}
			{cartProducts.length === 0 && (
				<span className="cart-header">Your shopping cart is empty</span>
			)}
		</div>
	)
}

export default Cart
