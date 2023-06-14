import { CheckIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { countries, steps, features } from './constants'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProcessTabComponent() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Register your business faster
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Launch is faster and cheaper than alternatives, helping you save
              up to 25% in fees and 40% in go-to-market time.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <nav aria-label="Progress">
            <ol role="list" className="overflow-hidden">
              {steps.map((step, stepIdx) => (
                <li
                  key={step.name}
                  className={classNames(
                    stepIdx !== steps.length - 1 ? 'pb-10' : '',
                    'relative',
                  )}
                >
                  {step.status === 'complete' ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="bg-secondary absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5"
                          aria-hidden="true"
                        />
                      ) : null}
                      <a
                        href={step.href}
                        className="group relative flex items-start"
                      >
                        <span className="flex h-9 items-center">
                          <span className="bg-secondary relative z-10 flex h-8 w-8 items-center justify-center rounded-full group-hover:bg-indigo-800">
                            <CheckIcon
                              className="h-5 w-5 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-secondary text-sm font-medium">
                            {step.name}
                          </span>
                          <span className="text-grey-500 text-sm">
                            {step.description}
                          </span>
                        </span>
                      </a>
                    </>
                  ) : step.status === 'current' ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                          aria-hidden="true"
                        />
                      ) : null}
                      <a
                        href={step.href}
                        className="group relative flex items-start"
                        aria-current="step"
                      >
                        <span
                          className="flex h-9 items-center"
                          aria-hidden="true"
                        >
                          <span className="border-secondary relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white">
                            <span className="bg-secondary h-2.5 w-2.5 rounded-full" />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-primary text-sm font-medium">
                            {step.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {step.description}
                          </span>
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                          aria-hidden="true"
                        />
                      ) : null}
                      <a
                        href={step.href}
                        className="group relative flex items-start"
                      >
                        <span
                          className="flex h-9 items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                            <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-medium text-gray-500">
                            {step.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {step.description}
                          </span>
                        </span>
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="col-span-2">
            <div className="mb-6">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  See our timelines
                </h3>
                <p className="mb-6 mt-6 text-base leading-7 text-gray-600">
                  Select the country and view the timelines for registration
                </p>
              </label>
              <select
                id="country"
                name="country"
                className="focus:border-primary focus:ring-primary mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none sm:text-sm"
                value={selectedCountry.name}
                onChange={(e) => {
                  const countryName: string = e.target.value
                  setSelectedCountry(
                    countries.find(
                      (c: { name: string }) => c.name === countryName,
                    ),
                  )
                }}
              >
                {countries.map((country: any) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="rounded-md bg-gray-100 p-6">
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                  <dt className="truncate text-sm font-medium text-gray-500">
                    Business registration
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                    {selectedCountry.companyRegistration}
                  </dd>
                </div>

                <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                  <dt className="truncate text-sm font-medium text-gray-500">
                    Bank account
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                    {selectedCountry.companyBankAccount}
                  </dd>
                </div>

                <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                  <dt className="truncate text-sm font-medium text-gray-500">
                    Tax registration
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                    {selectedCountry.companyTaxRegistration}
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex">
                <a
                  href="#"
                  className="btn btn-primary justify-right align-right mt-4 font-bold text-white"
                >
                  Register in {selectedCountry.name}{' '}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
