import React, { useState } from "react";
import "./Login.scss";
import { IoClose } from "react-icons/io5";
 

export default function Login({ handleform }) {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [wrong, setwrong] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (userName === "HossamMohamed" && password === "hosam@0111") {
      handleform(false);
      setpassword("");
      setUserName("");
    } else {
      setwrong("password is wrong");
    }
  };
  return (
    <div className="Login">
      <div className="Login__Content">
        <div className="LoginHead">
          <p>Welocme Back !</p>
          <IoClose onClick={handleform} />
        </div>
        <form onSubmit={handlesubmit}>
          <div>
            <label>UserName</label>
            <input
              type="text"
              placeholder="Enter Your UserName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <p className="WrongMessage">{wrong}</p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
