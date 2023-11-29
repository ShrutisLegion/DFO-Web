import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const Table = ({ blockName }) => {
  const [fetchError, setFetchError] = useState(null);
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("finale").select();

        if (error) {
          setFetchError("Could not fetch data");
          setEntries(null);
          console.error(error);
        }

        if (data) {
          if (blockName !== "finale") {
            const filteredEntries = data.filter(
              (entry) => entry.block === blockName
            );
            const sortedEntries = filteredEntries.sort((a, b) => b.id - a.id);
            setEntries(sortedEntries);
          } else {
            const sortedEntries = data.sort((a, b) => b.id - a.id);
            setEntries(sortedEntries);
            setFetchError(null);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setFetchError("An internal server error occurred");
        setEntries(null);
      }
    };

    fetchData();
  }, [blockName]);

  return (
    <>
      {fetchError ? (
        <div className="mt-40 font-bold text-4xl text-red-500 text-center">
          Some Internal Server error occurred.Please try again !
        </div>
      ) : entries && entries.length > 0 ? (
        <>
          <div className="font-semibold text-3xl mt-10 mb-12 text-center">
            Below are the tree requests for{" "}
            {blockName === "finale"
              ? "all the blocks of Prayagraj"
              : blockName + "block:"}
          </div>

          <div className="mx-auto w-5/6 mt-8">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Request No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Mobile No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tehsil
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Block
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tree Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tree
                    </th>
                    <th scope="col" className="px-6 py-3">
                      No. Of trees
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {entries &&
                    entries.map((entry) => (
                      <tr
                        key={entry.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {entry.response_no}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {entry.firstname}
                        </td>
                        <td className="px-6 py-4">{entry.p_n0}</td>
                        <td className="px-6 py-4">{entry.tehsil}</td>
                        <td className="px-6 py-4">{entry.block}</td>
                        <td className="px-6 py-4">{entry.tree_type}</td>
                        <td className="px-6 py-4">{entry.tree}</td>
                        <td className="px-6 py-4">{entry.tree_no}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="font-bold mt-36 text-3xl text-gray-800 text-center">
          {blockName === "finale"
            ? "Prayagraj district currently has no requests."
            : blockName + "block has no requests yet."}
        </div>
      )}
    </>
  );
};

export default Table;
