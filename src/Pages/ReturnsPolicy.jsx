import React from "react";

const ReturnsPolicy = () => {
  return (
    <section className="section-container">
      <div className="mx-auto max-w-3xl pt-18">
        <h1>Returns Policy for Booklidio</h1>
        <h2 className="mb-4">Effective Date: 24/01/2025</h2>
        <p className="mb-8">
          At Booklidio, we strive to ensure your satisfaction with every
          purchase. This Returns Policy outlines the conditions under which you
          can return a textbook and request a refund. Please read this policy
          carefully before making a purchase.
        </p>

        <div className="mb-6">
          <h3 className="mb-4">1. Eligibility for Returns</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              Returns are accepted only if the textbook does not match the
              description provided by the seller.
            </li>
            <li>
              The textbook must be returned in the same condition as when it was
              received, with no damage or markings.
            </li>
            <li>
              Returns must be requested within 5 business days of receiving the
              textbook.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">2. How to Initiate a Return</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              Contact our customer support team at{" "}
              <a
                href="mailto:returns@booklidio.com"
                className="strong font-semibold"
              >
                returns@booklidio.com
              </a>{" "}
              or{" "}
              <a href="tel:+27764778343" className="strong font-semibold">
                +27 76 477 8343
              </a>{" "}
              to initiate a return.
            </li>
            <li>
              Provide your order number, a description of the issue, and any
              supporting photos if applicable.
            </li>
            <li>
              Once your return request is approved, you will receive
              instructions on how to return the textbook.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">3. Shipping for Returns</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              Buyers are responsible for the cost of return shipping unless the
              return is due to an error on Booklidio's part (e.g., incorrect or
              damaged item).
            </li>
            <li>
              We recommend using a trackable shipping method to ensure the
              textbook is received by us.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">4. Refunds</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              Refunds will be processed within 5 business days after the
              returned textbook is received and verified.
            </li>
            <li>
              Refunds will be issued to the original payment method used for the
              purchase.
            </li>
            <li>
              Shipping fees are non-refundable unless the return is due to an
              error on Booklidio's part.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">5. Non-Returnable Items</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              Textbooks that have been damaged, marked, or altered after
              delivery.
            </li>
            <li>
              Items that are returned without prior approval from our customer
              support team.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">6. Contact Us</h3>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us using
            our contact form on the{" "}
            <a href="/contact" className="underline">
              Contact
            </a>{" "}
            page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReturnsPolicy;
