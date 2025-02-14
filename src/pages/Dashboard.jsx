import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import getCuetProvidedData from "../middleware/cuet-data-api";
import LoaderUi from "../components/ui/LoaderUi";

const Dashboard = () => {
  const [cuetData, setCuetData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCuetProvidedData();
      setCuetData(data);
      // console.log(data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-row ">
      <Sidebar page="dashboard" />
      <div className="w-[80%] pt-[5em] ml-[20%] relative">
        <p>content</p>
        <LoaderUi />
      </div>
    </div>
  );
};

export default Dashboard;
