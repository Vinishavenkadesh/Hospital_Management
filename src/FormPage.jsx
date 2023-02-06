import React, { useState } from "react";

function FormPage({setInputsOpen}) {
  const [submitForm, setSubmitForm] = useState(true);
  return (
    <div>
      <div className=" p-[10px] absolute top-[190px] left-[370px] h-[400px] w-[750px] bg-[#E2E5DE] rounded-xl">
        <div className="flex items-center justify-center mx-auto w-full max-w-[550px] p-[20px]">
          <form method="POST">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-[190px] px-[10px] sm:w-[100px]">
                <div className="mb-5">
                  <label
                    for="ID"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    ID :
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="ID"
                    className="w-[190px] rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-[190px] px-3 sm:w-[100px] ml-[110px]">
                <div className="mb-5">
                  <label
                    for="lName"
                    className="mb-3 block text-base font-medium text-[#07074D] w-[200px]"
                  >
                    Patient Name :
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Patient Name"
                    className="w-[190px] rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-[126px] px-[10px] sm:w-[100px] ml-[115px]">
                <div className="mb-5">
                  <label
                    for="guest"
                    className="mb-3 block text-base font-medium text-[#07074D] w-[126px]"
                  >
                    Temperature :
                  </label>
                  <input
                    type="text"
                    name="guest"
                    id="guest"
                    placeholder="92°C"
                    className="w-[126px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-[100px] px-[10px] sm:w-[100px]">
                <div className="mb-5">
                  <label
                    for="guest"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Age :
                  </label>
                  <input
                    type="number"
                    name="guest"
                    id="guest"
                    placeholder="5"
                    min="0"
                    className="w-[100px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-[200px] px-3 sm:w-[160px] ml-[30px]">
                <div className="mb-5">
                  <label
                    for="lName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Gender :
                  </label>
                  <select
                    name=""
                    id=""
                    className="rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[30px] text-left text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="">Gender</option>
                    <option value="">Female</option>
                    <option value="">Male</option>
                    <option value="">Other</option>
                  </select>
                </div>
              </div>
              <div className="w-[100px] px-3 sm:w-[100px] ml-[15px]">
                <div className="mb-5">
                  <label
                    for="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="rounded-md border border-[#e0e0e0] bg-white py-[9px] px-[50px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-[120px] px-[10px] sm:w-[100px]">
                <div className="mb-5">
                  <label
                    for="ID"
                    className="mb-3 block text-base font-medium text-[#07074D] w-[200px]"
                  >
                    Blood Pressure :
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="BP"
                    className="w-[120px] rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-[180px] px-3 sm:w-[100px] ml-[43px]">
                <div className="mb-5">
                  <label
                    for="lName"
                    className="mb-3 block text-base font-medium text-[#07074D] w-[180px]"
                  >
                    Disease :
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Disease"
                    className="w-[180px] rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-[200px] px-3 sm:w-[100px] ml-[103px]">
                <div className="mb-5">
                  <label
                    for="lName"
                    className="mb-3 block text-base font-medium text-[#07074D] w-[200px]"
                  >
                    Treatment :
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Treatment"
                    className="w-[200px] rounded-md border border-[#e0e0e0] bg-white py-[10px] px-[10px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                className="hover:shadow-form rounded-md bg-[#07074D] py-[10px] px-8 text-center text-base font-semibold text-white outline-none ml-[430px]"
                onClick={() => setInputsOpen(false)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
