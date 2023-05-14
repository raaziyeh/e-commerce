import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import BeatLoader from "react-spinners/BeatLoader"
import useHttp from "../../hooks/use-http"
import Card from "../Card/Card"
import "./FeaturedProducts.scss"

const FeaturedProducts = ({ title }) => {
	const [products, setProducts] = useState([])
	const { isLoading, error, sendRequest: getProducts } = useHttp()

	useEffect(() => {
		getProducts(
			{ url: `https://e-commerce-json-server.vercel.app/${title}` },
			(data) => setProducts(data)
		)
	}, [getProducts, title])

	let content = ""

	if (products && products.length > 0) {
		content = products.map((product) => (
			<div key={product.id}>
				<Link to={`/product/${product.id}`}>
					<Card item={product} className="featured-card" />
				</Link>
			</div>
		))
	}

	if (error) {
		content = <p>{error.message}</p>
	}

	if (isLoading) {
		content = <BeatLoader color="#36d7b7" />
	}

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
			<div className="bottom">{content}</div>
		</div>
	)
}

export default FeaturedProducts
