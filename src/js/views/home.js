import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context)
	return (
		<div className="container">
			{/* Contenedor de Characters */}
			<div className="my-carousel d-flex overflow-x-scroll">
				{store.characters.map((item, i) => {
					return (
						<div className="my-card" key={i}>
							<h1 className="text-danger my-title">{Characters}</h1>
							<div>
								<img src="https://picsum.photos/200/300" alt="Descripción de la imagen" />
							</div>
							<div className="body-text">
								<p><strong>Name:</strong> {item.properties?.name}</p>
								<p><strong>Gender:</strong> {item.properties?.gender}</p>
								<p><strong>Hair Color:</strong> {item.properties?.hair_color}</p>
								<p><strong>Eye Color:</strong> {item.properties?.eye_color}</p>

							</div>
							<div className="button-footer">
								<button className="btn btn-primary">Learn More</button>
								<button className="btn btn-warning">C</button>
							</div>
						</div>
					);
				})}
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
