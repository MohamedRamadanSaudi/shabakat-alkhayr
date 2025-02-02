import Image from "next/image"

import React from "react"

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
      <div className="relative z-10 flex flex-1 flex-col justify-center bg-white py-12 px-4  md:flex-none md:px-28">
        <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          {children}
        </div>
      </div>
      <div className="absolute inset-0 hidden w-full flex-1 sm:block lg:relative lg:w-0">
        <Image src={"/images/background-auth.jpg"} alt="" fill={true} />
      </div>
    </div>
  )
}

export default AuthLayout
