import Slider from "../../components/slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact"

const Home = () => {
	return (
		<div className="home">
			<Slider />
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
