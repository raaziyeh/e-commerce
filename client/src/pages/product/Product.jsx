import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import CompareIcon from "@mui/icons-material/Compare"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import { useState } from "react"
import "./Product.scss"

const Product = () => {
	// Temporary
	const images = [
		"https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
		"https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	]

	const [mainImg, setMainImg] = useState(0)
	const [quantity, setQuantity] = useState(1)

	return (
		<div className="product">
			<div className="mobile-title">
				<h1>Sweatpants and Sweatshirt</h1>
				<span className="price">$19.9</span>
			</div>
			<div className="left">
				<div className="images">
					{images.map((img, index) => {
						return (
							<img
								key={img}
								src={img}
								alt="product"
								onClick={() => setMainImg(index)}
							/>
						)
					})}
				</div>
				<div className="main-img">
					<img src={images[mainImg]} alt="product" />
				</div>
			</div>
			<div className="right">
				<h1 className="hide-800">Sweatpants and Sweatshirt</h1>
				<span className="price hide-800">$19.9</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation.
				</p>
				<div className="counts">
					<button
						onClick={() =>
							setQuantity((prev) => (prev !== 1 ? prev - 1 : prev))
						}
					>
						-
					</button>
					<span>{quantity}</span>
					<button
						onClick={() =>
							setQuantity((prev) => (prev !== 20 ? prev + 1 : prev))
						}
					>
						+
					</button>
				</div>
				<button className="add-to-cart">
					<AddShoppingCartIcon />
					ADD TO CART
				</button>
				<div className="more-actions">
					<div>
						<FavoriteBorderIcon className="icon" />
						<span>ADD TO WISH LIST</span>
					</div>
					<div>
						<CompareIcon className="icon" />
						<span>ADD TO COMPARE</span>
					</div>
				</div>
				<div className="details">
					<span>Vendor: Paris</span>
					<span>Product-Type: Sweater</span>
					<span>Tag: Sweatpants, Sweatshirt</span>
				</div>
				<div className="more">
					<span>DESCRIPTION</span>
					<span>ADDITIONAL INFORMATION</span>
					<span>FAQ</span>
				</div>
			</div>
		</div>
	)
}

export default Product
