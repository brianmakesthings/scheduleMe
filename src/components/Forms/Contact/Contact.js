import React from "react";

import ItemForm from "../ItemForm/TextForm";

const Contact = ({ setForm, formData, navigation }) => {
	const { email } = formData;

	const { previous, next } = navigation;

	return (
		<div className="form">
			<h3>Contact </h3>
			<ItemForm
				label="E-mail"
				name="email"
				value={email}
				onChange={setForm}
			/>
			<div>
				<button onClick={previous}>Previous</button>
				<button onClick={next}>Next</button>
			</div>
		</div>
	);
};

export default Contact;
