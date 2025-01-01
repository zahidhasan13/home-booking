import React, { useState } from "react";
import PageHero from "../components/PageHero";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is this website about?",
      answer:
        "This website helps you rent or buy homes easily by providing a wide range of properties to choose from.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach our support team by visiting the Contact Us page or emailing us at support@yourwebsite.com.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No, there are no hidden fees. All costs are transparently displayed during the process.",
    },
    {
      question: "Can I schedule a visit to a property?",
      answer:
        "Yes, you can schedule a visit directly from the property details page or by contacting us.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Absolutely. We prioritize your privacy and ensure that your personal information is handled securely.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <PageHero title="Faq" />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-800">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-gray-600 mt-4 mb-8">
            Find answers to commonly asked questions about our services.
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </h3>
                  <span>
                    {activeIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
