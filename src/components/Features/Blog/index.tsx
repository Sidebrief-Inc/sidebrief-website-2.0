import Image from "next/image";

const posts = [
    {
      id: 1,
      title: "Taking Control of Business Success: How Swahilies Helps Tanzanian Entrepreneurs",
      href: "https://blog.sidebrief.com/swahilies/",
      description:
        "Swahilies is a payment processing system that digitizes payments in Africa and makes it easy for businesses to accept digital payments from anywhere. With their...",
      imageUrl:
        "https://res.cloudinary.com/dutcp8qkx/image/upload/v1686807118/sidebrief/swahili_os4sr3.png",
      date: "June 13, 2023",
      datetime: "2023-06-13",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      title: "How to Land a Space in Techstars Toronto Cohort: An Ultimate Guide",
      href: "https://blog.sidebrief.com/techstars-toronto-cohort/",
      description:
        "Techstars Toronto offers a 13-week mentorship-driven accelerator program that provides startups with seed funding, mentorship, and access to their vast network of investors and resources. The Techstars...",
      imageUrl:
        "https://res.cloudinary.com/dutcp8qkx/image/upload/v1686807118/sidebrief/techstars_xwxi8u.png",
      date: "June 11, 2023",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://res.cloudinary.com/dutcp8qkx/image/upload/v1686807118/sidebrief/techstars_xwxi8u.png",
      },
    },
    {
      id: 3,
      title: "Schemach: Unlocking FMCG Supply Chain Efficiency in Ethiopia and Beyond",
      href: "https://blog.sidebrief.com/shemach-connecting-fmcg-retailers-and-suppliers-ethiopia/",
      description:
        "Shemach is a B2B e-commerce platform that connects FMCG retailers to suppliers across Ethiopia. Shemach enable retailers to order their products through their eCommerce platform...",
      imageUrl:
        "https://res.cloudinary.com/dutcp8qkx/image/upload/v1686807118/sidebrief/schemach_jcfdmy.png",
      date: "June 9, 2023",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  
  export default function BlogComponent() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From our blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <Image
                    src={post.imageUrl}
                    alt=""
                    width={128}
                    height={50}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>


                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Read more <span aria-hidden="true">→</span>
              </a>
            </div>
      </div>
    );
  }
  