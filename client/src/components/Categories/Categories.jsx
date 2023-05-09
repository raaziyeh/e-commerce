import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Categories.scss"

const Categories = () => {
	const [categoriesImages, setCategoriesImages] = useState()

	useEffect(() => {
		async function getCategoriesImages() {
			try {
				const response = await fetch(
					"https://e-commerce-json-server.vercel.app/categories"
				)

				if (response.ok) {
					const responseDate = await response.json()
					setCategoriesImages(responseDate)
				}
			} catch (error) {
				console.error(error)
			}
		}
		getCategoriesImages()
	}, [])

	if (categoriesImages) {
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
}

export default Categories
