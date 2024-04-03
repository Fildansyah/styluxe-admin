import React from "react";
import { Sidebar } from "../../components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-[1]">
      <Sidebar />
      <div className="flex-[9]"></div>
    </div>
  );
};

export default Home;
