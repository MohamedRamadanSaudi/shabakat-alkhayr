import "@radix-ui/themes/styles.css"

import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@component/components/Header"
import { Footer } from "@component/components/Footer"
import StoreProvider from "@component/store/StoreProvider"
import { Theme, ThemePanel } from "@radix-ui/themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DonationHub - Home",
  description:
    "Welcome to DonationHub - Your platform for making a difference through donations.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme grayColor="slate" panelBackground="solid" scaling="95%">
          <StoreProvider>
            <Header />
            {children}
            <Footer />
          </StoreProvider>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  )
}
