import { Link } from "react-router-dom"
import Card from "../Card/Card"
import "./FeaturedProducts.scss"

const FeaturedProducts = ({ title }) => {
	//temporary
	const products = [
		{
			id: 1,
			title: "sweatpants and sweatshirt",
			img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			img2: "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			oldPrice: 47,
			price: 32,
			new: true,
		},
		{
			id: 2,
			title: "sweatpants and sweatshirt",
			img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			img2: "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			oldPrice: 47,
			price: 32,
			new: true,
		},
		{
			id: 3,
			title: "sweatpants and sweatshirt",
			img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			img2: "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			oldPrice: 47,
			price: 32,
			new: false,
		},
		{
			id: 4,
			title: "sweatpants and sweatshirt",
			img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			img2: "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			oldPrice: 47,
			price: 32,
			new: false,
		},
		{
			id: 5,
			title: "sweatpants and sweatshirt",
			img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			img2: "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			oldPrice: 47,
			price: 32,
			new: false,
		},
		{
			id: 6,
			title: "sweatpants and sweatshirt",
			img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			img2: "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			oldPrice: 47,
			price: 32,
			new: false,
		},
	]

	return (
		<div className="featured-products">
			<div className="top">
				<h2>{title} Products</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation.
				</p>
			</div>
			<div className="bottom">
				{products.map((product) => (
					<div key={product.id}>
						<Link to={`/product/${product.id}`}>
							<Card item={product} className="featured-card" />
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default FeaturedProducts
