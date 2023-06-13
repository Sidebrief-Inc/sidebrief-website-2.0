import { useState, useEffect } from "react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// const navigation = [
// 	{ name: "Product", href: "#" },
// 	{ name: "Features", href: "#" },
// 	{ name: "Marketplace", href: "#" },
// 	{ name: "Company", href: "#" },
// ];

const heroText = [
	"Register",
	"Bank",
	"Scale",
	"Build",
	"Grow",
	"Expand",
	"Protect",
];

const shapes = ["circle", "square", "triangle", "line"];

const getRandomPosition = () => {
	return {
		top: Math.random() * 100 + "vh",
		left: Math.random() * 100 + "vw",
	};
};

const getRandomColor = () => {
	return Math.random() > 0.5 ? "bg-primary" : "bg-secondary";
};

const getRandomSize = () => {
	const size = Math.floor(Math.random() * 10) + 1;
	return `h-${size} w-${size}`;
};

export default function HomeHeaderComponent() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentWordIndex(
				(currentWordIndex) => (currentWordIndex + 1) % heroText.length
			);
		}, 5000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="mb-0! relative h-auto bg-white">
			{/* Random background shapes */}
			{shapes.map((shape, index) => (
				<div
					key={index}
					className={`absolute ${getRandomColor()} ${getRandomSize()} ${
						shape === "circle" ? "rounded-full" : ""
					}`}
					style={getRandomPosition()}
				/>
			))}
			<div className="relative isolate mt-2 lg:px-2">
				<div className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"></div>
				<div className="lg:py-38 mx-auto max-w-2xl py-24 sm:py-14">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							Announcing that we are backed by Techstars.{" "}
							<a
								href="https://www.techstars.com/newsroom/meet-the-cohort-for-the-inaugural-arm-labs-techstars-accelerator-program"
								className="text-secondary font-semibold"
							>
								<span
									className="absolute inset-0"
									aria-hidden="true"
								/>
								Read more <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							<span
								className="relative inline-block"
								aria-hidden="true"
							>
								<span className="absolute inset-0 -skew-x-12 transform" />
								<span className="relative">
									{heroText[currentWordIndex]}
								</span>
							</span>{" "}
							your business
						</h1>
						<p className="mt-6 p-4 text-lg leading-8 text-gray-600">
							The fastest way for anyone to register and manage a
							business from anywhere. Start your business in half
							the time and fees. No paperwork.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#"
								className="bg-primary hover:bg-primary-700 rounded-lg px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Get started
							</a>
							<a
								href="#"
								className="text-secondary hover:text-secondary-600 text-sm font-semibold leading-6"
							>
								Sign in <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
				<div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"></div>
			</div>
		</div>
	);
}
