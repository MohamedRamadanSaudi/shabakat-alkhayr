import Image from "next/image"
import { Container } from "./Container"

const faqs = [
  [
    {
      question: "What types of donations does your hub support?",
      answer:
        "Our donation hub supports various types of donations, including monetary donations, in-kind donations, and recurring donations.",
    },
    {
      question: "Can I customize donation receipts?",
      answer:
        "Yes, you can easily customize donation receipts to reflect your organization's branding and compliance requirements.",
    },
    {
      question: "How do I get started with using the donation hub?",
      answer:
        "Getting started is simple! Just sign up for an account, create your donation campaigns, and start accepting donations.",
    },
  ],
  [
    {
      question: "How secure is the donation hub?",
      answer:
        "We take security seriously. Our donation hub employs industry-standard encryption and security measures to protect your data and transactions.",
    },
    {
      question: "Can I track the impact of my donations?",
      answer:
        "Absolutely! Our donation hub provides comprehensive reporting tools so you can track the impact of your donations and measure your progress towards your fundraising goals.",
    },
    {
      question: "What support options are available?",
      answer:
        "We offer dedicated support to assist you with any questions or issues you may encounter. Reach out to our support team via email or live chat for assistance.",
    },
  ],
  [
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we prioritize the security and privacy of your personal information. Your data is encrypted and stored securely to prevent unauthorized access.",
    },
    {
      question: "How can I cancel or modify a recurring donation?",
      answer:
        "You can easily manage your recurring donations through your account settings. Simply navigate to the donation management section to make changes.",
    },
    {
      question: "What happens if I encounter technical difficulties?",
      answer:
        "If you encounter any technical difficulties while using our donation hub, please contact our technical support team for prompt assistance.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <h2 id="faq-title" className="sr-only">
        Frequently asked questions
      </h2>
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        <Image
          src={"/images/background-faqs.jpg"}
          alt=""
          width={1558}
          height={946}
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
