"use client"

import React, { useState } from "react"
import { Callout, TextField } from "@radix-ui/themes"
import { AiFillInfoCircle } from "react-icons/ai"
import { z } from "zod"
import { userRegisterSchema } from "@component/app/validationSchemas"
import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import axios, { AxiosError } from "axios"
import { ErrorMessage, Spinner } from "@component/app/_components"
import Link from "next/link"

// type LoginFormData = z.infer<typeof userLoginSchema>
type LoginFormData = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const RegisterForm = () => {
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(userRegisterSchema),
  })
  const [error, setError] = useState<string>()
  const [isSubmitting, setSubmitting] = useState(false)

  // submit
  const onSubmit = handleSubmit(async (formData) => {
    // console.log(formData)

    try {
      setSubmitting(true)

      const { data, status } = await axios.post(
        "http://127.0.0.1:3030/users/register/",
        formData
      )
      if (status === 201) {
        //? TOAST HERE
        //? Redirect to login
        router.push("/auth/login")
        router.refresh()
      }

      setSubmitting(false)
    } catch (error) {
      setSubmitting(false)
      setError("An unexpected error occurred. Please  Refresh and Try again")
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "An error occurred during the request."
        )
      }
      console.log("Failed vvvv", error)
    }
  })

  return (
    <>
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Icon>
            <AiFillInfoCircle />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={onSubmit} className="space-y-7">
        <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6"></div>
        <div>
          <label
            htmlFor={"username"}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 mt-0  text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            id="username"
            type="text"
            {...register("username")}
          />
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
        </div>
        <div>
          <label
            htmlFor={"email"}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 mt-0  text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            id="email"
            type="email"
            {...register("email")}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>

        <div>
          <label
            htmlFor={"email"}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 mt-0  text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            id="password"
            type="password"
            {...register("password")}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        <div>
          <label
            htmlFor={"email"}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 mt-0  text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
        </div>
        <div className="pt-1">
          <button
            type="submit"
            className="w-full rounded-full border border-transparent bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            // disabled={isSubmitting}
          >
            Sign up
            <span aria-hidden="true" className="ml-1">
              {isSubmitting ? <Spinner /> : <>&rarr;</>}
            </span>
          </button>
          <p className="flex justify-center ">
            Already registered
            <Link
              className="ml-2 text-blue-600 hover:underline"
              href={"/auth/register"}
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </>
  )
}

export default RegisterForm
