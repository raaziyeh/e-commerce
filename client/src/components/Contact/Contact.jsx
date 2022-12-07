import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import PinterestIcon from "@mui/icons-material/Pinterest"
import EmailOutlined from "@mui/icons-material/EmailOutlined"
import { Link } from "react-router-dom"
import "./Contact.scss"

const Contact = () => {
	return (
		<div className="contact">
			<span>BE IN TOUCH WITH US</span>
			<form>
				<input type="email" placeholder="Enter your email" />
				<button>JOIN US</button>
			</form>
			<div className="socials">
				<Link>
					<FacebookOutlinedIcon className="icon" />
				</Link>
				<Link>
					<InstagramIcon className="icon" />
				</Link>
				<Link>
					<TwitterIcon className="icon" />
				</Link>
				<Link>
					<EmailOutlined className="icon" />
				</Link>
				<Link>
					<PinterestIcon className="icon" />
				</Link>
			</div>
		</div>
	)
}

export default Contact
