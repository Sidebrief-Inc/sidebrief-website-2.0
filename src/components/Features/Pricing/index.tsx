import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { countries } from './constants'


export default function PricingComponent() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [selectedPlan, setSelectedPlan] = useState(selectedCountry.plans[0])

  const handleCountryChange = (event: { target: { value: string } }) => {
    const country: any = countries.find((c) => c.name === event.target.value)
    setSelectedCountry(country)
    setSelectedPlan(country.plans[0])
  }

  const handlePlanChange = (event: { target: { value: string } }) => {
    const plan: any = selectedCountry.plans.find(
      (p) => p.name === event.target.value,
    )
    setSelectedPlan(plan)
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple pricing, no hidden fees
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Easy pricing structure for every size of business. You can opt for a
            one-off or annual plans for compliance
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Select your plan
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Select the country you want to register in and pick your plan.
            </p>
            <div className="mt-4 flex space-x-4">
              <div className="flex-1">
                <select
                  value={selectedCountry.name}
                  onChange={handleCountryChange}
                  className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <select
                  value={selectedPlan.name}
                  onChange={handlePlanChange}
                  className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  {selectedCountry.plans.map((plan) => (
                    <option key={plan.name} value={plan.name}>
                      {plan.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="text-primary flex-none text-sm font-semibold leading-6">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {selectedPlan.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="text-primary h-6 w-5 flex-none"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mr-8 lg:mt-8 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  {selectedPlan.description}
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {selectedPlan.price}
                  </span>
                </p>
                <a
                  href="#"
                  className="bg-primary mt-10 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
