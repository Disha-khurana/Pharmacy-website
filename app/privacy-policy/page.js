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
            Privacy Policy
          </h1>
          <div className="flex text-base lg:text-lg items-center">
            <FaHome className="text-[#0a9a73] text-xl me-2" />
            <Link href="/">
              <h2 className="text-gray-500">Home</h2>
            </Link>
            <MdKeyboardArrowRight className="text-xl text-gray-500" />
            <h2>Privacy Policy</h2>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-14 lg:px-24 py-14 md:py-16 lg:py-20 space-y-10 md:space-y-12">
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Privacy Policy
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            We are committed to protecting your privacy. This policy outlines
            how we collect, use, and safeguard your personal information when
            you visit our website. We may collect personal data such as your
            name, email address, and contact details when you interact with our
            services. This information is used solely for the purpose of
            providing you with the best possible experience, including
            responding to your inquiries and sending you updates or promotional
            content.
          </p>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            We employ a variety of security measures to protect your personal
            information from unauthorized access or disclosure. However, please
            be aware that no method of transmission over the internet or
            electronic storage is completely secure, and we cannot guarantee its
            absolute security.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Collect Information
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            We are committed to protecting your privacy. To enhance your
            experience and provide our services, we collect various types of
            information. This includes personal details such as your name, email
            address, and shipping information when you create an account or
            place an order. We also gather payment information securely through
            trusted third-party processors. Additionally, we collect usage data,
            such as your IP address and browsing behavior, to analyze and
            improve our website. Our use of cookies allows us to remember your
            preferences and optimize your experience. By providing this
            information, you help us tailor our services to better meet your
            needs while ensuring a seamless interaction with our platform.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Usage of Information
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            We utilize the information we collect to enhance your experience and
            improve our services. Your personal information helps us process
            orders, manage your account, and communicate important updates
            regarding your purchases. We may also use your data to personalize
            content and advertisements, ensuring that the information you
            receive is relevant to your interests. Additionally, we analyze
            usage data to identify trends and optimize our website's
            performance, helping us to better serve our customers. Rest assured,
            we prioritize your privacy and only share your information with
            trusted partners when necessary to facilitate services, such as
            payment processing and shipping.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Privacy Policy
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            We prioritize your privacy and are dedicated to protecting your
            personal information. We collect various types of data, including
            personal details like your name and email, as well as usage data
            from your interactions with our website. This information helps us
            to enhance our services, process orders, and communicate effectively
            with you. We implement strict security measures to safeguard your
            data and only share it with trusted third-party service providers
            when necessary. You have the right to access, modify, or delete your
            information at any time. For more details on how we manage your
            data, please refer to our full Privacy Policy.
          </p>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on our website with a
            revised effective date. Your continued use of our services after the
            effective date constitutes your acceptance of the updated policy.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Security Of User Data
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            Strict access controls are in place, allowing only authorized
            personnel to handle user data, complemented by regular security
            audits to identify and mitigate potential vulnerabilities:
          </p>
          <ul className="text-sm md:text-base text-gray-500 leading-[1.75rem] space-y-3">
            <li>
              1. All sensitive data, such as personal information and payment
              details, is encrypted using industry-standard protocols during
              transmission and storage to prevent unauthorized access.
            </li>
            <li>
              2. We implement strict access controls to ensure that only
              authorized personnel have access to user data. This includes
              role-based permissions and regular audits.
            </li>
            <li>
              3. We conduct regular security audits and vulnerability
              assessments to identify and address potential security risks,
              ensuring our systems remain robust against threats.
            </li>
            <li>
              4. We adhere to data minimization principles, collecting only the
              information necessary for our services, which reduces the risk of
              exposure in the event of a data breach.
            </li>
            <li>
              5. All payment transactions are processed through secure,
              PCI-compliant payment gateways, ensuring that financial
              information is handled safely.
            </li>
            <li>
              6. We provide resources and guidance to users on how to protect
              their accounts, such as using strong passwords and recognizing
              phishing attempts, to empower them in safeguarding their data.
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Copyright and Security
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            We are committed to upholding copyright laws and protecting
            intellectual property rights. All content, including text, images,
            and logos, is owned or licensed by us, and unauthorized use or
            reproduction of this material is strictly prohibited. We implement
            robust security measures to safeguard both our content and user
            data. This includes using encryption protocols for data
            transmission, implementing access controls, and conducting regular
            security audits to identify vulnerabilities. By combining strict
            copyright enforcement with strong security practices, we aim to
            foster a safe and trustworthy environment for our users and
            partners.
          </p>
        </div>
      </div>
    </div>
  );
}
