
import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions} = useContext(Context)
	console.log (store.favorites)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							{/* Favorites {store.favorite.length} */}
						</button>
						<ul className="dropdown-menu">
							{/* {store.favorite.map((item)=> {
								return <li>
								<a className="dropdown-item" href="#">
									{item.name}
								</a>
							</li>
							})} */}
							
						
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

