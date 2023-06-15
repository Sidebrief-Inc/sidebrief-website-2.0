import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { countries, steps, countryType } from "./constants";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function ProcessTabComponent() {
	const [selectedCountry, setSelectedCountry] = useState<
		countryType | undefined
	>(countries[0]);

	return (
		<div className="py-24 bg-white sm:py-32">
			<div className="px-6 mx-auto max-w-7xl lg:px-8">
				<div className="max-w-3xl mx-auto mb-12 text-center">
					<div className="max-w-2xl mx-auto sm:text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Register your business faster
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Launch is faster and cheaper than alternatives,
							helping you save up to 25% in fees and 40% in
							go-to-market time.
						</p>
					</div>
				</div>
				<div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					<nav aria-label="Progress">
						<ol role="list" className="overflow-hidden">
							{steps.map((step, stepIdx) => (
								<li
									key={step.name}
									className={classNames(
										stepIdx !== steps.length - 1
											? "pb-10"
											: "",
										"relative"
									)}
								>
									{step.status === "complete" ? (
										<>
											{stepIdx !== steps.length - 1 ? (
												<div
													className="bg-secondary absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5"
													aria-hidden="true"
												/>
											) : null}
											<a
												href={step.href}
												className="relative flex items-start group"
											>
												<span className="flex items-center h-9">
													<span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-secondary group-hover:bg-indigo-800">
														<CheckIcon
															className="w-5 h-5 text-white"
															aria-hidden="true"
														/>
													</span>
												</span>
												<span className="flex flex-col min-w-0 ml-4">
													<span className="text-sm font-medium text-secondary">
														{step.name}
													</span>
													<span className="text-sm text-grey-500">
														{step.description}
													</span>
												</span>
											</a>
										</>
									) : step.status === "current" ? (
										<>
											{stepIdx !== steps.length - 1 ? (
												<div
													className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
													aria-hidden="true"
												/>
											) : null}
											<a
												href={step.href}
												className="relative flex items-start group"
												aria-current="step"
											>
												<span
													className="flex items-center h-9"
													aria-hidden="true"
												>
													<span className="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 rounded-full border-secondary">
														<span className="bg-secondary h-2.5 w-2.5 rounded-full" />
													</span>
												</span>
												<span className="flex flex-col min-w-0 ml-4">
													<span className="text-sm font-medium text-primary">
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
												className="relative flex items-start group"
											>
												<span
													className="flex items-center h-9"
													aria-hidden="true"
												>
													<span className="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
														<span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
													</span>
												</span>
												<span className="flex flex-col min-w-0 ml-4">
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
								<p className="mt-6 mb-6 text-base leading-7 text-gray-600">
									Select the country and view the timelines
									for registration
								</p>
							</label>
							<select
								id="country"
								name="country"
								className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:border-primary focus:ring-primary focus:outline-none sm:text-sm"
								value={selectedCountry?.name}
								onChange={(e) => {
									const countryName = e.target.value;
									setSelectedCountry(
										countries.find(
											(c) => c.name === countryName
										)
									);
								}}
							>
								{countries.map((country: { name: string }) => (
									<option
										key={country.name}
										value={country.name}
									>
										{country.name}
									</option>
								))}
							</select>
						</div>
						<div className="p-6 bg-gray-100 rounded-md">
							<dl className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
								<div className="px-4 py-5 overflow-hidden bg-white rounded-lg shadow sm:p-6">
									<dt className="text-sm font-medium text-gray-500 truncate">
										Business registration
									</dt>
									<dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
										{selectedCountry?.companyRegistration}
									</dd>
								</div>

								<div className="px-4 py-5 overflow-hidden bg-white rounded-lg shadow sm:p-6">
									<dt className="text-sm font-medium text-gray-500 truncate">
										Bank account
									</dt>
									<dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
										{selectedCountry?.companyBankAccount}
									</dd>
								</div>

								<div className="px-4 py-5 overflow-hidden bg-white rounded-lg shadow sm:p-6">
									<dt className="text-sm font-medium text-gray-500 truncate">
										Tax registration
									</dt>
									<dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
										{
											selectedCountry?.companyTaxRegistration
										}
									</dd>
								</div>
							</dl>
							<div className="flex mt-6">
								<a
									href="#"
									className="mt-4 font-bold text-white btn btn-primary justify-right align-right"
								>
									Register in {selectedCountry?.name}{" "}
									<span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
