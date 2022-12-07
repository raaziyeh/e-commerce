import Slider from "../../components/slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact"

const Home = () => {
	return (
		<div className="home">
			<Slider />
			<FeaturedProducts title="featured" />
			<Categories />
			<FeaturedProducts title="trending" />
			<Contact />
		</div>
	)
}

export default Home
