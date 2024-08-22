import React from "react";
import Image from "next/image";
import WhatsApp from "../../../public/images/whatsapp-chat.png";

const WhatsappConfiguration = () => {

  const whatsappLink =
    "https://api.whatsapp.com/send?phone=61423737907&text=Hello! I am interested in learning more about the IT training programs offered by Greens Technology. Could you please provide more details on the courses available, schedules, and fees? Thank you!";

  return (
    <>
      <div className="chatIcon shake">
        <a href={whatsappLink} target="_blank">
          <div className="w_i_img" data-type="whatsapp">
            <Image src={WhatsApp} alt="whatsapp configurations"/>
          </div>
        </a>
      </div>
    </>
  );
};

export default WhatsappConfiguration;
