import "./Card.scss"

const Card = ({ item }) => {
	return (
		<div className="card">
			{item.new && <span className="badge">New Season</span>}
			<div className="images">
				<div className="container">
					<img src={item.img} alt="card-img" />
					<img src={item.img2} alt="card-img" />
				</div>
			</div>
			<h3>{item.title}</h3>
			<div className="prices">
				<span>${item.oldPrice}</span>
				<span>${item.price}</span>
			</div>
		</div>
	)
}

export default Card
