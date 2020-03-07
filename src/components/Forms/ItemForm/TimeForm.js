import React from "react";

const ItemForm = ({ label, children, type = "time", ...otherProps }) => (
	<div>
		{type === "text" ? (
			<div>
				<label>{label}</label>
				<input type={type} {...otherProps} />
			</div>
		) : (
			<div>
				<label />
				<input type={type} {...otherProps} />
				{label}
			</div>
		)}
	</div>
);

export default ItemForm;
