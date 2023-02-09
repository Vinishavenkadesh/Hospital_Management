import React, { useState } from "react";
import axios from "axios";

function FormPage({ setInputsOpen }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [date, setDate] = useState();
  const [temperature, setTemperature] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [disease, setDisease] = useState("");
  const [treatment, setTreatment] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    let formvalue = {
      Id: id,
      Name: name,
      Age: age,
      Gender: gender,
      Date: date,
      Temperature: temperature,
      BloodPressure: bloodPressure,
      Disease: disease,
      Treatment: treatment,
    };
    console.log("form value submitted", formvalue);
    axios
      .post("http://localhost:3000/postdata", formvalue)
      .then((res) => {
        console.log(res);
        setInputsOpen(false);
      })
      .catch((err) => {
        setInputsOpen(false);
        alert("Error : Something went wrong");
      });
  }
  return (
    <div>
      <div className=" z-50 p-[20px] absolute top-16 left-72 h-[450px] w-[750px] bg-[#E2E5DE] rounded-xl">
        <div className="flex items-center w-full  p-[20px]">
          <form onSubmit={handleSubmit}>
            <div className="flex w-[700px] justify-between">
              <div className="mb-5">
                <label
                  htmlFor="ID"
                  className="mb-3 block text-base font-medium text-[#07074D] w-[190px]"
                >
                  ID :
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  onChange={(val) => {
                    setId(val.target.value);
                  }}
                  placeholder="ID"
                  className="rounded-md border border-[#e0e0e0] w-[190px]
                    bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="w-[190px] ">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-[#07074D] w-[190px] "
                  >
                    Patient Name :
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Patient Name"
                    onChange={(val) => {
                      setName(val.target.value);
                    }}
                    className="rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[10px]
                    text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] 
                    focus:shadow-md w-[190px]"
                  />
                </div>
              </div>
              <div className="w-[150px]">
                <div className="mb-5">
                  <label
                    htmlFor="guest"
                    className="mb-3 block text-base font-medium text-[#07074D] w-[150px]"
                  >
                    Temperature :
                  </label>
                  <input
                    type="text"
                    name="guest"
                    id="guest"
                    onChange={(val) => {
                      setTemperature(val.target.value);
                    }}
                    placeholder="92°C"
                    className="rounded-md border border-[#e0e0e0] w-[120px]
                     bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280] 
                     outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-[671px]">
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D] w-[100px]"
                >
                  Age :
                </label>
                <input
                  type="number"
                  name="guest"
                  id="guest"
                  placeholder="5"
                  onChange={(val) => {
                    setAge(val.target.value);
                  }}
                  min="0"
                  className="w-[100px] rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="w-[200px]">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Gender :
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    onChange={(val) => {
                      setGender(val.target.value);
                      console.log(val.target.value);
                    }}
                    className="rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[30px] text-left
                     text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md w-[200px]"
                  >
                    <option value="">Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div className="w-[200px]">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D] w-[200px]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={(val) => {
                      setDate(val.target.value);
                    }}
                    className="rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[10px] text-base 
                    font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md w-[200px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-[671px]">
              <div className="mb-5 w-[170px]">
                <label
                  htmlFor="ID"
                  className="mb-3 block text-base font-medium text-[#07074D] w-[170px]"
                >
                  Blood Pressure :
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  onChange={(val) => {
                    setBloodPressure(val.target.value);
                  }}
                  placeholder="BP"
                  className="w-[120px] rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="w-[180px]">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-[#07074D] w-[180px]"
                  >
                    Disease :
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Disease"
                    onChange={(val) => {
                      setDisease(val.target.value);
                    }}
                    className="w-[180px] rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-[200px]">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-[#07074D] w-[170px]"
                  >
                    Treatment :
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Treatment"
                    onChange={(val) => {
                      setTreatment(val.target.value);
                    }}
                    className="w-[200px] rounded-md border border-[#e0e0e0] 
                    bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280]
                     outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div>
              <input
                className="hover:shadow-form rounded-md bg-[#07074D] py-[10px] px-8
                 text-center text-base font-semibold text-white outline-none ml-[530px] mt-5"
                type="submit"
                // onClick={() => setInputsOpen(false)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
