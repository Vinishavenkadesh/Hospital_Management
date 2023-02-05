import { useState } from "react";

function App() {
  return (
    <div className=" bg-[#152238] h-[100vh] w-[100vw]">
      <div className="bg-white h-[60px] w-[100vw] border border-slate-300 ">
        <button className="bg-[#152238] px-[15px] py-[8px] font-bold rounded-3xl mt-[9px] ml-[210px] text-white" onClick={}>+ Add Patient</button>
      </div>
      <div>
        <div className="bg-white h-[450px] w-[200px] mt-3 border border-slate-300 "></div>
        <div>
          <table className="w-[1150px] absolute top-[72px] left-[210px] text-left bg-white">
            <thead>
              <tr className="text-[#152238]">
                <th className="border border-slate-300 p-[10px]">ID</th>
                <th className="border border-slate-300 p-[10px]">Patient Name</th>
                <th className="border border-slate-300 p-[10px]">Age</th>
                <th className="border border-slate-300 p-[10px]">Disease</th>
                <th className="border border-slate-300 p-[10px]">Temperature</th>
                <th className="border border-slate-300 p-[10px]">Blood Pressure</th>
                <th className="border border-slate-300 p-[10px]">Date</th>
                <th className="border border-slate-300 p-[10px]">Treatment</th>
                <th className="border border-slate-300 p-[10px]">Gender</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

function newPage(){
  return(
    nbjhb
  )
}

export default App;
