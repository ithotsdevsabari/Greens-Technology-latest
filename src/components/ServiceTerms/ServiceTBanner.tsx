"use client";

interface PageBannerProps {
  pageTitle: string;
  BGImage: string;
}

const ServiceTBanner: React.FC<PageBannerProps> = ({ pageTitle, BGImage }) => {
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
              <p className="text-white pt-2 content-max-w text-center mx-auto">These Service Terms govern the use of the Greens Technologies website and all services offered. By using our website and services, you agree to these terms. If you do not agree to these terms, please refrain from using our services.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTBanner;
