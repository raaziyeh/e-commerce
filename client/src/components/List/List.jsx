import { Link } from "react-router-dom"
import Card from "../Card/Card"
import "./List.scss"
import { useState, useEffect } from "react"

const List = (props) => {
	const [data, setData] = useState([])

	const category = props.categoryId

	useEffect(() => {
		async function getProducts() {
			try {
				const response = await fetch(`http://localhost:3004/${category}`)
				if (response.ok) {
					const resData = await response.json()
					setData(resData)
				}
			} catch (error) {
				console.log(
					"There was something wrong with sending request. please try again later"
				)
			}
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
