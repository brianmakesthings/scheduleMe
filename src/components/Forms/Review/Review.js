import React from "react";

const Review = ({ setForm, formData, navigation }) => {
	const {
		firstName,
		lastName,
		email,
		dateBegin,
		dateEnd,
		timeBegin,
		timeEnd
	} = formData;

	const { go } = navigation;

	return (
		<div className="form">
			<h3>Review your data</h3>
			{/* Name Review */}
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

			{/* Contact review */}
			<h4>
				Contact
				<button onClick={() => go("contact")}>Edit</button>
			</h4>
			<div>E-mail: {`${email}`}</div>

			{/* Date Input review */}
			<h4>
				Date Input
				<button onClick={() => go("date")}>Edit</button>
			</h4>
			<div>
				{" "}
				Date Begin: {`${dateBegin}`},
				<br />
				Date End: {`${dateEnd}`},
			</div>

			{/* Time Input Review */}
			<h4>
				Time Input
				<button onClick={() => go("time")}>Edit</button>
			</h4>
			<div>
				{" "}
				Time Begin: {`${timeBegin}`},
				<br />
				Time End: {`${timeEnd}`},
			</div>
			<div>
				<button onClick={() => go("submit")}>Submit</button>
			</div>
		</div>
	);
};

export default Review;
