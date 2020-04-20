import React from "react";

import ItemForm from "../ItemForm/ItemForm";

const Time = ({ setForm, formData, navigation }) => {
	const { timeBegin, timeEnd } = formData;

	const { previous, next } = navigation;

	return (
		<div className="form">
			<h3>Time input</h3>
			<ItemForm
				label="Time begin"
				name="timeBegin"
				value={timeBegin}
				onChange={setForm}
			/>
			<ItemForm
				label="Time end"
				name="timeEnd"
				value={timeEnd}
				onChange={setForm}
			/>
			<div>
				<button onClick={previous}>Previous</button>
				<button onClick={next}>Next</button>
			</div>
		</div>
	);
};

export default Time;
