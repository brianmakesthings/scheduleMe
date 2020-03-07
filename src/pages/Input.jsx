import React from "react";

import { useForm, useStep } from "react-hooks-helper";

import Names from "../components/Forms/Names/Names";
import Contact from "../components/Forms/Contact/Contact";
import Date from "../components/Forms/Date/Date";
import Time from "../components/Forms/Time/Time";
import Review from "../components/Forms/Review/Review";
import Submit from "../components/Forms/Submit/Submit";

const steps = [
	{ id: "names" },
	{ id: "contact" },
	{ id: "date" },
	{ id: "time" },
	{ id: "review" },
	{ id: "submit" }
];

const defaultData = {
	firstName: "Anthony",
	lastName: "Pham",
	email: "email@domain.com",
	dateBegin: "2020-03-01",
	dateEnd: "2020-03-01",
	timeBegin: "12:30:12",
	timeEnd: "14:31:49"
};

const Input = ({ images }) => {
	const [formData, setForm] = useForm(defaultData);
	const { step, navigation } = useStep({ initialStep: 0, steps });
	const { id } = step;

	const props = { formData, setForm, navigation };

	switch (id) {
		case "names":
			return <Names {...props} />;
		case "contact":
			return <Contact {...props} />;
		case "date":
			return <Date {...props} />;
		case "time":
			return <Time {...props} />;
		case "review":
			return <Review {...props} />;
		case "submit":
			return <Submit {...props} />;
		default:
			return null;
	}

	return (
		<div>
			<p>Home</p>
		</div>
	);
};

export default Input;
