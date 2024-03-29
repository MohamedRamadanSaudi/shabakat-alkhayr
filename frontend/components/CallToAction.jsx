import Image from "next/image"
import { ButtonLink } from "./Button"
import { Container } from "./Container"

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Image
          src={"/images/background-call-to-action.jpg"}
          alt=""
          width={2347}
          height={1244}
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Join us in making a difference with DonationHub – where every
            contribution counts, and every act of kindness creates ripples of
            change. Together, lets transform compassion into action, and dreams
            into reality. Start your journey with us today and be a part of
            something truly impactful
          </p>
          <ButtonLink href="/auth/register" color="white" className="mt-10">
            Join for free
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
