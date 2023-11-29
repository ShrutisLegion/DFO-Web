import React from "react";
import Nav from "./components/Nav";
import { Link } from "react-router-dom";
const tehsil = [
  "सोरांव",
  "फूलपुर",
  "हंडिया",
  "बारा",
  "करछना",
  "मेजा",
  "कोरांव",
  "सदर",
];

const Home = () => {
  return (
    <>
      <Nav />

      <div id="tehsil" className="mx-auto w-5/6 mt-8">
        <div className="font-bold text-3xl mb-16 text-center">
          Kindly select the tehsil :
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {tehsil.map((tehsilName, index) => (
            <Link
              key={index}
              to={`/Block/${tehsilName}`}
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {tehsilName}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
