import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./data.css";

function Data({ users, setusers }) {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    console.log("called in useEffect");
    getDataFromGoogleSheets();
  }, []);

  async function getDataFromGoogleSheets() {
    await axios
      .get("http://localhost:3000/alldata")
      .then((val) => {
        setusers(val.data);
        console.log(val.data);
      })
      .catch((err) => console.log(err));
  }

  async function deletePatient(id) {
    axios
      .post("http://localhost:3000/deletedata", {
        value: id,
      })
      .then((res) => {
        if(res.data !== "error"){
          setusers(res.data);
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error : Something went wrong");
      });
  }

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    console.log(selected);
    setPageNumber(selected);
  };

  return (
    <tbody className="text-[#F5F5F5] h-[78%]">
      {users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((val, index) => (
          <tr key={index} className="border border-slate-300">
            <th className="px-4 py-2 text-left font-thin">
              {index + 1 + pagesVisited}
            </th>
            <th className="px-4 py-2 text-left font-thin">{val.Id}</th>
            <th className="px-4 py-2 text-left font-thin">{val.Name}</th>
            <th className="px-4 py-2 text-left font-thin">{val.Age}</th>
            <th className="px-4 py-2 text-left font-thin">{val.Gender}</th>
            <th className="px-4 py-2 text-left font-thin">{val.Date}</th>
            <th className="px-4 py-2 text-left font-thin">{val.Temperature}</th>
            <th className="px-4 py-2 text-left font-thin">
              {val.BloodPressure}
            </th>
            <th className="px-4 py-2 text-left font-thin">{val.Disease}</th>
            <th className="px-4 py-2 text-left font-thin">{val.Treatment}</th>
            <th className="px-4 py-2 text-left font-thin">
              <div className="flex">
                <div>
                  <FontAwesomeIcon
                    color="#F5F5F5"
                    className="mt-[5px] cursor-pointer"
                    icon={faEdit}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    color="#F5F5F5"
                    className="ml-[15px] mt-[5px] cursor-pointer"
                    icon={faTrash}
                    onClick={() => deletePatient(val.Id)}
                  />
                </div>
              </div>
            </th>
          </tr>
        ))}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName="nextBttn"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </tbody>
  );
}

export default Data;
