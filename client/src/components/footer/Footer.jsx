import { Link } from "react-router-dom"
import "./Footer.scss"

const Footer = () => {
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
							<Link to="/products/1">Women</Link>
						</li>
						<li>
							<Link to="/products/2">Men</Link>
						</li>
						<li>
							<Link>Shoes</Link>
						</li>
						<li>
							<Link>Accessories</Link>
						</li>
						<li>
							<Link>New Arrivals</Link>
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
