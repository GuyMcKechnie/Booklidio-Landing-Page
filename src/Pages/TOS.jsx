import React from "react";

const TOS = () => {
  return (
    <section className="section-container">
      <div className="mx-auto max-w-3xl pt-18">
        <h1>Terms of Service for Booklidio</h1>
        <h2 className="mb-4">Effective Date: 24/01/2025</h2>
        <p className="mb-8">
          These Terms of Service ("Terms") govern your use of our website and
          services for buying and selling used textbooks. By accessing or using
          our services, you agree to comply with and be bound by these Terms. If
          you do not agree to these Terms, please do not use our services.
        </p>

        <div className="mb-6">
          <h3 className="mb-4">1. Eligibility</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              Be at least 18 years old or have the consent of a legal guardian.
            </li>
            <li>
              Provide accurate and complete information when creating an account
              or making a transaction.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">2. Account Registration</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account.
            </li>
            <li>
              You agree to notify us immediately of any unauthorized use of your
              account or any other security breach.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">3. Buying and Selling Textbooks</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <strong>Buyers:</strong> By purchasing a textbook, you agree to
              pay the listed price, including any applicable taxes and shipping
              fees.
            </li>
            <li>
              <strong>Sellers:</strong> By listing a textbook for sale, you
              confirm that you own the item and have the right to sell it. You
              agree to provide accurate descriptions of the textbook's
              condition.
            </li>
            <li>
              Booklidio reserves the right to cancel any transaction if we
              suspect fraud, misrepresentation, or violation of these Terms.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">4. Pricing and Payments</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              All prices are listed in South African Rand (ZAR) unless otherwise
              stated.
            </li>
            <li>
              Payment must be made through our approved payment processors.
            </li>
            <li>
              We are not responsible for any additional fees charged by your
              bank or payment provider.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">5. Shipping and Delivery</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              Sellers are responsible for delivering the textbooks to the agreed
              upon dropoff point as soon as possible.
            </li>
            <li>
              Buyers are responsible for providing accurate shipping addresses.
              Booklidio is not liable for delays or losses caused by incorrect
              addresses or carrier issues.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">6. Returns and Refunds</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              Returns are accepted only if the textbook does not match the
              description provided by the seller.
            </li>
            <li>
              Refunds will be processed within 5 business days after the
              returned item is received and verified.
            </li>
            <li>
              Shipping costs for returns are the responsibility of the buyer
              unless otherwise agreed.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">7. Prohibited Activities</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>Use our services for any illegal or unauthorized purpose.</li>
            <li>List counterfeit, stolen, or prohibited items.</li>
            <li>Misrepresent the condition or ownership of a textbook.</li>
            <li>Interfere with the operation of our website or services.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">8. Intellectual Property</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              All content on our website, including logos, text, and images, is
              the property of Booklidio and is protected by copyright and
              trademark laws.
            </li>
            <li>
              You may not use, reproduce, or distribute any content from our
              website without our prior written consent.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">9. Limitation of Liability</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              Booklidio is not liable for any indirect, incidental, or
              consequential damages arising from your use of our services.
            </li>
            <li>
              Our total liability for any claim related to our services is
              limited to the amount you paid for the transaction in question.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">10. Indemnification</h3>
          <p className="mb-4">
            You agree to indemnify and hold Booklidio harmless from any claims,
            damages, or losses arising from your use of our services or your
            violation of these Terms.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">11. Termination</h3>
          <p className="mb-4">
            We reserve the right to suspend or terminate your account and access
            to our services at any time, with or without notice, for any reason,
            including violation of these Terms.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">12. Governing Law</h3>
          <p className="mb-4">
            These Terms are governed by the laws of South Africa. Any disputes
            arising from these Terms or your use of our services will be
            resolved in the courts of South Africa.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">13. Changes to These Terms</h3>
          <p className="mb-4">
            We may update these Terms from time to time. Any changes will be
            posted on this page with an updated effective date. Your continued
            use of our services after the changes constitutes acceptance of the
            revised Terms.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">14. Contact Us</h3>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us using
            our contact form on the{" "}
            <a href="/contact" className="underline">
              Contact Us
            </a>{" "}
            page.
          </p>
        </div>

        <div className="">
          <h3 className="mb-4">Conclusion</h3>
          <p className="">
            By using Booklidio's services, you acknowledge that you have read,
            understood, and agree to these Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TOS;
