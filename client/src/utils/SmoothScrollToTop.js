import { useEffect } from "react"
import { useLocation, useNavigationType } from "react-router-dom"
function SmoothScrollToTop({ children }) {
	const location = useLocation()
	const navType = useNavigationType()
	useEffect(() => {
		if (navType !== "POP") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			})
		}
	}, [location, navType])
	return <>{children}</>
}
export default SmoothScrollToTop
