import { Inter } from "next/font/google";
import { Navbar, Hero, Logos, Process, CtaConnect, Pricing, Testimonial,Blog, RegisterCTA, Footer } from "@/components/Features";

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
			<Testimonial/>
			<Blog/>
			<RegisterCTA />
			<Footer/>
		</>
	);
}
