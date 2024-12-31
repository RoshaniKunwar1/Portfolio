import { Outlet } from "react-router-dom"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"

export const AppLayout = () => {
	return (
		<div className="container mx-auto px-8">
			<Navbar />
			{/*  headers jaile top, footers jaile bottom, and other content jaile middle garna=> Outlet */}
			<Outlet />
			<Contact />
		</div>
	);
}