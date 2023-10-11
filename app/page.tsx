import Exeusecallback from "@/components/shared/Exeusecallback";
import Exeuseeffect from "@/components/shared/Exeuseeffect";
// import Exeusememo from "@/components/shared/Exeusememo";
import Exeusestate from "@/components/shared/Exeusestate";
import Image from "next/image";

export default function Home() {
	return (
		<section>
			<div className="text-5xl text-center mt-10">Hello</div>
			{/* <Exeusestate /> */}
			{/* <Exeuseeffect /> */}
			{/* <Exeusememo /> */}
			<Exeusecallback />
		</section>
	);
}
