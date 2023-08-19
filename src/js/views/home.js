import React from "react";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div className="container">
			<h1 className="text-danger">Characters</h1>

			{/* Carta original */}
			<div className="my-carousel">
				<div className="my-card">
					<div>
						<img src="" alt="Descripción de la imagen" />
					</div>
					<div>
						<p>Gender</p>
						<p>Hair Color</p>
						<p>Eye Color</p>
						<p>Cuarto párrafo</p>
					</div>
					<button className="btn btn-primary">Learn More</button>
					<button>C</button>
				</div>
			</div>

			{/* Clones de la carta */}
			{Array.from({ length: 8 }).map((_, index) => (
				<div key={index} className="border border-danger">
					<div className="my-card">
						<div>
							<img src="" alt="Descripción de la imagen" />
						</div>
						<div>
							<p>Gender</p>
							<p>Hair Color</p>
							<p>Eye Color</p>
							<p>Cuarto párrafo</p>
						</div>
						<button className="btn btn-primary">Learn More</button>
						<button>C</button>
					</div>
				</div>
			))}
		</div>
	);
};
