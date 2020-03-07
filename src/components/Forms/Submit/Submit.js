import React from "react";
const Submit = ({ navigation }) => {
	const { go } = navigation;
	return (
		<div>
			<h3>Generating Calendar...</h3>
			New Form? <button onClick={() => go("names")}>New</button>
		</div>
	);
};

export default Submit;
