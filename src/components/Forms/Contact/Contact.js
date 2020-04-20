import React from "react";

import ItemForm from "../ItemForm/ItemForm";

const Contact = ({ setForm, formData, navigation }) => {
	const { phone, email } = formData;

	const { previous, next } = navigation;

	return (
		<div className="form">
			<h3>Contact </h3>
			<ItemForm
				label="Phone"
				name="phone"
				value={phone}
				onChange={setForm}
			/>
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
