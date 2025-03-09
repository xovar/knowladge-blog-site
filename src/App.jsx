import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import ReadingTime from './components/ReadingTime/ReadingTime'

function App() {

  const [readingTime, setReadingTime] = useState(0);

  return (
    <>
      <div className='max-w-[1280px] mx-auto mt-5 pb-5 border-b-1' style={{borderBottom: '2px solid rgba(17, 17, 17, 0.15)'}}>
       <Header/>
      </div>
      {/* Blog Section Added */}
      <div className='mt-[32px] flex justify-center'>
        <div className='w-[1280px] flex'>
          <div className='w-[845px'>
            <Blogs setReadingTime={setReadingTime}/>
          </div>
          <div className='ml-[24px]'>
            <div className='mb-[24px]'>
              <ReadingTime readingTime={readingTime}/>
            </div>
            <div className='w-[411px] rounded-[8px] pb-[30px]' style={{background: 'rgba(17, 17, 17, 0.05)'}}>
              <Bookmarks/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
