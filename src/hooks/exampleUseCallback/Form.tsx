import React from "react";

interface Props {
  submitForm: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  total: number; // hoặc kiểu dữ liệu cụ thể của total nếu biết
}

export default React.memo(function Form({ total, submitForm }: Props) {
  console.log("FORM RENDER");
  return (
    <>
      <div>Form</div>
      <input
        type="text"
        id="name"
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
      />
      <label htmlFor="name">Name</label>
      {/* <button
        onClick={submitForm}
        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
      >
        Submit
      </button> */}
      <button
        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-400 "
        onClick={submitForm}
      >
        Button
      </button>
      <p>{total}</p>
    </>
  );
});
