import React from "react";
import { useInput } from "../hooks/input-hook";

const Input = props => {
	const { value, bind, reset } = useInput("");

	const handleSubmit = event => {
		event.preventDefault();
		alert(`Submitting Name ${value}`);
		reset();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input type="text" {...bind} />
				</label>
				<input type="submit" value="Submit" />
			</form>

			<div className="display">
				<p>Name {value}</p>
			</div>
		</div>
	);
};

export default Input;
