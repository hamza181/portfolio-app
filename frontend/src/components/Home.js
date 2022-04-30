import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../constant";

function Home() {
  const [userName, setUserName] = useState("");
  const getUser = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/about`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      const data = await res.json();
      if (data) {
        let { name } = data.user;
        setUserName(name);
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
    getUser();
  }, []);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center home-main">
        <div>
          <p className="text-center">WELCOME</p>
          <h3 className="text-center" style={{textTransform: 'uppercase'}}>{userName}</h3>
          <h1>We Are The MERN Developers</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
