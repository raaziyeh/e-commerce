import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import SearchIcon from "@mui/icons-material/Search"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined"
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined"
import Cart from "../../Cart/Cart"
import { useSelector } from "react-redux"
import "./Navbar.scss"

const Navbar = () => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
	const cartProducts = useSelector((state) => state.cart.products)

	const closeMobileNav = () => {
		setIsMobileNavOpen(false)
	}

	const openMobileNav = () => {
		setIsMobileNavOpen(true)
		setIsCartOpen(false)
	}

	useEffect(() => {
		if (isMobileNavOpen) {
			document.body.classList.add("overflowHidden")
		} else {
			document.body.classList.remove("overflowHidden")
		}
	}, [isMobileNavOpen])

	return (
		<>
			<div className="navbar">
				<div className="left">
					<Link to="/">NICESTORE</Link>
				</div>
				<div className="center">
					<div className="item">
						<Link to="/products/women">Women</Link>
					</div>
					<div className="item">
						<Link to="/products/men">Men</Link>
					</div>
					<div className="item">
						<Link to="/products/kids">Children</Link>
					</div>
					<div className="item  hidden-1200">
						<Link>Stores</Link>
					</div>
				</div>
				<div className="right">
					<div className="item">
						<img src="/img/en.png" alt="language-flag" />
						<KeyboardArrowDownIcon className="arrow-icon" />
					</div>
					<div className="item">
						<span>USD</span>
						<KeyboardArrowDownIcon className="arrow-icon" />
					</div>
					<div className="icons">
						<div className="nav-icon">
							<SearchIcon />
						</div>
						<div className="nav-icon mobile-none">
							<FavoriteBorderOutlinedIcon />
						</div>
						<div
							className="cart-icon nav-icon"							
							onClick={() => setIsCartOpen((prev) => !prev)}
						>
							<ShoppingCartOutlinedIcon />
							<span>{cartProducts.length}</span>
						</div>
						<div className="burger-menu nav-icon" onClick={openMobileNav}>
							<MenuIcon />
						</div>
					</div>
				</div>

				{/* Cart */}
				{isCartOpen && (
					<div
						className="cart-container"
						onMouseLeave={() => setIsCartOpen(false)}
					>
						<Cart />
					</div>
				)}

				{/* Mobile Nav */}
				<>
					<div
						className={`${
							isMobileNavOpen ? "nav-backdrop" : "mobileNav-wrapper"
						}`}
						onClick={closeMobileNav}
					/>
					<div
						className="mobile-nav"
						style={isMobileNavOpen ? { right: "0" } : { right: "-100%" }}
					>
						<div className="top">
							<div className="close" onClick={closeMobileNav}>
								<CloseOutlinedIcon className="icon" />
							</div>
						</div>
						<div className="center">
							<div className="link" onClick={closeMobileNav}>
								<HashLink to="/#featured">
									<span>New & Featured</span>
									<ArrowForwardIosOutlinedIcon className="icon" />
								</HashLink>
							</div>
							<div className="link" onClick={closeMobileNav}>
								<Link to="/products/women">
									<span>Women</span>
									<ArrowForwardIosOutlinedIcon className="icon" />
								</Link>
							</div>
							<div className="link" onClick={closeMobileNav}>
								<Link to="products/men">
									<span>Men</span>
									<ArrowForwardIosOutlinedIcon className="icon" />
								</Link>
							</div>
							<div className="link" onClick={closeMobileNav}>
								<Link to="products/kids">
									<span>Kids</span>
									<ArrowForwardIosOutlinedIcon className="icon" />
								</Link>
							</div>
							<div className="link" onClick={closeMobileNav}>
								<HashLink to="/#sale">
									<span>Sale</span>
									<ArrowForwardIosOutlinedIcon className="icon" />
								</HashLink>
							</div>
						</div>
						<div className="bottom">
							<div>
								<StoreOutlinedIcon />
								<span>Stores</span>
							</div>
							<div>
								<HelpOutlineOutlinedIcon />
								<span>FAQ</span>
							</div>
							<div>
								<HeadsetMicOutlinedIcon />
								<span>Contact</span>
							</div>
						</div>
					</div>
				</>
			</div>
		</>
	)
}

export default Navbar
