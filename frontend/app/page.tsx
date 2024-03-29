import {
  Hero,
  CallToAction,
  Testimonials,
  PrimaryFeatures,
  SecondaryFeatures,
  Faqs,
} from "@component/components/IndexCompoenent"
export default function Home() {
  return (
    <main>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Testimonials />
      <Faqs />
    </main>
  )
}
