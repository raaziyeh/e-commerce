import DeleteIcon from "@mui/icons-material/Delete"
import "./Cart.scss"

const Cart = () => {
	// temporary
	const data = [
		{
			id: 1,
			title: "sweatpants and sweatshirt",
			img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			img2: "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			desc: `	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna	aliqua.`,
			oldPrice: 47,
			price: 32,
			new: true,
		},
		{
			id: 2,
			title: "sweatpants and sweatshirt",
			img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			img2: "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			desc: `	Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.`,
			oldPrice: 47,
			price: 32,
			new: true,
		},
	]

	return (
		<div className="cart">
			<span className="cart-header">Products in your cart</span>
			<div className="cart-body">
				{data.map((item) => {
					return (
						<div className="cart-item" key={item.id}>
							<img src={item.img} alt={item.title} />
							<div className="cart-details">
								<span className="name">{item.title}</span>
								<p> {item.desc?.substring(0, 100)}</p>
								<div className="amount">
									<span>1</span> × $<span>32</span>
								</div>
							</div>
							<DeleteIcon className="delete" />
						</div>
					)
				})}
			</div>
			<div className="cart-actions">
				<div className="cart-footer">
					<span>SUBTOTAL</span>
					<span>$32</span>
				</div>
				<button className="cart-checkout">GO TO CHECKOUT</button>
				<span className="reset">reset cart</span>
			</div>
		</div>
	)
}

export default Cart
