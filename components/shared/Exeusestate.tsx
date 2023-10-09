"use client";

import { useState } from "react";
import { Button } from "../ui/button";

const Exeusestate = () => {
	const [count, setCount] = useState(0);

	const handleAdd = () => {
		if (count < 20) {
			setCount(count + 1);
		}
	};

	const handleDecrease = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<div className="text-5xl text-center mt-10">
			<h1>Count: {count}</h1>
			<div className="flex gap-5 justify-center items-center mt-10">
				<Button
					className="shadow-xl hover:bg-black hover:text-white rounded-xl"
					onClick={handleAdd}
				>
					Increase
				</Button>
				<Button
					className="shadow-xl hover:bg-red-600 hover:text-white rounded-xl"
					onClick={handleDecrease}
				>
					Decrease
				</Button>
			</div>
		</div>
	);
};

export default Exeusestate;
