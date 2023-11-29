import React from "react";
import Nav from "./components/Nav";
import { Link, useParams } from "react-router-dom";

const blocks = {
  सोरांव: [
    "कौड्रिहार",
    "होलागढ़",
    "मऊआइमा",
    "सोरांव",
    "शृंग्वेरपुरधाम",
    "भगवतपुर",
  ],
  फूलपुर: ["बहरिया", "फूलपुर", "बहादुरपुर", "सहसों"],
  हंडिया: ["प्रतापपुर", "सैदाबाद", "धनुपुर", "हण्डिया"],
  बारा: ["जसरा", "शंकरगढ़"],
  करछना: ["चाका", "करछना", "कौधियारा"],
  मेजा: ["उरूवा", "मेजा", "माण्डा"],
  कोरांव: ["कोरांव"],
  सदर: ["सदर"],
};

const Block = () => {
  const { tehsilName } = useParams();
  const block = blocks[tehsilName] || [];
  return (
    <>
      <Nav />
      <div className="font-bold text-3xl mt-10 mb-12 text-center">
        You Selected tehsil {tehsilName}
      </div>
      <div className="font-bold text-3xl mt-5 mb-16 text-center">
        Now Select the Block :
      </div>

      <div id="block" className="mx-auto w-5/6 mt-8">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {block.map((blockName, index) => (
            <Link
              key={index}
              to={`/Database/${tehsilName}/${blockName}`}
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {blockName}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Block;
