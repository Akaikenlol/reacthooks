// "use client";

// import { useState, useMemo } from "react";
// import { Button } from "../ui/button";
// import { initialItems } from "@/lib/utils";

// const Exeusememo = () => {
// 	const [count, setCount] = useState(0);
// 	const [items] = useState(initialItems);

// 	const selectedItem = useMemo(
// 		() => items.find((item) => item.id === count),
// 		[count, items]
// 	);

// 	const handleAdd = () => {
// 		if (count < 60) {
// 			setCount(count + 1);
// 		}
// 	};

// 	const handleReset = () => {
// 		setCount(0);
// 	};

// 	// const handleDecrease = () => {
// 	// 	if (count > 0) {
// 	// 		setCount(count - 1);
// 	// 	}
// 	// };

// 	return (
// 		<div className="text-5xl text-center mt-10">
// 			<h1>Count: {count}</h1>
// 			<h1>Selected Items: {selectedItem?.id}</h1>
// 			<div className="flex gap-5 justify-center items-center mt-10">
// 				<Button
// 					className="shadow-xl hover:bg-black hover:text-white rounded-xl"
// 					onClick={handleAdd}
// 				>
// 					Increase
// 				</Button>
// 				<Button
// 					className="shadow-xl hover:bg-teal-400 hover:text-white rounded-xl"
// 					onClick={handleReset}
// 				>
// 					Reset
// 				</Button>
// 			</div>
// 		</div>
// 	);
// };

// export default Exeusememo;
