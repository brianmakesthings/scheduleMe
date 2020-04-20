import React from "react";

const Review = ({ setForm, formData, navigation }) => {
	const {
		firstName,
		lastName,
		nickName,
		email,
		phone,
		timeBegin,
		timeEnd
	} = formData;
	const { go } = navigation;

	return (
		<div className="form">
			<h3>Review your data</h3>
			<h4>
				Name
				<button onClick={() => go("names")}>Edit</button>
			</h4>
			<div>
				{" "}
				First name: {`${firstName}`},
				<br />
				Last Name: {`${lastName}`},
			</div>
			<div>Nick Name: {`${nickName}`}</div>
			<h4>
				Contact
				<button onClick={() => go("contact")}>Edit</button>
			</h4>
			<div>
				Phone: {`${phone}`},
				<br />
				E-mail: {`${email}`}
			</div>
			<h4>
				Time Input
				<button onClick={() => go("names")}>Edit</button>
			</h4>
			<div>
				{" "}
				Time Begin: {`${timeBegin}`},
				<br />
				TimeEnd: {`${timeEnd}`},
			</div>
			<div>
				<button onClick={() => go("submit")}>Submit</button>
			</div>
		</div>
	);
};

export default Review;
