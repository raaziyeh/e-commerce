import { useState, useEffect } from "react"
import BeatLoader from "react-spinners/BeatLoader"
import Slider from "../../components/slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact"
import useHttp from "../../hooks/use-http"

const Home = () => {
	const [mainSliderImages, setMainSliderImages] = useState()
	const { isLoading, error, sendRequest: getSliderImages } = useHttp()

	useEffect(() => {
		getSliderImages(
			{ url: "https://e-commerce-json-server.vercel.app/slider" },
			(data) => setMainSliderImages(data)
		)
	}, [getSliderImages])

	let content = ""

	if (mainSliderImages && mainSliderImages.length > 0) {
		const sliderConfig = {
			height: "100vh - 5rem",
			widthValue: "100",
			widthUnit: "vw"
		}

		content = <Slider images={mainSliderImages} {...sliderConfig}/>
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
