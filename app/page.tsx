import Navigation from "@/components/navigation/navbar";
import { navData } from "@/constants/navigationData";

export default function page() {
	return (
		<div className="min-h-screen flex flex-col items-center">
			<h1 className="text-4xl font-bold text-white my-8">Nav Test</h1>
			<div className="w-full max-w-[500px]">
				<Navigation navData={navData} />
			</div>
		</div>
	);
}
