import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div>
			<h1>Oops! An error occurred.</h1>
			{error && <p>{error.data}</p>}
			{/* navlink le a tag jastai link banaidinxa a href="" diyinthiyo bhane yesma Navlink to="" hunxa */}
			<NavLink to="/"><button>Go Home</button></NavLink>
		</div>
	);
}