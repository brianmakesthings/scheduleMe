import React from "react";

import { useForm, useStep } from "react-hooks-helper";

import Names from "../components/Forms/Names/Names";
import Contact from "../components/Forms/Contact/Contact";
import Time from "../components/Forms/Time/Time";
import Review from "../components/Forms/Review/Review";
import Submit from "../components/Forms/Submit/Submit";

const steps = [
	{ id: "names" },
	{ id: "contact" },
	{ id: "time" },
	{ id: "review" },
	{ id: "submit" }
];

const defaultData = {
	firstName: "Anthony",
	lastName: "Pham",
	nickName: "AP",
	email: "email@domain.com",
	phone: "+61 4252 454 332",
	timeBegin: "2020-03-01T23:28:56.782Z",
	timeEnd: "2014-01-01T23:28:56.782Z"
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
