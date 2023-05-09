import { Link } from "react-router-dom"
import "./notFound.scss"

const NotFound = () => {
	return (
		<main className="main">
			<div className="container" >
				<p>
					<span className="status">404</span>
					<br />
					the page not found
				</p>
				<Link to="/" className="link">
					go to Home Page!
				</Link>
			</div>
		</main>
	)
}

export default NotFound
