import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import { useDispatch } from "react-redux"
import { addToCart, deleteFromCart } from "../../redux/cartReducer"
import "./CartCounter.scss"

function CartCounter({ item }) {
	const dispatch = useDispatch()

	return (
		<div>
			<div className="cart-counter-wrapper">
				{item.quantity === 1 ? (
					<DeleteOutlineIcon
						className="delete"
						onClick={() => dispatch(deleteFromCart(item.id))}
					/>
				) : (
					<button
						onClick={() => dispatch(addToCart({ ...item, quantity: -1 }))}
					>
						<RemoveOutlinedIcon />
					</button>
				)}
				<div className="quantity">{item.quantity}</div>
				<button onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}>
					<AddOutlinedIcon />
				</button>
			</div>
		</div>
	)
}

export default CartCounter
