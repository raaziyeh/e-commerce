import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Product from "./pages/product/Product"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import SmoothScrollToTop from "./utils/SmoothScrollToTop"
import "./app.scss"

const Layout = () => {
	return (
		<div className="app">
			<Navbar />
			<Outlet />
			<SmoothScrollToTop>
				<Footer />
			</SmoothScrollToTop>
		</div>
	)
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/products/:id",
				element: <Products />,
			},
			{
				path: "/product/:id",
				element: <Product />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
