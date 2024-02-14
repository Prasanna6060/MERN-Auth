import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col h-full max-w-2xl py-12 mx-auto  justify-center">
      <h1 className="font-bold text-[30px] mb-3">Welcome to My MERN Auth App!</h1>
      <p className="text-slate-800">
        This is a full-stack web application built with the MERN (MongoDB,
        Express, React, Node.js) stack. It includes authentication features that
        allow users to sign up, log in, and log out, and provides access to
        protected routes only for authenticated users.
        </p>
        <p className="mt-3 text-slate-800"> The front-end of the
        application is built with React and uses React Router for client-side
        routing. The back-end is built with Node.js and Express, and uses
        MongoDB as the database. Authentication is implemented using JSON Web
        Tokens (JWT).
        </p>
        <p className="mt-3 text-slate-800">
         This application is intended as a starting point for
        building full-stack web applications with authentication using the MERN
        stack. Feel free to use it as a template for your own projects!
      </p>
    </div>
  );
};

export default Home;
