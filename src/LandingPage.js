import React from "react";
import Nav from "./components/Nav";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <div className="font-bold text-3xl mt-10 mb-12 text-center">
        डीएफओ बॉट डेटा वेबसाइट में आपका स्वागत है। कृपया अपनी पहचान चुनें:
      </div>

      <div id="block" className="mx-auto w-5/6 mt-24">
        <div className="flex flex-wrap justify-center items-center gap-16">
          <Link
            to="/Admin"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Admin
          </Link>
          <Link
            to="/DFO-Web/Home"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Nursery Operator
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
