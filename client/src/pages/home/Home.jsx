import Slider from "../../components/slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Categories from "../../components/Categories/Categories"

const Home = () => {
	return (
		<div className="home">
			<Slider />
			<FeaturedProducts title="featured" />
			<Categories />
			<FeaturedProducts title="trending" />
		</div>
	)
}

export default Home
