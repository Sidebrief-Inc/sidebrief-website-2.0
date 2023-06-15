import { Inter } from "next/font/google";
import { Navbar, Hero, Testimonial,Blog, RegisterCTA, Footer } from "@/components/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Testimonial/>
			<Blog/>
			<RegisterCTA />
			<Footer/>
		</>
	);
}
