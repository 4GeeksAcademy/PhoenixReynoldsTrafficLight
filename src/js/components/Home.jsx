import React, { useState } from "react";

//create your first component
const Home = () => {
	const [activeColor, setActiveColor] = useState(null);
	//const c = activeColor === green ? "0" + seconds : seconds;

	return (
		<div className="text-center vw-100 my-5">
			<div
				style={{ width: "100px", height: "260px" }}
				className="bg-dark rounded-3 container-fluid"
			>
				<div className="py-2">
					<div
						style={{ width: "75px", height: "75px", boxShadow: activeColor === "red" ?"0px 0px 50px 10px #FFFF33" : ""}}
						className="bg-danger rounded-circle"
						onClick={() => setActiveColor("red")}
					></div>
					<div
						style={{ width: "75px", height: "75px", boxShadow: activeColor === "yellow" ?"0px 0px 50px 10px #FFFF33" : ""}}
						className="bg-warning rounded-circle mt-2"
						onClick={() => setActiveColor("yellow")}
					></div>
					<div
						style={{ width: "75px", height: "75px", boxShadow: activeColor === "green" ?"0px 0px 50px 10px #FFFF33" : ""}}
						className="bg-success rounded-circle mt-2"
						onClick={() => setActiveColor("green")}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
