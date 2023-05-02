import { Link } from "react-router-dom"
import Card from "../Card/Card"
import "./FeaturedProducts.scss"
import { useEffect, useState } from "react"

const FeaturedProducts = ({ title }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		async function getProducts() {
			const response = await fetch(`http://localhost:3004/${title}`)
			const data = await response.json()
			setProducts(data)
		}

		getProducts()
	}, [title])

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
				{products.length !== 0 && products.map((product) => (
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
