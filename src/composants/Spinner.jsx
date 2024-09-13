import { Loader } from "lucide-react";

const Spinner = () => {
	return (
		<div className="flex justify-center items-center">
			<Loader className="w-16 h-16 animate-spin" />
			<span className="ml-4 text-4xl font-semibold">Chargement...</span>
		</div>
	);
};
export default Spinner;
