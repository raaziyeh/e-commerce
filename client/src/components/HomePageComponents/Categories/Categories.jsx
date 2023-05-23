import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BeatLoader from "react-spinners/BeatLoader"
import useHttp from "../../../hooks/use-http"
import "./Categories.scss"

const Categories = () => {
	const [categoriesImages, setCategoriesImages] = useState()
	const { isLoading, error, sendRequest: getCategoriesImages } = useHttp()

	useEffect(() => {
		getCategoriesImages(
			{
				url: "https://e-commerce-json-server.vercel.app/categories",
			},
			(responseDate) => setCategoriesImages(responseDate)
		)
	}, [getCategoriesImages])

	if (categoriesImages && Object.keys(categoriesImages).length > 0) {
		const { kids, men, season, shoes, trending, women } = categoriesImages
		return (
			<div className="categories">
				<div>
					<img src={trending} alt="trending-category" />
					<button>
						<Link className="link">Trending</Link>
					</button>
				</div>
				<div>
					<img src={women} alt="women-category" />
					<button>
						<Link className="link" to="/products/women">
							Women
						</Link>
					</button>
				</div>
				<div>
					<img src={season} alt="season-category" />
					<button>
						<Link className="link">New Season</Link>
					</button>
				</div>
				<div>
					<img src={men} alt="men-category" />
					<button>
						<Link className="link" to="/products/men">
							Men
						</Link>
					</button>
				</div>
				<div>
					<img src={kids} alt="children-category" />
					<button>
						<Link className="link" to="/products/kids">
							Children
						</Link>
					</button>
				</div>
				<div>
					<img src={shoes} alt="shoes-category" />
					<button>
						<Link className="link">Shoes</Link>
					</button>
				</div>
			</div>
		)
	}

	if (error) {
		return <p>{error.message}</p>
	}

	if (isLoading) {
		return <BeatLoader color="#36d7b7" />
	}
}

export default Categories
