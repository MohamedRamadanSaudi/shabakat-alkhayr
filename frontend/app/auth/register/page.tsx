import Link from "next/link"
import AuthLayout from "../_component/AuthLayout"
import { Input, Logo } from "@component/components/IndexCompoenent"
import { Metadata } from "next"
import RegisterForm from "../_component/RegsiterForm"

export const metadata: Metadata = {
  title: "DonationHub - Register",
  description:
    "Join DonationHub and start making a positive impact by registering today.",
}

function Register() {
  return (
    <AuthLayout>
      <div className="flex flex-col items-start justify-start">
        <h2 className="mt-5 text-lg font-semibold text-gray-900">
          Get started for free.
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus arcu
          odio pretium, semper adipiscing vitae nulla.
        </p>
      </div>
      <div className="mt-10">
        <div className="mt-6">
          <RegisterForm />
        </div>
      </div>
    </AuthLayout>
  )
}

export default Register
