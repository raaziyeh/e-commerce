import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Product from "./pages/product/Product"
import Navbar from "./components/Layout/Navbar/Navbar"
import Footer from "./components/Layout/Footer/Footer"
import NotFound from "./pages/notFound/NotFound"
import "./app.scss"

const Layout = () => {
	return (
		<div className="app">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	)
}

const router = createBrowserRouter([
	{ path: "*", element: <NotFound /> },
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
