import React from "react";
import PageHero from "../components/PageHero";

const Faq = () => {
  return (
    <div>
      <PageHero title="Faq" />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Frequently Asked Questions
            </h1>
            <p className="text-base lg:text-lg text-gray-600 mt-4">
              Find answers to the most common questions about renting or buying
              homes through our platform.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <button className="w-full flex justify-between items-center text-left focus:outline-none">
                <span className="text-lg font-semibold text-gray-800">
                  How do I search for homes on this platform?
                </span>
                <svg
                  className="w-5 h-5 text-gray-600 transform group-hover:rotate-180 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="mt-4 text-gray-600">
                <p>
                  Use the search bar on our homepage to filter properties by
                  location, price, property type, and status (rent or buy).
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <button className="w-full flex justify-between items-center text-left focus:outline-none">
                <span className="text-lg font-semibold text-gray-800">
                  Are the property listings verified?
                </span>
                <svg
                  className="w-5 h-5 text-gray-600 transform group-hover:rotate-180 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="mt-4 text-gray-600">
                <p>
                  Yes, all listings go through a verification process to ensure
                  accuracy and authenticity.
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <button className="w-full flex justify-between items-center text-left focus:outline-none">
                <span className="text-lg font-semibold text-gray-800">
                  What is the process for renting a home?
                </span>
                <svg
                  className="w-5 h-5 text-gray-600 transform group-hover:rotate-180 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="mt-4 text-gray-600">
                <p>
                  Once you find a property, contact the owner or agent through
                  our platform. Schedule a visit, finalize terms, and sign the
                  rental agreement securely.
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <button className="w-full flex justify-between items-center text-left focus:outline-none">
                <span className="text-lg font-semibold text-gray-800">
                  How can I contact customer support?
                </span>
                <svg
                  className="w-5 h-5 text-gray-600 transform group-hover:rotate-180 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="mt-4 text-gray-600">
                <p>
                  You can reach us via email at{" "}
                  <a
                    href="mailto:support@yourwebsite.com"
                    className="text-blue-500"
                  >
                    support@yourwebsite.com
                  </a>{" "}
                  or call our helpline available on the Contact Us page.
                </p>
              </div>
            </div>

            {/* Add More Questions as Needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
