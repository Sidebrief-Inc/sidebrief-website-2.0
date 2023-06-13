import { Inter } from "next/font/google";
import { Navbar, Hero } from "@/components/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
		</>
	);
}
