import React from "react";
import "./Home.css"; // Import the CSS file for styling

function Home() {
	const link = "https://sjinnovation.com";
	const target = "_blank";

	return (
		<div className="container">
			<h1>SJ Innovation LLC</h1>
			<p>
				<b>Front-end</b>: React.js 
			</p>
			<p>
				<b>Back-end</b>: Node.js, Express.js
			</p>
			<p>
				<b>Database</b>: MongoDB 
			</p>
			<p>
				<b>Developed By</b>: Sajjad Hossain
				<p>
					<a href={link} target={target}>
					
					</a>
				</p>
			</p>
		</div>
	);
}

export default Home;
