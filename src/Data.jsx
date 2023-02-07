import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import axios from "axios";

function Data() {
  const [dataFromExcel, setDataFromExcel] = useState([]);

  useEffect(() => {
    console.log("called in useEffect");
    // getDataFromGoogleSheets();
  }, []);

  async function getDataFromGoogleSheets() {
    await axios
      .get("http://localhost:3000/alldata")
      .then((val) => {
        setDataFromExcel(val.data);
        console.log(val.data);
      })
      .catch((err) => alert("Something went wrong"));
  }

  const data = [
    {
      Id: "2104201060000",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
    {
      Id: "2104201060001",
      PatientName: "John",
      Age: "19",
      Gender: "Male",
      Date: "6/02/2023",
      Temperature: "95°C",
      BP: "120/80 mmHg",
      Disease: "Cold",
      Treatment: "Normal",
    },
  ];

  const [users, setusers] = useState(data.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(1);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = dataFromExcel
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((val, index) => (
      <tr className="border border-slate-300">
        <th className="px-4 py-2 text-left font-thin">{index + 1}</th>
        <th className="px-4 py-2 text-left font-thin">{val.Id}</th>
        <th className="px-4 py-2 text-left font-thin">{val.PatientName}</th>
        <th className="px-4 py-2 text-left font-thin">{val.Age}</th>
        <th className="px-4 py-2 text-left font-thin">{val.Gender}</th>
        <th className="px-4 py-2 text-left font-thin">{val.Date}</th>
        <th className="px-4 py-2 text-left font-thin">{val.Temperature}</th>
        <th className="px-4 py-2 text-left font-thin">{val.BP}</th>
        <th className="px-4 py-2 text-left font-thin">{val.Disease}</th>
        <th className="px-4 py-2 text-left font-thin">{val.Treatment}</th>
        <th className="px-4 py-2 text-left font-thin">
          <div className="flex">
            <div>
              <FontAwesomeIcon
                color="#F5F5F5"
                className="mt-[5px]"
                icon={faEdit}
              />
            </div>
            <div>
              <FontAwesomeIcon
                color="#F5F5F5"
                className="ml-[15px] mt-[5px]"
                icon={faTrash}
              />
            </div>
          </div>
        </th>
      </tr>
    ));

  return <tbody className="text-[#F5F5F5]">{displayUsers}</tbody>;
}

export default Data;
