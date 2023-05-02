import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import CompareIcon from "@mui/icons-material/Compare"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cartReducer"
import "./Product.scss"

const Product = () => {
	const [product, setProduct] = useState()
	const [mainImg, setMainImg] = useState()
	const [quantity, setQuantity] = useState(1)
	const id = useParams().id
	const dispatch = useDispatch()

	useEffect(() => {
		async function getProducts() {
			const response = await fetch("http://localhost:3004/products")
			const resData = await response.json()
			const [matchedItem] = resData.filter((item) => item.id == id)
			setMainImg(matchedItem.img)
			setProduct(matchedItem)
		}
		getProducts()
	}, [id])

	const changeImageHandler = (imgSrc) => {
		if (mainImg !== imgSrc) {
			setMainImg(imgSrc)
		}
	}

	console.log("here")
	if (product) {
		return (
			<div className="product">
				<div className="mobile-title">
					<h1>{product.title}</h1>
					<span className="price">${product.price}</span>
				</div>
				<div className="left">
					<div className="images">
						<img
							src={product.img}
							alt="product"
							onClick={() => changeImageHandler(product.img)}
						/>
						<img
							src={product.img2}
							alt="product"
							onClick={() => changeImageHandler(product.img2)}
						/>
					</div>
					<div className="main-img">
						<img src={mainImg} alt="product" />
					</div>
				</div>
				<div className="right">
					<h1 className="hide-800">{product.title}</h1>
					<span className="price hide-800">${product.price}</span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.
					</p>
					<div className="counts">
						<button
							onClick={() =>
								setQuantity((prev) => (prev !== 1 ? prev - 1 : prev))
							}
						>
							-
						</button>
						<span>{quantity}</span>
						<button
							onClick={() =>
								setQuantity((prev) => (prev !== 20 ? prev + 1 : prev))
							}
						>
							+
						</button>
					</div>
					<button
						className="add-to-cart"
						onClick={() => dispatch(addToCart({...product, quantity}))}
					>
						<AddShoppingCartIcon />
						ADD TO CART
					</button>
					<div className="more-actions">
						<div>
							<FavoriteBorderIcon className="icon" />
							<span>ADD TO WISH LIST</span>
						</div>
						<div>
							<CompareIcon className="icon" />
							<span>ADD TO COMPARE</span>
						</div>
					</div>
					<div className="details">
						<span>Vendor: Paris</span>
						<span>Product-Type: Sweater</span>
						<span>Tag: Sweatpants, Sweatshirt</span>
					</div>
					<div className="more">
						<span>DESCRIPTION</span>
						<span>ADDITIONAL INFORMATION</span>
						<span>FAQ</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Product
