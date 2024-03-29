"use client"
import React, { useEffect } from "react"
import { AiFillBug } from "react-icons/ai"
import Link from "next/link"
import { usePathname } from "next/navigation"
import classnames from "classnames"
import {
  Box,
  Flex,
  Container,
  DropdownMenu,
  Avatar,
  Text,
} from "@radix-ui/themes"
import Spinner from "../app/_components/Spinner"
// import Skeleton from "../app/_components/Skeleton"
import { useAppStore } from "@component/store/hooks"
import { ButtonLink } from "./Button"

export default function AuthStatus() {
  const status = "unauthenticated"

  const store = useAppStore()
  useEffect(() => {
    console.log("store ", store)
  }, [status])
  // if (status === "loading") return <Skeleton width="3rem" />

  // if (status === "authenticated") {
  //   return (
  //     <Box>
  //       <DropdownMenu.Root>
  //         <DropdownMenu.Trigger>
  //           <Avatar
  //             src={"/profile-icon.png"}
  //             fallback=""
  //             size="2"
  //             radius="full"
  //             className="cursor-pointer"
  //             referrerPolicy="no-referrer"
  //           />
  //         </DropdownMenu.Trigger>
  //         <DropdownMenu.Content>
  //           <DropdownMenu.Label>
  //             <Text size="2">Donor</Text>
  //           </DropdownMenu.Label>
  //           <DropdownMenu.Item>
  //             <Text size="2">
  //               <Link className="nav-link" href="/">
  //                 Log out
  //               </Link>
  //             </Text>
  //           </DropdownMenu.Item>
  //         </DropdownMenu.Content>
  //       </DropdownMenu.Root>
  //     </Box>
  //   )
  // }

  return (
    <Box>
      <li className="ml-auto hidden md:block">
        <Link
          href="/auth/login"
          className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        >
          Sign in
        </Link>
      </li>
      <li className="ml-auto md:ml-8">
        <ButtonLink href="/auth/register" color="blue">
          <span>
            Get started<span className="hidden lg:inline"> today</span>
          </span>
        </ButtonLink>
      </li>
    </Box>
  )
}
