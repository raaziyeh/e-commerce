import { Link } from "react-router-dom"
import Card from "../Card/Card"
import "./List.scss"
import { useState, useEffect } from "react"

const List = (props) => {
	const [data, setData] = useState([])

	const category = props.categoryId

	useEffect(() => {
		async function getProducts() {
			const response = await fetch(`http://localhost:3004/${category}`)
			const resData = await response.json()
			setData(resData)
		}

		getProducts()
	}, [category])

	return (
		<div className="list">
			{data &&
				data.map((item) => (
					<div>
						<Link to={`/product/${item.id}`}>
							<Card item={item} key={item.id} className="list-card" />
						</Link>
					</div>
				))}
		</div>
	)
}

export default List
