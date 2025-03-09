import React from 'react';

export default function ReadingTime({readingTime}) {
  return (
    <>
       <div className='w-[411px] h-[80px] border rounded-[8px] border-[#6047EC] flex justify-center items-center mb-[24px]' style={{background: "rgba(96, 71, 236, 0.10)"}}>
            <h1 className='text-[24px] text-[rgb(96,71,236)] font-bold'>Spent time on read : {readingTime} min</h1>
        </div>
    </>
  );
}
