import EastIcon from "@mui/icons-material/East"
import WestIcon from "@mui/icons-material/West"
import { useState } from "react"
import "./Slider.scss"

const Slider = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	const images = [
		"./img/slider_4.jpeg",
		"./img/slider_1.jpeg",
		"./img/slider_2.jpeg",
		"./img/slider_3.jpeg",
	]

	const nextSlide = () => {
		setCurrentSlideIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
	}

	const prevSlide = () => {
		setCurrentSlideIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
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
