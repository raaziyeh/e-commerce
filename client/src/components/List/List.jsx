import Card from "../Card/Card"
import "./List.scss"

const List = () => {
	const data = [
		{
			id: 1,
			title: "sweatpants and sweatshirt",
			img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			img2: "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			oldPrice: 47,
			price: 32,
			new: true,
		},
		{
			id: 2,
			title: "sweatpants and sweatshirt",
			img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			img2: "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			oldPrice: 47,
			price: 32,
			new: true,
		},
		{
			id: 3,
			title: "sweatpants and sweatshirt",
			img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			img2: "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			oldPrice: 47,
			price: 32,
			new: false,
		},
		{
			id: 4,
			title: "sweatpants and sweatshirt",
			img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			img2: "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			oldPrice: 47,
			price: 32,
			new: false,
		},
	]
	return (
		<div className="list">
			{data.map((item) => (
				<Card item={item} key={item.id} className="list-card" />
			))}
		</div>
	)
}

export default List
