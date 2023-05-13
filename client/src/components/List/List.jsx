import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import BeatLoader from "react-spinners/BeatLoader"
import Card from "../Card/Card"
import "./List.scss"

const List = (props) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const category = props.categoryId

	useEffect(() => {
		async function getProducts() {
			setIsLoading(true)
			setError(null)
			try {
				const response = await fetch(
					`https://e-commerce-json-server.vercel.app/${category}`
				)

				if (!response.ok) {
					throw new Error("Something went wrong")
				}

				const resData = await response.json()
				setData(resData)
			} catch (error) {
				setError({ message: "Oops! Something went wrong." })
			}
			setIsLoading(false)
		}

		getProducts()
	}, [category])

	let content = ""

	if (data && data.length > 0) {
		content = data.map((item) => (
			<div key={item.id}>
				<Link to={`/product/${item.id}`}>
					<Card item={item} className="list-card" />
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

	return <div className="list">{content}</div>
}

export default List
