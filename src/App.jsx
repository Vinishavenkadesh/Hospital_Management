import { useState } from "react";
import NewPage from "./NewPage";

function App() {
  const [inputsOpen, setInputsOpen] = useState(false);
  return (
    <div className=" bg-[#152238] h-[100vh] w-[100vw]">
      <div className="bg-[#F5F5F5] h-[60px] w-[100vw] border border-slate-300 ">
        {inputsOpen ? <NewPage /> : <div></div>}
        <button
          className="bg-[#152238] px-8 py-3 text-sm font-medium rounded-3xl mt-[9px] ml-[210px] text-[#F5F5F5] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#152238]"
          onClick={() => setInputsOpen(true)}
        >
          + Add Patient
        </button>
      </div>
      <div>
        <div className="bg-[#F5F5F5] h-[520px] w-[200px] mt-3 border border-slate-300 "></div>
        <div>
          <div class="overflow-x-auto">
            <table class="divide-y-2 divide-[#152238] text-[#152238] text-sm absolute w-[1147px] top-[72px] left-[210px] text-left bg-[#F5F5F5]">
              <thead>
                <tr>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium">ID</th>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium">Patient Name</th>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium">Age</th>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium">Temperature</th>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium">Diseases</th>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium">Blood Pressure</th>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium">Date</th>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium">Treat</th>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium">Temperature</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
