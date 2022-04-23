import React from "react";

const Contact = () => {
  return (
    <>
      <div className="">
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="col-3 px-2 py-1 box-shadow">
                <h5>Phone</h5>
                <p>+1 (123) 456-7890</p>
              </div>
              <div className="col-3 px-2 py-1 box-shadow">
                <h5>Email</h5>
                <p>ameer.hamza1811@gmail.com</p>
              </div>
              <div className="col-3 px-2 py-1 box-shadow">
                <h5>Address</h5>
                <p>Road no 5, Cattle Colony</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-8 box-shadow">
              <div className="row d-flex justify-content-center">
                <div className="col-10 pt-4">
                  <h4>GET IN TOUCH</h4>
                  <div className="d-flex justify-content-between pt-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="none"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group px-3">
                      <input
                        type="email"
                        className="form-control"
                        autoComplete="none"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="none"
                        placeholder="Your Mobile Number"
                      />
                    </div>
                  </div>
                  <div className="form-group pt-4 ">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="pb-4 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
