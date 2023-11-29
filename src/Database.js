import React from "react";
import { useParams } from "react-router-dom";
import Nav from "./components/Nav";
import Table from "./components/Table";

const Database = () => {
  const { blockName } = useParams();
  return (
    <>
      <Nav />
      <Table blockName={blockName} />
    </>
  );
};

export default Database;
