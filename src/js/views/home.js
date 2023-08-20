import React from "react";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div className="container">
			{/* Contenedor de Characters */}
			<div className="my-carousel d-flex overflow-x-scroll">
				<div className="my-card">
					<h1 className="text-danger my-title">Characters</h1>
					<div>
						<img src="https://picsum.photos/200/300" alt="Descripción de la imagen" />
					</div>
					<div className="body-text">
						<p>Name</p>
						<p>Gender</p>
						<p>Hair Color</p>
						<p>Eye Color</p>
					</div>
					<div className="button-footer">
						<button className="btn btn-primary">Learn More</button>
						<button className="btn btn-warning">C</button>
					</div>
				</div>
				{/* Clones de la carta */}
			</div>
			
			{/* Contenedor de Planets */}
			<div className="my-carousel d-flex overflow-x-scroll">
				<div className="my-card">
					<h1 className="text-danger my-title">Planets</h1>
					<div>
						<img src="https://picsum.photos/200/300" alt="Descripción de la imagen" />
					</div>
					<div className="body-text">
						<p>Population</p>
						<p>Terraine</p>
					</div>
					<div className="button-footer">
						<button className="btn btn-primary">Learn More</button>
						<button className="btn btn-warning">C</button>
					</div>
				</div>
				{/* Clones de la carta */}
			</div>
		</div>
	);
};
