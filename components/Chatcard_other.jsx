import React from "react";

function Chatcard_other(props) {
  let { item } = props;
  return (
    <div className={`flex gap-2 `} key={item.id}>
      <div className="w-8 p-2 bg-white text-center text-blue-400 border-2 border-gray-200 rounded-md border-thin text-xl uppercase">
        {item.level[0]}
      </div>
      <div className=" text-xs p-2 flex flex-col gap-4 text-left">
        <div className=" text-gray-500 flex gap-2 bg-gray-100">
          <span>{item.message}</span>
          <span>8.30 PM</span>
        </div>
      </div>
    </div>
  );
}

export default Chatcard_other;
