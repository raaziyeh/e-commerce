import EastIcon from "@mui/icons-material/East"
import WestIcon from "@mui/icons-material/West"
import { useState } from "react"
import "./Slider.scss"

const Slider = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	const images = [
		"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
		"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
		"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
		"https://images.pexels.com/photos/2310609/pexels-photo-2310609.jpeg?auto=compress&cs=tinysrgb&w=600",
		"https://images.pexels.com/photos/7622723/pexels-photo-7622723.jpeg?auto=compress&cs=tinysrgb&w=600",
		"https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=600",
	]

	const nextSlide = () => {
		setCurrentSlideIndex((prev) => (prev == images.length - 1 ? 0 : prev + 1))
	}

	const prevSlide = () => {
		setCurrentSlideIndex((prev) => (prev == 0 ? images.length - 1 : prev - 1))
	}

	return (
		<div className="slider">
			<div
				className="container"
				style={{
					width: `${100 * images.length}vw`,
					transform: `translateX(-${currentSlideIndex * 100}vw)`,
				}}
			>
				{images.map((img) => (
					<img src={img} alt="model" key={img} />
				))}
			</div>
			<div className="arrows">
				<div className="arrow-wrapper" onClick={prevSlide}>
					<WestIcon className="arrow" />
				</div>
				<div className="arrow-wrapper" onClick={nextSlide}>
					<EastIcon className="arrow" />
				</div>
			</div>
		</div>
	)
}

export default Slider
