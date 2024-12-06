import React from "react";

//css
import "../Css/Project.css";

function Project() {
	return (
		<div className="project">
			<h1 className="project-h1">Project</h1>

			<Sorayama></Sorayama>
			<Adidas></Adidas>
		</div>
	);
}

function Sorayama() {
	return (
		<div className="sorayama-wrap project-detail">
			<h3>JUUN.J X SORAYAMA HAJIME (2016.01)</h3>
			<p className="sorayama-p">
				Hajime Sorayama is known world-wide for his imaginative and highly accomplished paintings of beautiful women. Using brush, pencil and acrylic paint, airbrushing only finishing details,
				he creates memorable images in a hyper-realistic style. He is often referred to as the contemporary visionary version of Vargas by those familiar with his pin-up style works, and is
				respected by artists and illustrators for his perfect technique. In retrospect, Sorayama's work has been remarkably prescient. Beginning in the 1970's and evolving into the 21st
				century, the futuristic auras of the robotic, mythic and fantastical figures in his art have always been ahead of their time." The collaboration illustrates the creations of Sorayama
				and Juun.J, both visionaries of the past, present, and future, on progress and results. The collection emphasizes on glaring contrasts, and Sorayama’s hyper-realistic, dramatic
				artworks add significance to the collection.
			</p>
		</div>
	);
}

function Adidas() {
	return (
		<div className="Adidas-wrap project-detail">
			<h3>JUUN.J X ADIDAS (2015.01)</h3>
			<p>
				Presented during Paris Men's Fashion Week, Juun.J's 2015-16 FW collection is inspired by a modern and chic military look leading to tailored and structured silhouettes. For his
				collaboration with adidas Juun.J redefined the iconic adidas ZX 8000 silhouette to fit the exquisite and classic feel of the collection. adidas ZX 8000 tooling was used in this
				season's adidas by Juun.J footwear. Velcro straps were added and the dog bone torsion sole turned from matt to shiny to update this iconic silhouette with a new luxury sport tech
				appeal. Ths adidas by Juun.J ZX 8000 models will be available in a low and high top version, either in an air-mesh and leather mix or in a full leather with perforated leather edition.
			</p>
		</div>
	);
}

export default Project;
