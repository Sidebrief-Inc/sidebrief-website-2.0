import { cards } from "./constant";


export default function ConnectComponent() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-primary relative isolate overflow-hidden rounded-xl px-6 py-24 text-black sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Here to help
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                We offer real time, in person support and our users love it. We
                are here to help with any questions you may have about our
                products or getting started. Choose a channel that works best
                for you.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {cards.map((card) => (
                <div
                  key={card.name}
                  className="flex gap-x-4 rounded-xl bg-white p-6 ring-1 ring-inset ring-white/10"
                >
                  <card.icon
                    className="text-secondary h-7 w-5 flex-none"
                    aria-hidden="true"
                  />
                  <div className="text-base leading-7">
                    <h3 className="text-grey font-semibold">{card.name}</h3>
                    <p className="text-grey mt-2">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
