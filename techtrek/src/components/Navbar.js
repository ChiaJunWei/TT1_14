import React from "react";
import { Link} from "react-router-dom";
import header1 from '../assets/DBS-Bank-logo.png';
import '../Styles/navbar.css'



 const Navbar = () => {



	return (
		<div id="nav" >
			
			<ul className="nav-link-logo">
			<Link
				className="navigation-link"
				to={{ pathname: "/" }}
			>
				<img src={header1} alt = "dbs-logo"width="180" height="60"></img>
			</Link>
			</ul>

			<ul className="nav-bars" >											
					<ul className="nav-link">
					<Link
						className="navigation-link"
						to={{
							pathname: "/login",
						}}
					>
						Log In
					</Link>
				</ul>

                <ul className="nav-link">
					<Link
						className="navigation-link"
						to={{
							pathname: "/cart",
						}}
					>
						Cart
					</Link>
				</ul>

				
						
			</ul>
		</div>
	);
};

export default Navbar;