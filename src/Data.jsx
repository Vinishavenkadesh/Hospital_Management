import React from "react";

function Data() {
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
  ];
  return data.map((val) => (
    <tbody className="text-[#F5F5F5]">
      <tr className="border border-slate-300">
        <th className="px-4 py-2 text-left font-medium">{val.Id}</th>
        <th className="px-4 py-2 text-left font-medium">{val.PatientName}</th>
        <th className="px-4 py-2 text-left font-medium">{val.Age}</th>
        <th className="px-4 py-2 text-left font-medium">{val.Gender}</th>
        <th className="px-4 py-2 text-left font-medium">{val.Date}</th>
        <th className="px-4 py-2 text-left font-medium">{val.Temperature}</th>
        <th className="px-4 py-2 text-left font-medium">{val.BP}</th>
        <th className="px-4 py-2 text-left font-medium">{val.Disease}</th>
        <th className="px-4 py-2 text-left font-medium">{val.Treatment}</th>
      </tr>
    </tbody>
  ))
}

export default Data;
