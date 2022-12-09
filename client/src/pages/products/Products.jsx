import { useState } from "react"
import { useParams } from "react-router-dom"
import List from "../../components/List/List"
import "./Products.scss"

const Products = () => {
	const [maxPrice, setMaxPrice] = useState(1000)
	const [sort, setSort] = useState(null)
	const categoryId = parseInt(useParams().id)

	// temporary
	const headerImg =
		"https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600"

	return (
		<div className="products">
			<div className="left">
				<div className="filter-item">
					<h2>Product Categories</h2>
					<div className="input-item">
						<input type="checkbox" name="shoes" id="shoes" />
						<label htmlFor="shoes">Shoes</label>
					</div>
					<div className="input-item">
						<input type="checkbox" name="skirt" id="skirt" />
						<label htmlFor="skirt">Skirt</label>
					</div>
					<div className="input-item">
						<input type="checkbox" name="coat" id="coat" />
						<label htmlFor="coat">Coat</label>
					</div>
				</div>
				<div className="filter-item">
					<h2>Filter by Price</h2>
					<div className="input-item">
						<span>0</span>
						<input
							className="range-input"
							type="range"
							name="price"
							id="price"
							min={0}
							max={1000}
							onChange={(e) => setMaxPrice(e.target.value)}
						/>
						<span>{maxPrice}</span>
					</div>
				</div>
				<div className="filter-item">
					<h2>Sort by</h2>
					<div className="input-item">
						<input
							type="radio"
							name="price"
							id="asc"
							value="asc"
							onChange={(e) => setSort("asc")}
						/>
						<label htmlFor="asc">Price (Lowest First)</label>
					</div>
					<div className="input-item">
						<input
							type="radio"
							name="price"
							id="desc"
							value="desc"
							onChange={(e) => setSort("desc")}
						/>
						<label htmlFor="desc">Price (Highest First)</label>
					</div>
				</div>
			</div>
			<div className="right">
				<div className="top">
					<img
						src={headerImg}
						alt="cloth-category"
						className="products-header-img"
					/>
				</div>

				<List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
			</div>
		</div>
	)
}

export default Products
