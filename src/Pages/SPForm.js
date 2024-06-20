import { useState } from "react";

const SPForm = () => {
  const [firtName, setFirstName] = useState();
  return (
    <>
    <div className="w-full min-h-[100vh] max-h-max bg-white z-50 flex flex-col justify-start items-center py-10">
      <form className="w-[40%] min-h-[90vh] max-h-max flex flex-col justify-center items-center rounded-lg shadow-md p-10 gap-3 top-0">
        <h1 className="m-2 "> Personal Information</h1>
        <div className="w-full h-[60px] flex justify-center items-center">
          <input
            className="h-full w-[90%] p-2 rounded-xl border border-gray-500"
            type="text"
            placeholder="Enter Full Name"
            value={firtName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="w-full h-[60px] flex justify-center items-center">
          <input
            className="h-full w-[90%] p-2 rounded-xl border border-gray-500"
            type="text"
            placeholder="Enter Email"
            value={firtName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="w-full h-[60px] flex justify-center items-center">
          <input
            className="h-full w-[90%] p-2 rounded-xl border border-gray-500"
            type="text"
            placeholder="Enter Phone Number"
            value={firtName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="w-full h-[60px] flex justify-center items-center">
          <input
            className="h-full w-[90%] p-2 rounded-xl border border-gray-500"
            type="text"
            placeholder="Enter ID Number"
            value={firtName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="w-full h-[60px] flex justify-center items-center">
          <input
            className="h-full w-[90%] p-2 rounded-xl border border-gray-500"
            type="text"
            placeholder="Enter Monthly Income"
            value={firtName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <h1 className="m-2 ">Banking Details</h1>
        <div className="w-full h-[60px] flex justify-center items-center">
          <input
            className="h-full w-[90%] p-2 rounded-xl border border-gray-500"
            type="text"
            placeholder="Enter Bank Name"
            value={firtName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="w-full h-[60px] flex justify-center items-center">
          <input
            className="h-full w-[90%] p-2 rounded-xl border border-gray-500"
            type="text"
            placeholder="Enter Account Number"
            value={firtName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <h1 className="m-2 ">Saving Goals</h1>
        <div className="w-full h-[60px] flex justify-center items-center">
          <input
            className="h-full w-[90%] p-2 rounded-xl border border-gray-500"
            type="text"
            placeholder="Enter Target Amount"
            value={firtName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <h1 className="m-2 ">Saving Methods</h1>
        <div className="w-full h-[60px] flex justify-center items-center">
          <select
            className="h-full w-[90%] p-2 rounded-xl border border-gray-500"
            type="text"
            placeholder="Enter Target Amount"
            value={firtName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          >
            <option>Automatic</option>
            <option>Manual</option>
          </select>
        </div>

        <div className="w-full h-[60px] flex justify-center items-center">
          <button className="w-[90%] h-[50px] bg-slate-900 text-white rounded-xl">
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default SPForm;
