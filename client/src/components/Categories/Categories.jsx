import { Link } from "react-router-dom"
import "./Categories.scss"

const Categories = () => {
	return (
		<div className="categories">
			<div>
				<img src="./img/trending_category.jpeg" alt="trending-category" />
				<button>
					<Link className="link">Trending</Link>
				</button>
			</div>
			<div>
				<img src="./img/women_category.jpeg" alt="women-category" />
				<button>
					<Link className="link" to="/products/women">
						Women
					</Link>
				</button>
			</div>
			<div>
				<img src="./img/season_category.jpeg" alt="season-category" />
				<button>
					<Link className="link">New Season</Link>
				</button>
			</div>
			<div>
				<img src="./img/men_category.jpeg" alt="men-category" />
				<button>
					<Link className="link" to="/products/men">
						Men
					</Link>
				</button>
			</div>
			<div>
				<img src="./img/kids_category.jpeg" alt="children-category" />
				<button>
					<Link className="link" to="/products/kids">
						Children
					</Link>
				</button>
			</div>
			<div>
				<img src="./img/shoes_category.jpeg" alt="shoes-category" />
				<button>
					<Link className="link">Shoes</Link>
				</button>
			</div>
		</div>
	)
}

export default Categories
