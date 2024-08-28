"use client";

import React from "react";

const RefundPolicyContent: React.FC = () => {
  return (
    <>
      <div className="text-container ptb-100">
        <div className="container">
          <h4>1. Eligibility for Refunds</h4>

          <p>
          Refunds are available under the following conditions:
          </p>
          <ul className="ms-4">
            <li>
            <strong>Cancellations</strong> : You may cancel your course enrollment up to <strong>7 days</strong> before the course start date to receive a full refund, minus any applicable processing fees.
            </li>
            <li>
            <strong>Late Cancellations</strong> : Cancellations made less than 7 days before the course start date are <strong>not eligible</strong> for a refund.
            </li>
          </ul>

          <h4>2. How to Request a Refund</h4>
          <p>To request a refund:</p>
          <ul className="ms-4">
            <li>
            Contact us at <a href="mailto:admin@greenstechnologies.com.au">admin@greenstechnologies.com.au</a> with your name, course name, and reason for the refund.
            </li>
            <li>
            All refund requests must be made in writing and submitted at least 7 days before the course start date.
            </li>
          </ul>
          <p>Once your request is reviewed and approved, you will receive a confirmation email. Refunds will be processed within <strong>14 business</strong> days of approval.</p>

          <h4>3. Non-Refundable Items</h4>
          <p>The following situations do not qualify for a refund:</p>
          <ul className="ms-4">
            <li>
            <strong>No-shows</strong> : If you fail to attend the course without prior notice, you will not be eligible for a refund.
            </li>
            <li>
            <strong>Partial Attendance</strong> : If you attend part of the course but do not complete it, no partial refunds will be issued.
            </li>
          </ul>

          <h4>4. Course Cancellations by Greens Technologies</h4>
          <p>
          In the event that Greens Technologies cancels a course due to unforeseen circumstances (e.g., low enrollment or instructor unavailability):
          </p>
          <ul className="ms-4">
            <li>
            You will be given the option to reschedule for another course date.
            </li>
            <li>
            If rescheduling is not suitable, a full refund will be provided.
            </li>
          </ul>

          <h4>5. Refund Method</h4>
          <p>
          Refunds will be processed using the same payment method that was used for the original payment. If you paid via bank transfer, refunds will be made to the original bank account.
          </p>

          <h4>6. Processing Time</h4>
          <p>All refunds will be processed within <strong>14 business days</strong> after the refund request is approved.
          </p>

          <h4>7. Contact Us for Refunds</h4>
          <p>
          For refund inquiries, please contact:
          </p>
          <p>
            <strong>Email </strong>:{" "}
            <a href="mailto:admin@greenstechnologies.com.au">
            admin@greenstechnologies.com.au
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

export default RefundPolicyContent;
