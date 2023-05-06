import Slider from "../../components/slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact"

const Home = () => {
	const headerSliderImages = [
		"./img/slider_1.jpeg",
		"./img/slider_4.jpeg",
		"./img/slider_2.jpeg",
		"./img/slider_3.jpeg",
	]

	return (
		<div className="home">
			<Slider images={headerSliderImages} />

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
