import Link from "next/link"

import clsx from "clsx"
import AuthStatus from "./AuthStatus"
import { Container, Logo, ButtonLink } from "./IndexCompoenent"
import { MobileNavigation } from "./MobileNaigation"

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 text-sm">
          <ul className="flex items-center">
            <li>
              <Link href="#">
                <>
                  <span className="sr-only">Home</span>
                  <Logo className="h-10 w-auto" />
                </>
              </Link>
            </li>
            <li className="ml-12 hidden md:block">
              <Link
                href="#features"
                className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Features
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link
                href="#testimonials"
                className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Testimonials
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link
                href="/donations"
                className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Donations
              </Link>
            </li>
            <li className="ml-auto hidden md:block">
              <Link
                href="/auth/login"
                className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Sign in
              </Link>
            </li>
            <li className="ml-auto md:ml-8">
              <ButtonLink className={""} href="/auth/register" color="blue">
                <span>
                  Get started<span className="hidden lg:inline"> today</span>
                </span>
              </ButtonLink>
            </li>
            <li className="ml-5 -mr-1 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
