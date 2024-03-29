"use client"
import { Callout, TextField } from "@radix-ui/themes"
import { AiFillInfoCircle } from "react-icons/ai"

import { z } from "zod"
import { userLoginSchema } from "@component/app/validationSchemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@component/components/Input"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import axios from "axios"
import { ErrorMessage, Spinner } from "@component/app/_components"
import Link from "next/link"
import { setUser } from "@component/store/slices/authSlice"
import { useAppDispatch } from "@component/store/hooks"

// type LoginFormData = z.infer<typeof userLoginSchema>
type LoginFormData = { email: string; password: string }

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(userLoginSchema),
  })
  const [error, setError] = useState<string>()
  const [isSubmitting, setSubmitting] = useState(false)

  // submit
  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData)
    try {
      setSubmitting(true)
      //   // console.log(data)
      const { data, status } = await axios.post(
        "http://127.0.0.1:3030/users/login/",
        formData
      )
      if (status === 200 && data.token) {
        // TODO we need user data  here
        dispatch(setUser({ access_token: data.token, isAuthenticated: true }))
        router.push("/")
        router.refresh()
      } else {
        setError("Invalid credentials")
      }
      setSubmitting(false)
    } catch (error) {
      setSubmitting(false)
      setError("An unexpected error occurred")
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "An error occurred during the request."
        )
      }
      console.log(error)
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
        <div>
          <label
            htmlFor={"email"}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 mt-0  sm:text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500
          "
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>
        <div>
          <label
            htmlFor={"password"}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 mt-0  text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            id="password"
            type="password"
            autoComplete="current-password"
            {...register("password")}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        <div className="pt-1">
          <button
            type="submit"
            className="w-full rounded-full border border-transparent bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={isSubmitting}
          >
            Sign in{" "}
            <span aria-hidden="true">
              {isSubmitting ? <Spinner /> : <>&rarr;</>}
            </span>
          </button>
          <p className="flex justify-center ">
            Don't have account{" "}
            <Link
              className="ml-2 text-blue-600 hover:underline"
              href={"/auth/register"}
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </>
  )
}

export default LoginForm
