"use client";

import React from "react";

const BookingPolicyContent: React.FC = () => {
  return (
    <>
      <div className="text-container ptb-100">
        <div className="container">
          <h4>1. How to Book</h4>

          <p>
          You can book any of our courses by:
          </p>
          <ul className="ms-4">
            <li>
            Visiting our website and selecting your desired course.
            </li>
            <li>
            Filling out the online booking form with your contact information.
            </li>
            <li>Once your booking is processed, you will receive a <strong>quote</strong> and our <strong>bank details</strong> via email for the full course fee payment.</li>
          </ul>
          <p>After the payment is received, we will send a confirmation email along with course details.</p>
          <p>If you need assistance during the booking process, please contact us at <a href="mailto:admin@greenstechnologies.com.au">admin@greenstechnologies.com.au</a> or call us at <a href="tel:08 6386 9232">08 6386 9232</a>.</p>

          <h4>2. Payment Terms</h4>
          <ul className="ms-4">
            <li>
            Full payment is required by <strong>bank transfer</strong> after receiving the quote.
            </li>
            <li>
            Once the payment has been received and confirmed, a course confirmation will be sent via email.
            </li>
            <li>Payments must be made within the timeline specified in the quote to secure your spot in the course.</li>
          </ul>

          <h4>3. Cancellations and Rescheduling</h4>
          <ul className="ms-4">
            <li>
            <strong>Cancellations</strong> : You may cancel your booking up to 7 days before the start of the course for a full refund, minus any applicable processing fees. Cancellations made less than 7 days before the start date will not be refunded.
            </li>
            <li>
            <strong>Rescheduling</strong> : You may request to reschedule your booking up to 3 days before the start date of your course. Requests for rescheduling after this period may not be accommodated.
            </li>
          </ul>

          <h4>4. No-Show Policy</h4>
          <p>
          Failure to attend the course without prior notice or communication will result in forfeiture of the booking, and no refunds or rescheduling will be offered.
          </p>

          <h4>5. Changes to Courses</h4>
          <p>
          Greens Technologies reserves the right to cancel or reschedule courses due to unforeseen circumstances, such as low enrollment or instructor availability. In such cases:
          </p>
          <ul className="ms-4">
            <li>
            You will be notified at least <strong>3</strong> days in advance.
            </li>
            <li>
            You will be offered an alternative course date or a full refund.
            </li>
          </ul>

          <h4>6. Refunds</h4>
          <p>Refunds will be processed based on our Refund Policy. If eligible, refunds will be made via bank transfer.
          </p>

          <h4>7. Special Requests</h4>
          <p>
          For any special booking requests, such as group bookings or corporate training, please contact us directly at <a href="mailto:admin@greenstechnologies.com.au.">admin@greenstechnologies.com.au.</a> 
          </p>

          <h4>8. Booking Modifications</h4>
          <p>
          If you need to modify your booking details (e.g., participant name, contact information), please notify us at least <strong>3 days</strong> prior to the course start date by emailing <a href="mailto:admin@greenstechnologies.com.au">admin@greenstechnologies.com.au</a>.
          </p>

          <h4>9. Contact Us</h4>
          <p>
          For further assistance or inquiries regarding bookings, feel free to reach out to us at:
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

export default BookingPolicyContent;
