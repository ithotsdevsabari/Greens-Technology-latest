"use client";

interface PageBannerProps {
  pageTitle: string;
  BGImage: string;
}

const BookingPBanner: React.FC<PageBannerProps> = ({ pageTitle, BGImage }) => {
  return (
    <>
      <div
        className="page-title-area"
        style={{ backgroundImage: `url(${BGImage})` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h2>{pageTitle}</h2>
              <h6 className="text-white pt-2">28/08/2024</h6>
              <p className="text-white pt-2 content-max-w text-center mx-auto">At <strong>Greens Technologies</strong>, we strive to make the booking process easy and transparent. These terms outline how bookings are processed, including payment arrangements, cancellations, and modifications. By booking any course through our website or customer support, you agree to these terms.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPBanner;
