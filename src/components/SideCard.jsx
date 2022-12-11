import React from "react";

const SideCard = ({ heading, items }) => {
  return (
    <div className="sidecard flex flex-col bg-white rounded-md w-56">
      <h2 className="bg-gray-300 font-bold text-lg text-center">{heading}</h2>
      <ul>
        {items.map((item,index) => (
          <li key={index} className=" py-1 px-1 hover:bg-[#00a69a] hover:rounded-md hover:text-white cursor-pointer"> {item} </li>
        ))}
      </ul>
    </div>
  );
};

export default SideCard;
