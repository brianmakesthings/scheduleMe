import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Nav from "../components/Nav";

import About from "../pages/About";
import Input from "../pages/Input";
import Home from "../pages/Home";

const App = props => {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav></Nav>
				<Switch>
					<Route path="/about" exact component={About} />
					<Route path="/input" exact component={Input} />
					<Route path="/" render={props => <Home />} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;

