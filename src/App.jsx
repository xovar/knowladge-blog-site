import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div className='max-w-[1280px] mx-auto mt-5 pb-5 border-b-1' style={{borderBottom: '2px solid rgba(17, 17, 17, 0.15)'}}>
       <Header/>
      </div>
      {/* Blog Section Added */}
      <div className='mt-[32px] flex justify-center'>
        <div className='w-[1280px] flex'>
          <div className='w-[845px'>
            <Blogs/>
          </div>
          <div>
            <Bookmarks />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
