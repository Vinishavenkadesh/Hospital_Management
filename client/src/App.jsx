import { useState } from "react";
import FormPage from "./FormPage";
import Data from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [inputsOpen, setInputsOpen] = useState(false);
  return (
    <div className=" bg-[#152238] h-[100vh] w-[100vw]">
      <div className="bg-[#F5F5F5] h-[60px] w-[100vw] border border-slate-300 ">
        {inputsOpen ? <FormPage setInputsOpen={setInputsOpen} /> : <div></div>}
        <button
          className="bg-[#152238] px-8 py-3 text-sm font-medium rounded mt-[9px] ml-[210px] text-[#F5F5F5] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#152238]"
          onClick={() => setInputsOpen(true)}
        >
          + Add Patient
        </button>
      </div>
      <div>
        <div className="bg-[#F5F5F5] h-[520px] w-[200px] mt-[17px] border border-slate-300 ">
          <div className="flex">
            <div>
              <h1 className="ml-[50px] mt-[30px] font-bold text-lg text-[#07074D]">
                Filter
              </h1>
            </div>
            <div>
              <FontAwesomeIcon
                color="#07074D"
                className="ml-[10px] mt-[37px]"
                icon={faCaretDown}
              />
            </div>
          </div>
          <div className="flex ml-[50px] mt-[10px] mb-1 text-base font-semibold text-[#07074D] w-[200px]">
            <input
              type="checkbox"
              className="text-[#F5F5F5] bg-[#152238] cursor-pointer"
            />
            <label htmlFor="" className="ml-[15px]">
              <h1>All</h1>
            </label>
          </div>
          <div className="flex ml-[50px] mb-1 text-base font-medium text-[#07074D] w-[200px]">
            <input
              type="checkbox"
              className="text-[#F5F5F5] bg-[#152238] cursor-pointer"
            />
            <label htmlFor="" className="ml-[15px]">
              <h1>Today</h1>
            </label>
          </div>
          <div className="flex ml-[50px] mb-1 text-base font-medium text-[#07074D] w-[200px]">
            <input
              type="checkbox"
              className="text-[#F5F5F5] bg-[#152238] cursor-pointer"
            />
            <label htmlFor="" className="ml-[15px]">
              <h1>Month</h1>
            </label>
          </div>
          <div className="absolute ml-[50%] mt-[330px]">
            <div className="inline-flex justify-center gap-1 ">
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 left-[0px]"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <div className="">
                <label htmlFor="PaginationPage" className="sr-only">
                  Page
                </label>

                <input
                  type="number"
                  className="h-8 w-12 rounded border border-gray-100 p-0 text-center text-xs font-medium [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  min="1"
                  value="2"
                  id="PaginationPage"
                />
              </div>

              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div>
            <table className="divide-y-2 divide-[#152238]text-sm absolute w-[1147px] top-[78px] left-[210px] text-left ">
              <thead className="bg-[#F5F5F5] text-[#152238] ">
                <tr>
                <th className="px-4 py-2 text-left font-medium">Sl.No</th>
                  <th className="px-4 py-2 text-left font-medium">ID</th>
                  <th className="px-4 py-2 text-left font-medium">
                    Patient Name
                  </th>
                  <th className="px-4 py-2 text-left font-medium">Age</th>
                  <th className="px-4 py-2 text-left font-medium">Gender</th>
                  <th className="px-4 py-2 text-left font-medium">Date</th>
                  <th className="px-4 py-2 text-left font-medium">
                    Temperature
                  </th>
                  <th className="px-4 py-2 text-left font-medium">
                    Blood Pressure
                  </th>
                  <th className="px-4 py-2 text-left font-medium">Diseases</th>
                  <th className="px-4 py-2 text-left font-medium">Treatment</th>
                  <th className="px-4 py-2 text-left font-medium"> </th>
                </tr>
              </thead>
              <Data />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
