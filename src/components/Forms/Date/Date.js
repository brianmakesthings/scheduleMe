import React from "react";

import ItemForm from "../ItemForm/DateForm";

const Time = ({ setForm, formData, navigation }) => {
	const { dateBegin, dateEnd } = formData;

	const { previous, next } = navigation;

	return (
		<div className="form">
			<h3>Date Input</h3>
			<ItemForm
				label="Date begin"
				name="dateBegin"
				value={dateBegin}
				onChange={setForm}
			/>
			<ItemForm
				label="Date end"
				name="dateEnd"
				value={dateEnd}
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
