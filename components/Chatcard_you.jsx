import React from "react";

function Chatcard_you(props) {
  let { item } = props;
  return (
    <div className="flex gap-2  text-right place-content-end" key={item.id}>
      <div className=" text-xs p-2 flex  flex-col gap-4 text-left">
        <div className="bg-blue-600 p-4 rounded-md text-white flex gap-2 bg-gray-100">
          <span>{item.message}</span>
          <span>8.30 PM</span>
        </div>
      </div>
      <div className="w-16 p-2 bg-white text-center text-blue-400 border-2 border-gray-200 rounded-md border-thin text-xl">
        A
      </div>
    </div>
  );
}

export default Chatcard_you;
