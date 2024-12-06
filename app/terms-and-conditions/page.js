import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function page() {
  return (
    <div>
      <div className="w-full h-full relative bg-gray-200 lg:bg-transparent ">
        <img src="/privacy.webp" className="hidden lg:block" />
        <div
          className="relative lg:absolute font-semibold top-0 justify-center px-5 md:px-14 lg:px-24 py-12 lg:py-0 flex flex-col h-full"
          data-aos="fade-right"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4">
            Terms and Conditions
          </h1>
          <div className="flex text-base lg:text-lg items-center">
            <FaHome className="text-[#0a9a73] text-xl me-2" />
            <Link href="/">
              <h2 className="text-gray-500">Home</h2>
            </Link>
            <MdKeyboardArrowRight className="text-xl text-gray-500" />
            <h2>Terms and Conditions</h2>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-14 lg:px-24 py-14 md:py-16 lg:py-20 space-y-10 md:space-y-12">
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Our Performance
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            We strive to provide high-quality services and products. However, we
            do not guarantee specific results or performance outcomes. The
            effectiveness of our services may vary based on individual
            circumstances, including user engagement and external factors beyond
            our control. We encourage users to engage with our services actively
            to maximize potential benefits. By using our services, you
            acknowledge and agree that results may differ for each user and that
            we are not liable for any discrepancies or unmet expectations. We do
            not guarantee specific results or performance metrics, and any
            testimonials or case studies provided on our platform are not
            indicative of future success. Users are encouraged to actively
            engage with our offerings to maximize their potential benefits.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Cookie
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            Our website uses cookies to enhance your experience and improve our
            services. A cookie is a small text file that is stored on your
            device when you visit our site. Cookies help us recognize your
            device and remember your preferences, enabling us to provide
            personalized content and improve site functionality. You can control
            and manage cookies through your browser settings. Please note that
            disabling cookies may affect your experience on our website.
          </p>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            By using our site, you consent to our use of cookies as described in
            this policy.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Payments
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            When you make a purchase on our website, you agree to provide
            accurate and complete payment information. We accept various payment
            methods, including credit/debit cards, PayPal, and other payment
            processors as indicated during checkout.
          </p>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            All transactions are processed through secure payment gateways. We
            do not store your payment information on our servers. By providing
            your payment information, you authorize us to charge the total
            amount of your order, including applicable taxes and shipping fees.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Refund Policy
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            We strive to ensure your satisfaction with our products. If you are
            not completely satisfied, you may return your unused items within 10
            days of receipt for a full refund. To be eligible, items must be in
            their original packaging and accompanied by a receipt. Please note
            that certain items, such as gift cards and downloadable products,
            are non-refundable. Return shipping costs are the responsibility of
            the customer unless the item is defective or damaged. Refunds will
            be processed to your original payment method within [insert number]
            business days after we receive the returned item. For any questions
            or to initiate a return, please contact our customer service team.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Hyperlinking to our Content
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            Integer justo neque imperdiet vitae consequat in vehicula quis dolor
            orbi lorem leo volutpat a tristique :
          </p>
          <ul className="text-sm md:text-base text-gray-500 leading-[1.75rem] space-y-3">
            <li>
              1. Items must be unused and in their original packaging to qualify
              for a refund within 5 days of receipt.
            </li>
            <li>2. Gift cards and downloadable products are non-refundable.</li>
            <li>
              3. Customers are responsible for return shipping costs unless the
              item is defective or damaged.
            </li>
            <li>
              4. Refunds will be processed to the original payment method within
              7 business days after we receive the returned item.
            </li>
            <li>
              5. To initiate a return, please contact our{" "}
              <Link href="/service" className="text-blue-800">
                Customer Service
              </Link>{" "}
              team for assistance.
            </li>
            <li>
              6. For more details, refer to our{" "}
              <Link href="/privacy-policy" className="text-blue-800">
                Shipping Policy.
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Disclaimer
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            The content provided on this website is for informational purposes only and
            should not be considered professional advice. While we strive to
            offer accurate and up-to-date information, we make no guarantees
            regarding the completeness, reliability, or suitability of the
            information. Our site may contain links to third-party websites;
            however, we do not endorse or assume responsibility for the content
            or practices of these external sites. Users are encouraged to
            conduct their own research and consult with qualified professionals
            before making decisions based on the information provided. We shall
            not be liable for any losses or damages arising from the use of this
            website or reliance on its content. Additionally, we reserve the
            right to modify this disclaimer at any time, and continued use of
            the website signifies your acceptance of any changes.
          </p>
        </div>
      </div>
    </div>
  );
}
