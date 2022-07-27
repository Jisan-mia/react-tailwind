import { useState } from 'react';
import './App.css';
import CompanyEnrolledCourses from './components/CompanyEnrolledCourses/CompanyEnrolledCourses';
import CompanyLanding from './components/CompanyLanding/CompanyLanding';
import CompanyEnroll from './components/CompnayEnroll/CompanyEnroll';


function App() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
   <>
   {/* header here */}
   <header className="h-12 bg-[#1F497B] w-full flex items-center px-7 text-white text-lg">
      <div className='flex items-center gap-4 text-white font-medium'>
        <h2 onClick={() => setCurrentPage(1)} className='underline cursor-pointer'>1st page</h2>
        <h2 onClick={() => setCurrentPage(2)} className='underline cursor-pointer'>2nd page</h2>
        <h2 onClick={() => setCurrentPage(3)} className='underline cursor-pointer'>3rd page</h2>
      </div>
   </header>

   {
    currentPage === 1 ?  <CompanyEnroll /> : currentPage === 2 ? <CompanyEnrolledCourses /> : <CompanyLanding />
   }
  
   </>
  );
}

export default App;
