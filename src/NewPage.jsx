import React from "react";

function NewPage() {
  return (
    <div className="absolute top-[140px] left-[370px] h-[450px] w-[750px] bg-[#E2E5DE] rounded-xl">
      <div className="flex items-center content-center">
        <div>
          <div>
            <label
              className="ml-[30px] mt-[30px] font-semibold text-[#152238]"
              htmlFor="UserName"
            >
              ID :
            </label>
            <input
              type="text"
              placeholder="Eg.210420106122"
              className="m-[15px] mt-[30px] px-[6px] ml-[100px] py-[7px] rounded-xl text-[#d0e9b0] bg-[#152238] border-[#152238]"
            />
          </div>
          <div>
            <label
              className="ml-[30px] mt-[15px] font-semibold text-[#152238]"
              htmlFor="UserName"
            >
              Patient Name :{" "}
            </label>
            <input
              type="text"
              placeholder="Eg.Vinisha V"
              className="m-[15px] mt-[10px] px-[6px] py-[7px] rounded-xl text-[#d0e9b0] bg-[#152238] border-[#152238]"
            />
          </div>
          <div>
            <label
              className="ml-[30px] mt-[15px] font-semibold text-[#152238]"
              htmlFor="UserName"
            >
              Age :
            </label>
            <input
              type="number"
              placeholder="19"
              className="m-[10px] mt-[10px] px-[6px] py-[7px] rounded-xl text-[#d0e9b0] ml-[88px] bg-[#152238] border-[#152238]"
            />
          </div>
          <div>
            <label
              className="ml-[30px] mt-[15px] font-semibold text-[#152238]"
              htmlFor="UserName"
            >
              Temperature :
            </label>
            <input
              type="text"
              placeholder="92 C"
              className="m-[15px] mt-[10px] px-[6px] py-[7px] rounded-xl text-[#d0e9b0] ml-[27px] bg-[#152238] border-[#152238]"
            />
          </div>
          <div>
            <label
              className="ml-[30px] mt-[15px] font-semibold text-[#152238]"
              htmlFor="UserName"
            >
              Disease :
            </label>
            <input
              type="text"
              placeholder="Nil"
              className="m-[15px] mt-[10px] px-[6px] py-[7px] rounded-xl text-[#d0e9b0] ml-[63px] bg-[#152238] border-[#152238]"
            />
          </div>
        </div>
        <div>
          <div>
            <label
              className="ml-[30px] mt-[30px] font-semibold text-[#152238]"
              htmlFor="UserName"
            >
              Blood Pressure :
            </label>
            <input
              type="text"
              placeholder="Eg.120/80 mmHg"
              className="m-[15px] mt-[30px] px-[6px] py-[7px] rounded-xl text-[#d0e9b0] bg-[#152238] border-[#152238]"
            />
          </div>
          <div>
            <label
              className="ml-[30px] mt-[15px] font-semibold text-[#152238]"
              htmlFor="UserName"
            >
              Date :
            </label>
            <input
              type="date"
              style={{
                color:"#d0e9b0"
              }}
              placeholder="Eg.05/02/2023"
              className="m-[10px] mt-[30px] px-[6px] py-[7px] rounded-xl text-[#d0e9b0] bg-[#152238] ml-[90px] border-[#152238]"
            />
          </div>
          <div>
            <label
              className="ml-[30px] mt-[15px] font-semibold text-[#152238]"
              htmlFor="UserName"
            >
              Treatment :
            </label>
            <input
              type="text"
              placeholder="Eg.Nil"
              className="m-[10px] mt-[30px] px-[6px] py-[7px] rounded-xl text-[#d0e9b0] bg-[#152238] ml-[50px] border-[#152238]"
            />
          </div>
          <div>
            <label
              className="ml-[30px] mt-[15px] font-semibold text-[#152238]"
              htmlFor="UserName"
            >
              Gender :
            </label>
            <select name="" id="">
              <option value="">Female</option>
              <option value="">Male</option>
              <option value="">Other</option>

            </select>
            <input
              type="text"
              placeholder="Eg.Female"
              className="m-[10px] mt-[30px] px-[6px] py-[7px] rounded-xl text-[#d0e9b0] bg-[#152238] ml-[70px] border-[#152238]"
            />
          </div>
        </div>
      </div>
      <button className="bg-[#152238] px-[40px] py-[10px] font-semibold rounded-3xl mt-[30px] ml-[445px] text-[#E2E5DE] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#152238]">
        Submit
      </button>
    </div>
  );
}

export default NewPage;
