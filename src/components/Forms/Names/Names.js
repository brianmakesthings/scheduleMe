import React from "react";

import ItemForm from "../ItemForm/ItemForm";

const Names = ({ setForm, formData, navigation }) => {
	const { firstName, lastName, nickName } = formData;

	const { next } = navigation;

	return (
		<div className="form">
			<h3>Name</h3>
			<ItemForm
				label="First Name"
				name="firstName"
				value={firstName}
				onChange={setForm}
			/>
			<ItemForm
				label="Last Name"
				name="lastName"
				value={lastName}
				onChange={setForm}
			/>
			<ItemForm
				label="Nick Name"
				name="nickName"
				value={nickName}
				onChange={setForm}
			/>
			<div>
				<button onClick={next}>Next</button>
			</div>
		</div>
	);
};

export default Names;
