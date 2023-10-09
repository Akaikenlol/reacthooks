"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const Exeuseeffect = () => {
	const [count, setCount] = useState(0);

	const handleAdd = () => {
		if (count < 60) {
			setCount(count + 1);
		}
	};

	const handleDecrease = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	useEffect(() => {
		//The code you want to run.
		console.log("The count is: ", count);

		//Optional return function
		return () => {
			console.log("Clean Up Time!");
		};
	}, [count]); //The dependency array

	return (
		<div className="text-5xl text-center mt-10">
			<h1>Count : {count}</h1>
			<div className="flex gap-5 justify-center items-center mt-10">
				<Button
					className="shadow-xl hover:bg-black hover:text-white rounded-xl ease-in-out duration-500"
					onClick={handleAdd}
				>
					Increase
				</Button>
				<Button
					className="shadow-xl hover:bg-red-600 hover:text-white rounded-xl ease-in-out duration-500"
					onClick={handleDecrease}
				>
					Decrease
				</Button>
			</div>
		</div>
	);
};

export default Exeuseeffect;
