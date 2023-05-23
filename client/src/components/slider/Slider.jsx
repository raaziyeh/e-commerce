import EastIcon from "@mui/icons-material/East"
import WestIcon from "@mui/icons-material/West"
import { useState } from "react"
import "./Slider.scss"

const Slider = ({ images, widthValue, widthUnit, height }) => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	const transformedWidth = `calc(${widthValue}${widthUnit})`
	const transformedHeight = `calc(${height})`	

	const nextSlide = () => {
		setCurrentSlideIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
	}

	const prevSlide = () => {
		setCurrentSlideIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
	}

	return (
		<div className="slider" style={{ width: transformedWidth, height: transformedHeight}}>
			<div
				className="container"
				style={{
					width: `${widthValue * images.length}${widthUnit}`,
					transform: `translateX(-${currentSlideIndex * widthValue}${widthUnit})`,
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
