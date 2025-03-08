import React, { useEffect, useState } from 'react';
import img from "../../assets/images/1.jpg";
import person from "../../assets/images/profile.png";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
  return (
    <>
      <div className='w-[100%] border-b-[1px] mb-[40px]' style={{borderBottom: '2px solid rgba(17, 17, 17, 0.15)'}}>
        <img className='w-[845px]' src={img} alt="" />
        <div className='flex items-center justify-between'>
          <div className='mt-[34px] flex'>
            <img src={person} alt="" />
            <div className='ml-[24px]'> 
              <h1 className='font-bold text-2xl'>Mr. Raju</h1>
              <p className='font-semibold text-[16px]' style={{ color: 'rgba(17, 17, 17, 0.60)' }}>Mar 14 (4 Days ago)</p>
            </div>
          </div>
          <div className='flex items-center'>
            <p className='font-normal text-[20px]' style={{ color: 'rgba(17, 17, 17, 0.60)' }}>05 min read</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z" stroke="#111111" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className='w-[734px] mt-[18px]'>
          <h1 className='text-[40px] font-bold'>How to get your first job as a self-taught programmer</h1>
          <div className='mt-[16px]'>
            <h1 className='text-[20px] font-medium mr-[16px]' style={{ color: 'rgba(17, 17, 17, 0.60)' }}>#beginners</h1>
          </div>
        </div>
        <div className='mt-[21px] pb-[38px]'>
          <p className='text-[#6047EC] text-[20px] font-semibold underline'>Mark as read</p>
        </div>
      </div>
    </>
  );
}
