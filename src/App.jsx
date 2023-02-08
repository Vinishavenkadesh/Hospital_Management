import { useState } from "react";
import FormPage from "./FormPage";
import Data from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [inputsOpen, setInputsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <div className=" bg-[#152238] h-[100vh] w-[100vw]">
      <div className="relative sm:hidden lg:block">
        <div className=" bg-[#F5F5F5] h-[10vh] w-[100vw] border border-slate-300">
          {inputsOpen ? (
            <FormPage setInputsOpen={setInputsOpen} />
          ) : (
            <div></div>
          )}
        </div>
        <button
          className="absolute bg-[#152238] px-[1.5%] py-[1%] text-sm top-[0] mt-[1.5vh] ml-[16%] font-medium rounded text-[#F5F5F5] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#152238]"
          onClick={() => setInputsOpen(true)}
        >
          + Add Patient
        </button>
      </div>

      <div className="flex w-screen h-[90vh]">
        <div className="mt-[2vh] w-[15%] h-[88vh] bg-[#F5F5F5] sm:hidden">
          <div className="flex h-[89%] mt-[1%]">
            <div>
              <div className="flex ml-[11%] mt-[15%]">
                <div>
                  <h1 className="sm:text-base font-bold lg:text-lg text-[#07074D]">
                    Filter
                  </h1>
                </div>
                <div>
                  <FontAwesomeIcon
                    color="#07074D"
                    className="ml-[10px]"
                    icon={faCaretDown}
                  />
                </div>
              </div>
              <div className="ml-[13%] sm:text-sm md:text-base sm:font-medium md:font-semibold">
                <div className="flex mb-1 text-[#07074D] w-[20%] mt-[10px]">
                  <input
                    type="checkbox"
                    className="text-[#F5F5F5] bg-[#152238] cursor-pointer"
                  />
                  <label className="ml-[15px]">
                    <h1>All</h1>
                  </label>
                </div>
                <div className="flex mb-1 text-[#07074D] w-[200px]">
                  <input
                    type="checkbox"
                    className="text-[#F5F5F5] bg-[#152238] cursor-pointer"
                  />
                  <label className="ml-[15px]">
                    <h1>Today</h1>
                  </label>
                </div>
                <div className="flex mb-1  text-[#07074D] w-[200px]">
                  <input
                    type="checkbox"
                    className="text-[#F5F5F5] bg-[#152238] cursor-pointer"
                  />
                  <label className="ml-[15px]">
                    <h1>Month</h1>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[85vw] overflow-x-scroll">
          <table className=" mt-[2vh] m-[10px] w-[83vw] text-left">
            <thead className="bg-[#F5F5F5] text-[#152238] h-[78%]">
              <tr>
                <th className="px-4 py-2 text-left font-medium">Sl.No</th>
                <th className="px-4 py-2 text-left font-medium">ID</th>
                <th className="px-4 py-2 text-left font-medium">
                  Patient Name
                </th>
                <th className="px-4 py-2 text-left font-medium">Age</th>
                <th className="px-4 py-2 text-left font-medium">Gender</th>
                <th className="px-4 py-2 text-left font-medium">Date</th>
                <th className="px-4 py-2 text-left font-medium">Temperature</th>
                <th className="px-4 py-2 text-left font-medium">
                  Blood Pressure
                </th>
                <th className="px-4 py-2 text-left font-medium">Diseases</th>
                <th className="px-4 py-2 text-left font-medium">Treatment</th>
                <th className="px-4 py-2 text-left font-medium"> </th>
              </tr>
            </thead>
            <Data users={users} setusers={setUsers} />
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
