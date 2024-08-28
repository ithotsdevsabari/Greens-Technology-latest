"use client";

interface PageBannerProps {
  pageTitle: string;
  BGImage: string;
}

const RefundPBanner: React.FC<PageBannerProps> = ({ pageTitle, BGImage }) => {
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
              <p className="text-white pt-2 content-max-w text-center mx-auto">At Greens Technologies, we strive to ensure customer satisfaction. This Refund Policy outlines the conditions under which refunds are provided. By enrolling in our courses, you agree to the terms of this Refund Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPBanner;
