import React from "react";

const About = () => {
  return (
    <div className="flex flex-col h-full max-w-2xl py-12 px-3 m-auto">
      <h1 className="font-bold text-2xl mb-3"> About</h1>

      <div>
        <p className="mb-3 text-slate-800">
          This is a MERN (MongoDB, Express, React, Node.js) stack application
          with authentication. It allows users to sign up, log in, and log out,
          and provides access to protected routes only for authenticated users.
        </p>
        <p className="text-slate-800">
          The front-end of the application is built with React and uses React
          Router for client-side routing. The back-end is built with Node.js and
          Express, and uses MongoDB as the database. Authentication is
          implemented using JSON Web Tokens (JWT).
        </p>
        
      </div>
    </div>
  );
};

export default About;
