import React from 'react'

const Aboutcard = ({title,subtitle}) => {
  return (
    <>
      <div className="stats shadow  h-[150px] w-[250px] mt-4">
        <div className="stat">
          {/* <div className="stat-title">Total Page Views</div> */}
          <div className="stat-value text-yellow-500">{title}</div>
          <div className=" flex   w-full gap-2">
            <div className="w-6 h-1 bg-black max-w-[20%] mt-3"></div>
            <div className="max-w-[80%] text-[18px]">{subtitle}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutcard