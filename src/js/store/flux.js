const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Characters: [],
			urlBase: "https://www.swapi.tech/api",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				// fetch().then().then(data => setStore({ "foo": data.bar }))
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			},
			getCharacters: () => {
				fetch(`${getStore().urlBase}/people`)
				.then(response => response.json())
				.then(data => {
					for (let item of data.results) {
						fetch(item.url)
							.then((data) => {
								setStore({
									Characters: data.results
								})
						}
					});
				}
			}
		};
	};
	
	export default getState;
