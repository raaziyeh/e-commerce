import { Link } from "react-router-dom"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import SearchIcon from "@mui/icons-material/Search"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import "./Navbar.scss"

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="left">
				<div className="item">
					<img src="/img/en.png" alt="language-flag" />
					<KeyboardArrowDownIcon className="arrow-icon" />
				</div>
				<div className="item">
					<span>USD</span>
					<KeyboardArrowDownIcon className="arrow-icon" />
				</div>
				<div className="item">
					<Link to="/products/1">Women</Link>
				</div>
				<div className="item">
					<Link to="/products/2">Men</Link>
				</div>
				<div className="item">
					<Link to="/products/3">Children</Link>
				</div>
			</div>
			<div className="center">
				<Link to="/">NICESTORE</Link>
			</div>
			<div className="right">
				<div className="item">
					<Link to="/">Homepage</Link>
				</div>
				<div className="item">
					<Link>About</Link>
				</div>
				<div className="item">
					<Link>Contact</Link>
				</div>
				<div className="item">
					<Link>Stores</Link>
				</div>
				<div className="icons">
					<SearchIcon />
					<PersonOutlineOutlinedIcon />
					<FavoriteBorderOutlinedIcon />
					<div className="cart-icon">
						<ShoppingCartOutlinedIcon />
						<span>0</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
