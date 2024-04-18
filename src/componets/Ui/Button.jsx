import React from "react";


const Button = ({title,icon}) => {
  return (
    <div>
      <button className="btn bg-transparent border-yellow-500  rounded-3xl mt-8  hover:border-yellow-500 hover:bg-yellow-500 hover:text-white text-white">
        {title} {icon}
      </button>
    </div>
  );
};

export default Button;
