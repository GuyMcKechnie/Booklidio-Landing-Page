import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="section-container">
      <div className="mx-auto max-w-3xl pt-18">
        <h1>Privacy Policy</h1>
        <h2 className="mb-4">Effective Date: 24/01/2025</h2>
        <div className="mb-6">
          <p className="mb-4">
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our services to buy or sell
            used textbooks. By using our services, you agree to the terms of
            this Privacy Policy.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="mb-4">How We Use Your Information</h3>
          <p className="mb-4">
            We use your information for the following purposes:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              To process transactions and fulfill orders for buying or selling
              used textbooks.
            </li>
            <li>
              To communicate with you about your orders, account, or inquiries.
            </li>
            <li>To improve our website, services, and customer experience.</li>
            <li>
              To send promotional offers, newsletters, or marketing
              communications (if you have opted in).
            </li>
            <li>
              To comply with legal obligations and protect against fraudulent
              activity.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="mb-4">How We Share Your Information</h3>
          <p className="mb-4">
            We may share your information in the following circumstances:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <strong>Service Providers:</strong> With third-party vendors who
              assist us in operating our business, such as payment processors
              and shipping companies.
            </li>
            <li>
              <strong>Legal Compliance:</strong> When required by law or to
              protect our rights, property, or safety.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of our business.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
