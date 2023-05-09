import { useState, useEffect } from "react"
import Slider from "../../components/slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact"

const Home = () => {
	const [mainSliderImages, setMainSliderImages] = useState()

	useEffect(() => {
		async function getSliderImages() {
			try {
				const response = await fetch(
					"https://e-commerce-json-server.vercel.app/slider"
				)
				if (response.ok) {
					const responseData = await response.json()
					setMainSliderImages(responseData)
				}
			} catch (error) {
				console.error(error)
			}
		}

		getSliderImages()
	}, [])

	return (
		<div className="home">
			{mainSliderImages && <Slider images={mainSliderImages} />}

			<div id="featured">
				<FeaturedProducts title="featured" />
			</div>

			<Categories />

			<div id="sale">
				<FeaturedProducts title="Sale" />
			</div>

			<Contact />
		</div>
	)
}

export default Home
