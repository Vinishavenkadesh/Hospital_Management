import { useState } from "react";
import FormPage from "./FormPage";
import Data from "./Data";

function App() {
  const [inputsOpen, setInputsOpen] = useState(false);
  const [data,setData] = useState(Data)
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
        <div className="bg-[#F5F5F5] h-[520px] w-[200px] mt-[17px] border border-slate-300 "></div>
        <div>
          <div class="overflow-x-auto">
            <table class="divide-y-2 divide-[#152238]text-sm absolute w-[1147px] top-[78px] left-[210px] text-left ">
              <thead className="bg-[#F5F5F5] text-[#152238] ">
                <tr>
                  <th className="px-4 py-2 text-left font-medium">ID</th>
                  <th className="px-4 py-2 text-left font-medium">Patient Name</th>
                  <th className="px-4 py-2 text-left font-medium">Age</th>
                  <th className="px-4 py-2 text-left font-medium">Gender</th>
                  <th className="px-4 py-2 text-left font-medium">Date</th>
                  <th className="px-4 py-2 text-left font-medium">Temperature</th>
                  <th className="px-4 py-2 text-left font-medium">Blood Pressure</th>
                  <th className="px-4 py-2 text-left font-medium">Diseases</th>
                  <th className="px-4 py-2 text-left font-medium">Treatment</th>
                </tr>
              </thead>
              <Data/>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

