import {
	ChatBubbleOvalLeftEllipsisIcon,
	HeartIcon,
	PencilSquareIcon,
	TrashIcon,
	CheckIcon,
} from "@heroicons/react/24/outline";

export type countryType = {
	name: string;
	companyRegistration: string;
	companyBankAccount: string;
	companyTaxRegistration: string;
};

export const countries: countryType[] = [
	{
		name: "Nigeria",
		companyRegistration: "3 days",
		companyBankAccount: "3 days",
		companyTaxRegistration: "3 days",
	},
	{
		name: "United States",
		companyRegistration: "3 days",
		companyBankAccount: "5 days",
		companyTaxRegistration: "6 days",
	},
	{
		name: "United Kingdom",
		companyRegistration: "3 days",
		companyBankAccount: "2 days",
		companyTaxRegistration: "3 days",
	},
];

export const steps = [
	{
		name: "Create account",
		description: "Create an account on our app",
		href: "#",
		status: "current",
	},
	{
		name: "Select country",
		description: "Pick the country you want to do business",
		href: "#",
		status: "current",
	},
	{
		name: "Select business plan",
		description: "Pick the plan suitable for your business",
		href: "#",
		status: "current",
	},
	{
		name: "Pay and complete form",
		description: "Make payment and complete the form in 5 minutes",
		href: "#",
		status: "current",
	},
	{
		name: "Get registered",
		description: "That's it, we register your business",
		href: "#",
		status: "current",
	},
	{
		name: "Get your documents",
		description: "We send you your documents via the app",
		href: "#",
		status: "complete",
	},
];

export const features = [
	{
		name: "Start in one or many markets",
		description:
			"We get you started in one or many markets, with a simgle form. Start and scale faster.",
		icon: TrashIcon,
	},
	{
		name: "Compose in markdown",
		description:
			"Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus est.",
		icon: PencilSquareIcon,
	},
	{
		name: "Email commenting",
		description:
			"Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis. Et accusantium sapiente.",
		icon: ChatBubbleOvalLeftEllipsisIcon,
	},
	{
		name: "Customer connections",
		description:
			"Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
		icon: HeartIcon,
	},
];
