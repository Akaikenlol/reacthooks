"use client";

import { Button } from "../ui/button";
import { ChangeEvent, useEffect, useState, useCallback } from "react";
import { name } from "@/lib/data";

const Exeusecallback = () => {
	const [users, setUsers] = useState(name);
	const [activeSearch, setActiveSearch] = useState<string[]>([]);

	const handleShuffle = () => {
		console.log("Shuffle Render");
		const randomUsers = [...name].sort(() => 0.5 - Math.random());
		setUsers(randomUsers.slice(0, 17));
	};

	const handleSearch = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			console.log("Search Render");
			console.log("User", name[0]);
			const lowerCaseSearch = e.target.value.toLowerCase();

			if (lowerCaseSearch == "") {
				setActiveSearch([]);
				return false;
			}
			setActiveSearch(
				name.filter((n) => n.includes(lowerCaseSearch)).slice(0, 10)
			);
		},
		[name]
	);
	// console.log("Both S Render");
	return (
		<div className="flex justify-center items-center flex-col gap-5">
			<h1 className="text-3xl mt-10">Exe Use callback</h1>
			<div className="bg-orange-200 w-auto text-neutral-400 rounded-md">
				<input
					type="text"
					className="bg-transparent outline-none rounded-md p-2"
					placeholder="Input Your Search"
					onChange={(e) => handleSearch(e)}
				/>
			</div>
			<div className="flex justify-center items-center gap-10">
				<Button
					className="shadow-xl hover:bg-teal-500 hover:text-white rounded-xl ease-in-out duration-500"
					onClick={handleShuffle}
				>
					Shuffle
				</Button>
				<Button
					className="shadow-xl hover:bg-sky-500 hover:text-white rounded-xl ease-in-out duration-500"
					onClick={() => {}}
				>
					Search
				</Button>
			</div>
			<div className="flex gap-10 justify-center">
				<ul>
					<div className="text-lg font-bold text-teal-500">Shuffle Users</div>
					{users.map((user) => (
						<div className="">
							<li key={user}>{user}</li>
						</div>
					))}
				</ul>

				{activeSearch.length > 0 && (
					<ul>
						<div className="text-lg font-bold text-sky-500">Search Users</div>
						<li>
							{activeSearch.map((s) => (
								<p>{s}</p>
							))}
						</li>
					</ul>
				)}
			</div>
		</div>
	);
};

export default Exeusecallback;
