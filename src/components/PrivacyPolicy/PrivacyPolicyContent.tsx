"use client";

import React from "react";

const PrivacyPolicyContent: React.FC = () => {
  return (
    <>
      <div className="text-container ptb-100">
        <div className="container">
          <h4>1. Information We Collect</h4>

          <p>
          We collect the following types of information:
          </p>
          <ul className="ms-4">
            <li>
            <strong>Personal Information</strong> : Name, email address, phone number, postal address, and any other information you provide through our website, forms, or during inquiries.
            </li>
            <li>
            <strong>Automatically Collected Information</strong> : IP address, browser type, device information, and cookies for improving website functionality and user experience.
            </li>
          </ul>

          <h4>2. How We Collect Information</h4>
          <p>
          We collect information through:
          </p>
          <ul className="ms-4">
            <li>
            Online forms and inquiries submitted on our website.
            </li>
            <li>
            Cookies and similar tracking technologies that collect data automatically when you visit our website.
            </li>
            <li>Communication with our customer support team.</li>
          </ul>

          <h4>3. How We Use Your Information</h4>
          <p>
          We use your information to:
          </p>
          <ul className="ms-4">
            <li>
            Respond to your inquiries and provide the services you request.
            </li>
            <li>
            Personalize your experience on our website.
            </li>
            <li>Send you relevant updates and information.</li>
            <li>Analyze website traffic and improve our offerings.</li>
          </ul>

          <h4>4. Disclosure of Information</h4>
          <p>
          We may share your personal information with trusted third-party service providers who assist us in operating our website and delivering our services. These providers are bound by confidentiality agreements.
          </p>
          <p>We will never sell, trade, or disclose your personal information to external parties without your consent, except when required by law.</p>

          <h4>5. Data Security</h4>
          <p>
          We implement security measures such as encryption, secure servers, and regular audits to protect your personal information from unauthorized access, disclosure, or alteration.
          </p>

          <h4>6. Your Rights</h4>
          <p>
          You have the right to:
          </p>
          <ul className="ms-4">
            <li>
            <strong>Access</strong> the personal information we hold about you.
            </li>
            <li>
            <strong>Request corrections</strong> if your information is inaccurate.
            </li>
            <li>
            <strong>Request deletion</strong> of your personal information under certain conditions.
            </li>
          </ul>
          <p>Please contact us to exercise these rights.</p>

          <h4>7. Overseas Disclosure</h4>
          <p>
          We may disclose your personal information to overseas recipients for service delivery. These recipients are bound by similar privacy obligations to protect your data.
          </p>

          <h4>8. Cookies</h4>
          <p>
          Our website uses cookies to improve your browsing experience and for analytics purposes. You can manage your cookie preferences through your browser settings.
          </p>

          <h4>9. Changes to This Privacy Policy</h4>
          <p>
          We may update this Privacy Policy from time to time. Any significant changes will be posted on this page, and we encourage you to review the policy periodically.
          </p>

          <h4>10. Contact Us</h4>
          <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email </strong>:{" "}
            <a href="mailto:contact@greenstechnologies.com">
            contact@greenstechnologies.com
            </a>
          </p>
          <p>
            <strong>Phone </strong>: <a href="tel:08 6386 9232">08 6386 9232</a>{" "}
            | <a href="tel:0423 737 907">0423 737 907</a>
          </p>
          <p>
            <strong>Address </strong>: Unit 4/10 Tyre Avenue, Riverton, Western
            Australia 6148.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyContent;
