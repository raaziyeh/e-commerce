import { Link } from "react-router-dom"
import "./Categories.scss"

const Categories = () => {
	return (
		<div className="categories">
			<div>
				<img
					src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="sale-category"
				/>
				<button>
					<Link className="link" to="/products/1">
						Sale
					</Link>
				</button>
			</div>
			<div>
				<img
					src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="women-category"
				/>
				<button>
					<Link to="/products/1" className="link">
						Women
					</Link>
				</button>
			</div>
			<div>
				<img
					src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="season-category"
				/>
				<button>
					<Link to="/products/1" className="link">
						New Season
					</Link>
				</button>
			</div>
			<div>
				<img
					src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="men-category"
				/>
				<button>
					<Link to="/products/1" className="link">
						Men
					</Link>
				</button>
			</div>
			<div>
				<img
					src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="accessories-category"
				/>
				<button>
					<Link to="/products/1" className="link">
						Accessories
					</Link>
				</button>
			</div>
			<div>
				<img
					src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="shoes-category"
				/>
				<button>
					<Link to="/products/1" className="link">
						Shoes
					</Link>
				</button>
			</div>
		</div>
	)
}

export default Categories
