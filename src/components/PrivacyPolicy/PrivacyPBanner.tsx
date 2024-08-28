"use client";

interface PageBannerProps {
  pageTitle: string;
  BGImage: string;
}

const PrivacyPBanner: React.FC<PageBannerProps> = ({ pageTitle, BGImage }) => {
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
              <p className="text-white pt-2 content-max-w text-center mx-auto">At <strong>Greens Technologies</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information in accordance with the <strong>Australian Privacy Principles (APPs)</strong> contained in the <strong>Privacy Act 1988</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPBanner;
