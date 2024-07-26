import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

 const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [tostOpen,settostOpen] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_fd3mifc', 'template_p81updn', form.current, 'OfMHpKg29J7E7SGu4')
        .then(
          () => {
            settostOpen(true)
            console.log('SUCCESS!');
            form.current?.reset(); // Use optional chaining
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  useEffect(() => {
    if (tostOpen) {
      const timer = setTimeout(() => {
        settostOpen(false);
      }, 5000);

      // Clean up the timer if the component unmounts or if tostOpen changes
      return () => clearTimeout(timer);
    }
  }, [tostOpen]);

  return (

      <div className="contact-form pb-100">
        <div className="contact-title">
        <h2 className=" fs-5 text-center">
          Get in <span className="text-grad">Touch</span>
        </h2>
          <p>
          "Ready to take the first step? Fill out the form below to schedule your free demo and learn more about our courses!"
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="container">
            <div className="contact-form-box">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="form-control"
                      
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="form-control"
                      
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="form-group">
                    <input
                      type="number"
                      name="phonenumber"
                      placeholder="Phone Number"
                      className="form-control"
                     
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="form-group">
                    <input
                      type="text"
                      name="preferedcourseprogram"
                      placeholder="Preferred Course or Program"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-8 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols={30}
                      rows={6}
                      placeholder="Any specific questions or comments..."
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-8 col-sm-12">
                <button type="submit" className="button-def button-3"><span>Send Message</span></button>
                </div>
                {
                  tostOpen &&  <div className="row bg-green mt-4 p-2 w-50 rounded" style={{backgroundColor:"#0fddc8"}}>
                  <div className="col">
                  <p className='font-weight-bold' style={{color:"white" ,fontWeight:"600"}}>Your Enquiry Sent Successfully </p>
                  </div>
                  </div>
                } 
              </div>
            </div>
          </div>
        </form>
      </div>
  );
};


export default ContactUs