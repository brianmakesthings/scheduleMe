import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory
} from "react-router-dom";

import Input from "../pages/Input";

const Home = props => {
	let history = useHistory();
	return (
		<div>
			<button onClick={() => history.push("/input")}>
				Create Survey
			</button>

			<Link to={"/input"}></Link>
			<Switch>
				<Route path={"/input"} exact component={Input} />
			</Switch>
		</div>
	);
};

export default Home;
