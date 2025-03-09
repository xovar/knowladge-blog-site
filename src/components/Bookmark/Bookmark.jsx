import React from 'react';

export default function Bookmark({bookmark}) {
  return (
    <>
      <div className='w-[351px] bg-white rounded-[8px] ml-[30px] mt-[16px]'>
          <h1 className='text-[18px] font-semibold p-[20px]'>{bookmark.blog_title}</h1>
      </div>
    </>
  );
}
