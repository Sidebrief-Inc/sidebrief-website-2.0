import Image from "next/image";

export default function LogoCloud() {
  return (
    <div className="mt-0 bg-white py-24 sm:py-32">
      <div className="mb-16 flex justify-center">
        <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
          <a href="#" className="text-secondary font-semibold">
            <span className="absolute inset-0" aria-hidden="true" /> Over 4,000
            businesses trust us across Africa <span aria-hidden="true">❤</span>
          </a>
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://res.cloudinary.com/soss/image/upload/v1631100661/Sidebrief%20Assets/logo-arifu_wcjwkv.png"
              alt="Arifu"
              width={128}
              height={38}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://res.cloudinary.com/soss/image/upload/v1631100661/Sidebrief%20Assets/logo-54gene_bseu02.png"
              alt="54gene"
              width={128}
              height={38}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://res.cloudinary.com/soss/image/upload/v1631100661/Sidebrief%20Assets/logo-edubridge_lyhr9z.png"
              alt="Edubridge"
              width={128}
              height={38}
            />
          </div>
          <div className="bg-gray-400/5 p-8 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://res.cloudinary.com/soss/image/upload/v1631100662/Sidebrief%20Assets/logo-seamlesshr_fuh8ye.png"
              alt="SeamlessHR"
              width={128}
              height={38}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://res.cloudinary.com/soss/image/upload/v1631100662/Sidebrief%20Assets/logo-payqin_lg4zwc.png"
              alt="PayQin"
              width={128}
              height={38}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://res.cloudinary.com/soss/image/upload/v1631100662/Sidebrief%20Assets/logo-spleet_nvggfx.png"
              alt="Spleet"
              width={128}
              height={38}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
