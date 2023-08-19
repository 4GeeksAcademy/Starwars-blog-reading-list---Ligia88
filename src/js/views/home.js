import React from "react";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div className="container">
			<h1 className="text-danger">Characters</h1>

			{/* Contenedor de cartas */}
			<div className="my-carousel d-flex overflow-x-scroll">
				{/* Carta original */}
				<div className="border border-danger my-card mx-2"> {/* Agregamos la clase mx-2 para agregar un margen horizontal entre las cartas */}
					<div>
						<img src="https://picsum.photos/200/300" alt="Descripción de la imagen" />
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

				{/* Clones de la carta */}
				{Array.from({ length: 8 }).map((_, index) => (
					<div key={index} className="border border-danger my-card mx-2"> {/* Agregamos la clase mx-2 para agregar un margen horizontal entre las cartas */}
						<div>
						<img src="https://picsum.photos/200/300" alt="Descripción de la imagen" />
						</div>
						<div>
						    <p>Name</p>
							<p>Gender</p>
							<p>Hair Color</p>
							<p>Eye Color</p>
						</div>
					<div className="btn footer">
					<button className="btn btn-primary">Learn More</button>
					<button>C</button>
					</div>

					</div>
				))}
			</div>
		</div>
	);
};
