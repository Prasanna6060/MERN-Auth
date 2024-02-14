import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div className="flex flex-col max-w-2xl py-12 p-12 m-auto">
      <h1 className="text-[30px] font-semibold m-auto border-b-3 mb-6">
        Sign In
      </h1>
      <div>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="email"
            className="bg-[#F1F4F8] rounded-lg p-3"
          />
          <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
            placeholder="password"
            className="bg-[#F1F4F8] rounded-lg p-3"
          />
        </form>
      </div>
      <button 
        className="uppercase bg-slate-700 text-white rounded-lg p-3 mt-4 text-center 
                   cursor-pointer hover:bg-slate-600"
      >
        Sign in
      </button>
      <p className="gap-2 flex my-6">
        Dont have an account?
        <Link className="text-blue-500" to="/sign-up ">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Signin;
