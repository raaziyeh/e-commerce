import Slider from "../../components/slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"

const Home = () => {
	return (
		<div className="home">
			<Slider />
			<FeaturedProducts title="featured" />
			<FeaturedProducts title="trending"/>
		</div>
	)
}

export default Home
