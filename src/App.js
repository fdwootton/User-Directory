import React from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";


const App = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <EmployeeTable />
    </>
  );
};

export default App;