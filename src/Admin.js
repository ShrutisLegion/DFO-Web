import React from "react";
import Nav from "./components/Nav";
import Table from "./components/Table";

const Admin = () => {
  return (
    <>
      <Nav />
      <Table blockName={"finale"} />
    </>
  );
};

export default Admin;
