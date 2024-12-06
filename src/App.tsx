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

function App() {
	return (
		<div className="main">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Main></Main>}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/collection" element={<Collection></Collection>}></Route>
				<Route path="/campaign" element={<Campaign></Campaign>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
