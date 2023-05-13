import { useState, useEffect } from "react"
import BeatLoader from "react-spinners/BeatLoader"
import Slider from "../../components/slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact"

const Home = () => {
	const [mainSliderImages, setMainSliderImages] = useState()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		async function getSliderImages() {
			setIsLoading(true)
			setError(null)
			try {
				const response = await fetch(
					"https://e-commerce-json-server.vercel.app/slider"
				)
				if (!response.ok) {
					throw new Error("Something went wrong!")
				}
				const responseData = await response.json()
				setMainSliderImages(responseData)
			} catch (error) {
				setError({ message: "Oops! Something went wrong." })
			}
			setIsLoading(false)
		}

		getSliderImages()
	}, [])

	let content = ""

	if (mainSliderImages && mainSliderImages.length > 0) {
		content = <Slider images={mainSliderImages} />
	}

	if (error) {
		content = <p>{error.message}</p>
	}

	if (isLoading) {
		content = <BeatLoader color="#36d7b7" />
	}

	return (
		<div className="home">
			{content}

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
