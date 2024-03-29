import AuthLayout from "../_component/AuthLayout"
import { Input, Logo } from "@component/components/IndexCompoenent"
import { Metadata } from "next"
import Link from "next/link"

import React from "react"

import LoginForm from "../_component/LoginForm"

export const metadata: Metadata = {
  title: "DonationHub - Login",
  description:
    "Login to DonationHub and access your account to contribute to meaningful causes.",
}

function Login() {
  return (
    <AuthLayout>
      <div className="flex flex-col items-start justify-start ">
        <h2 className="mt-5 text-lg font-semibold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="mt-10 ">
        <div className="mt-6">
          <LoginForm />{" "}
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
