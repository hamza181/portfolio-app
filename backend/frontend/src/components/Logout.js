import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        } else {
          navigate("/login");
          console.log("Successful Request");
          localStorage.removeItem("token");
          message.success("Logout Successful");
        }
      })
      .catch((error) => {
        console.log(error);
        message.error("Logout Failed");
      });
  }, []);
  return <div>Logout</div>;
};

export default Logout;
