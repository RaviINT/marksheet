const axios = require("axios").default;
import React, { useState } from "react";
import "../../styles/login/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    axios
      .post("http://localhost:5000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        
        if (res.status == 200) {
            window.location.href="/dashboard"
          return localStorage.setItem("loginToken", res.data.accessToken);

        }
        if(res.status==201){
            console.log(res.data.message)
        }
           
        
      });
  };
  return (
    <div id="loginBox">
      {loading ? <div>loading....</div> : null}
      <div style={{ textAlign: "center", fontSize: "20px" }}>Login</div>
      <div style={{ marginTop: "10px" }}>Email</div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <div style={{ marginTop: "10px" }}>Password</div>
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button style={{ marginTop: "10px" }} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
