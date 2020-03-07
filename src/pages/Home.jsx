import React from "react";

import { useHistory } from "react-router-dom";

const Home = ({ images }) => {
	let history = useHistory();

	const handleClick = () => {
		history.push("/input");
	};

	return (
		<div>
			<button onClick={handleClick}>Create Survey</button>
		</div>
	);
};

export default Home;
