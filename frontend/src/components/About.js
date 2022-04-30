import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "Ameer Hamza",
    name: "hamza@gmail.com",
    phone: "03332163313",
    work: "MERN Developer",
    id: "3452345234",
  });

  const callAboutPage = async () => {
    try {
      const res = await fetch("http://localhost:5000/about", {
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
      navigate("/login");
      console.log(error);
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-8 box-shadow">
            <div className="row d-flex justify-content-center">
              <div className="col-10 pt-4">
                <div className="row">
                  <div className="col-4">
                    <img
                      src="https://via.placeholder.com/150x190"
                      alt="profile-img"
                    />

                    <div className="mt-2">
                      <p>Youtuber</p>
                      <p>Developer</p>
                      <p>Cricketer</p>
                      <p>Gamer</p>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                  <div className="col-8">
                    <span className="d-flex justify-content-between">
                      <h5 style={{ textTransform: "uppercase" }}>
                        {formData.name}
                      </h5>
                      <button className="btn btn-primary">Edit Profile</button>
                    </span>
                    <p>{formData.work}</p>
                    <p>Rankings: 1/10</p>

                    <div>
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            About
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Timeline
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <div className="row mt-2">
                            <div className="col-6">
                              <p>User Id</p>
                              <p>Name</p>
                              <p>Email</p>
                              <p>Phone</p>
                              <p>Profession</p>
                            </div>
                            <div className="col-6">
                              <p>{formData.id}</p>
                              <p style={{ textTransform: "capitalize" }}>
                                {formData.name}
                              </p>
                              <p>{formData.email}</p>
                              <p>{formData.phone}</p>
                              <p>{formData.work}</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <div className="row mt-2">
                            <div className="col-6">
                              <p>Experience</p>
                              <p>Hourly Rate</p>
                              <p>Total Projects</p>
                              <p>English Level</p>
                              <p>Availability</p>
                            </div>
                            <div className="col-6">
                              <p>Expert</p>
                              <p>10$/hour</p>
                              <p>20</p>
                              <p>Medium</p>
                              <p>6 months</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default About;
