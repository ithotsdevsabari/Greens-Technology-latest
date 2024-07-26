"use client"
import React from "react";

const ContactMap = ()=>{
    return(
        <div>
                 <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29724970.502042092!2d111.87057668610063!3d-24.57067646236523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1715696249197!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: '0' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
        </div>
    )
}

export default ContactMap;