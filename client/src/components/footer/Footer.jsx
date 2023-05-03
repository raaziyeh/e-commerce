import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import "./Footer.scss"

const Footer = () => {
	function scrollToTop() {
		console.log("d")
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	return (
		<div className="footer">
			<div className="top">
				<div>
					<h5> About</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.
					</p>
				</div>
				<div>
					<h5>Contact</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.
					</p>
				</div>
				<div>
					<h5>Categories</h5>
					<ul>
						<li>
							<Link to="/products/women">
								<span onClick={scrollToTop}> Women</span>
							</Link>
						</li>
						<li>
							<Link to="/products/men">
								<span onClick={scrollToTop}>Men</span>
							</Link>
						</li>
						<li>
							<Link to="/products/kids">
								<span onClick={scrollToTop}> Children</span>
							</Link>
						</li>
						<li>
							<HashLink to="/#featured">Featured Products</HashLink>
						</li>
						<li>
							<HashLink to="/#sale">Sale</HashLink>
						</li>
					</ul>
				</div>
				<div>
					<h5>Links</h5>
					<ul>
						<li>
							<Link>FAQ</Link>
						</li>
						<li>
							<Link>Pages</Link>
						</li>
						<li>
							<Link>Stores</Link>
						</li>
						<li>
							<Link>Compare</Link>
						</li>
						<li>
							<Link>Cookies</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="bottom">
				<div className="left">
					<span>NICESTORE</span>
					<span>Copyright 2023. All Rights Reserved</span>
				</div>
				<div className="right">
					<img src="/img/payment.png" alt="payment" />
				</div>
			</div>
		</div>
	)
}

export default Footer
