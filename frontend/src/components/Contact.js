import React, { useEffect, useState } from "react";
import { message } from "antd";
import { API_BASE_URL } from "../constant";

const initialState = {
  email: "",
  name: "",
  phone: "",
  work: "",
  id: "",
  msg: "",
};
const Contact = () => {
  const [formData, setFormData] = useState({ ...initialState });
  const callAboutPage = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/about`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      const data = await res.json();
      if (data) {
        let { email, name, phone, work, _id } = data.user;
        setFormData({ ...formData, email, name, phone, work, id: _id });
      }

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      } else {
        console.log("Successful Request");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);

  const handleChange = (e) => {
    try {
      let name = e.target.name;
      let value = e.target.value;
      setFormData({ ...formData, [name]: value });
    } catch (error) {
      console.log(error);
    }
  };

  const clickSend = async (e) => {
    try {
      e.preventDefault();

      let { email, name, phone, msg } = formData;
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, phone, message: msg }),
      });
      const data = await res.json();

      if (data) {
        setFormData({ ...formData, msg: "" });
        message.success("Message Sent Successfully");
      } else {
        message.warning("Message Not Sent");
      }
    } catch (error) {
      message.warning("Message Not Sent");
      console.log(error);
    }
  };
  return (
    <>
      <div className="">
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="col-3 px-2 py-1 box-shadow">
                <h5>Phone</h5>
                <p>{formData.phone}</p>
              </div>
              <div className="col-3 px-2 py-1 box-shadow">
                <h5>Email</h5>
                <p>{formData.email}</p>
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
                        name="name"
                        value={formData.name}
                        className="form-control"
                        autoComplete="none"
                        placeholder="Your Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group px-3">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        className="form-control"
                        autoComplete="none"
                        placeholder="Your Email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        className="form-control"
                        autoComplete="none"
                        placeholder="Your Mobile Number"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group pt-4 ">
                    <textarea
                      className="form-control"
                      rows="5"
                      name="msg"
                      placeholder="Message"
                      onChange={handleChange}
                      value={formData.msg}
                    ></textarea>
                  </div>
                  <div className="pb-4 mt-3">
                    <button className="btn btn-primary" onClick={clickSend}>
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
