import { Inter } from "next/font/google";
import { Navbar, Hero, Logos, Process, CtaConnect, Pricing } from "@/components/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Logos />
			<CtaConnect/>
			<Pricing/>

			<Process/>
		</>
	);
}
