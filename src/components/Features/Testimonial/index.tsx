import Image from "next/image";

const featuredTestimonial = {
    body: "Sidebrief was so fast in getting my company’s EIN out. I had used another provider and waited for over 4 weeks. Sidebrief got my EIN to me in few hours.",
    author: {
      name: "Nnamdi Okoh",
      handle: "nnamdiokoh",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
      logoUrl: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1686809518/sidebrief/terminal-africa-logo_si0zkf.png",
    },
};

const testimonials = [
    [
        [
        {
            body: "Sidebrief was very fast on our Delaware franchise tax filling. This is me coming to say thanks & welldone.",
            author: {
            name: "Emmanuella Oballa",
            handle: "emmanuellaoballa",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
        {
            body: "I was really happy with my experience when setting my our Kenya entity. It was quite seamless.",
            author: {
            name: "Nnamdi Okoh",
            handle: "nnamdiokoh",
            imageUrl:
                "https://res.cloudinary.com/dutcp8qkx/image/upload/v1686809518/sidebrief/terminal-africa-logo_si0zkf.png",
            },
        },
        // More testimonials...
        ],
        [
        {
            body: "We are always super excited about their work for us. They are also very professional.",
            author: {
            name: "Omiete Charles-Davies",
            handle: "omiete",
            imageUrl:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
        ],
    ],
    [
        [
        {
            body: "Sidebrief was very fast on our Delaware franchise tax filling. This is me coming to say thanks & welldone",
            author: {
            name: "Emmanuella Oballa",
            handle: "emmanuellaoballa",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
        ],
        [
            {
                body: "Onboarding our users on Sidebrief was a very seamless approach",
                author: {
                name: "Spleet Africa",
                handle: "spleetafrica",
                imageUrl:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                },
            },
        {
            body: "Sidebrief did a good job with my Delaware Incorporation.",
            author: {
            name: "Joel Mutua",
            handle: "joelmutua",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
        ],
    ],
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}
  
export default function TestimonialsComponent() {
    return (
        <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
            <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
                <svg
                viewBox="0 0 1313 771"
                aria-hidden="true"
                className="ml-[max(50%,38rem)] w-[82.0625rem]"
                >
                <path
                    id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
                    fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
                    d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
                />
                </svg>
            </div>

            <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
                <svg
                viewBox="0 0 1313 771"
                aria-hidden="true"
                className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                >
                <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
                </svg>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                <h2 className="text-secondary tracking-secondary text-lg font-semibold leading-8">
                    What users say
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    From the thousand of users who have used our platform
                </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                    <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    <p>{`“${featuredTestimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                    <Image 
                        className="h-10 w-10 flex-none rounded-full bg-gray-50" 
                        src={featuredTestimonial.author.imageUrl} 
                        width={128}
                        height={38}
                        alt=""
                    />
                    <div className="flex-auto">
                        <div className="font-semibold">
                        {featuredTestimonial.author.name}
                        </div>
                        <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                    </div>
                    <Image
                        className="h-10 w-auto flex-none"
                        src={featuredTestimonial.author.logoUrl}
                        alt=""
                        width={128}
                        height={38}
                    />
                    </figcaption>
                </figure>
                {testimonials.map((columnGroup, columnGroupIdx) => (
                    <div
                    key={columnGroupIdx}
                    className="space-y-8 xl:contents xl:space-y-0"
                    >
                    {columnGroup.map((column, columnIdx) => (
                        <div
                        key={columnIdx}
                        className={classNames(
                            (columnGroupIdx === 0 && columnIdx === 0) ||
                            (columnGroupIdx === testimonials.length - 1 &&
                                columnIdx === columnGroup.length - 1)
                            ? "xl:row-span-2"
                            : "xl:row-start-1",
                            "space-y-8"
                        )}
                        >
                        {column.map((testimonial) => (
                            <figure
                            key={testimonial.author.handle}
                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                            >
                            <blockquote className="text-gray-900">
                                <p>{`“${testimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                                <Image
                                className="h-10 w-10 rounded-full bg-gray-50"
                                src={testimonial.author.imageUrl}
                                alt=""
                                width={128}
                                height={38}
                                />
                                <div>
                                <div className="font-semibold">
                                    {testimonial.author.name}
                                </div>
                                <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                                </div>
                            </figcaption>
                            </figure>
                        ))}
                        </div>
                    ))}
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
