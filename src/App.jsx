import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div className='max-w-[1280px] mx-auto mt-5 pb-5 border-b-1 border-b-[rgba(17, 17, 17, 0.15)]'>
       <Header/>
      </div>
      <Blogs/>
    </>
  )
}

export default App
