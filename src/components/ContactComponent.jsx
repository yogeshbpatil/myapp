import { useState } from "react";

const ContactComponent = ({ defaultName, age }) => {
  const [name, setName] = useState(defaultName);
  console.log(name);
  console.log(defaultName);
  return (
    <>
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {/* <h2>My name is {name}</h2> */}
              <h1 className="contact_taital">
                My Name is {name} and my age is {age}
              </h1>
            </div>
          </div>
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-12">
                <div className="mail_section map_form_container">
                  <form action="">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="mail_text"
                      placeholder="Name"
                      name="Name"
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Phone Number"
                      name="Phone Number"
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Your Email"
                      name="Your Email"
                    />
                    <textarea
                      className="massage-bt"
                      placeholder="Massage"
                      rows="5"
                      id="comment"
                      name="Massage"
                    ></textarea>
                    <div className="send_bt active">
                      <a href="#">Send Now</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
