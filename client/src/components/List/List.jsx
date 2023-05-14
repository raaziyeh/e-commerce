import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import BeatLoader from "react-spinners/BeatLoader"
import Card from "../Card/Card"
import useHttp from "../../hooks/use-http"
import "./List.scss"

const List = (props) => {
	const [data, setData] = useState([])
	const { isLoading, error, sendRequest: getProducts } = useHttp()

	const category = props.categoryId

	useEffect(() => {
		getProducts(
			{ url: `https://e-commerce-json-server.vercel.app/${category}` },
			(data) => setData(data)
		)
	}, [getProducts, category])

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
