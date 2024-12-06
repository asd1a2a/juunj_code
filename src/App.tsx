import React from "react";
import { Routes, Route } from "react-router-dom";

//css
import "./App.css";

//tsx
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import About from "./Components/About";
import Collection from "./Components/Collection";
import Campaign from "./Components/Campaign";
import Project from "./Components/Project";

function App() {
	return (
		<div className="main">
			<Header></Header>
			<Routes>
				<Route path="/juunj/" element={<Main></Main>}></Route>
				<Route path="/juunj/about/" element={<About></About>}></Route>
				<Route path="/juunj/collection/" element={<Collection></Collection>}></Route>
				<Route path="/juunj/campaign/" element={<Campaign></Campaign>}></Route>
				<Route path="/juunj/project/" element={<Project></Project>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
