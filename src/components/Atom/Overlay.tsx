import React, { ReactNode } from "react";

interface OverlayProps {
  children: ReactNode;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ children, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains("overlay")) {
      onClose();
    }
  };

  return (
    <div
      style={{ zIndex: 999, backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
      className="overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded p-4 shadow-lg position-relative">
        <button
          className="btn position-absolute top-0 end-0 m-2 bg-red fs-3"
          onClick={onClose}
        >X         
        </button>
        <div className="max-w-[700px]">
        {children}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
