import { useState } from 'react';
import './App.css';
import Certificate from './components/Certificate/Certificate';
import CompanyLanding from './components/CompanyLanding/CompanyLanding';
import CompanyProfileAndEnrolledCourses from './components/CompanyProfileAndEnrolledCourses/CompanyProfileAndEnrolledCourses';
import CompanyEnroll from './components/CompnayEnroll/CompanyEnroll';
import { PDFViewer } from '@react-pdf/renderer';


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
        <h2 onClick={() => setCurrentPage(4)} className='underline cursor-pointer'>Certificate page</h2>
        
      </div>
   </header>

   {
    currentPage === 1 ? 
      <CompanyEnroll /> 
      : currentPage === 2 ? 
      <CompanyProfileAndEnrolledCourses /> 
      : currentPage === 3 ? <CompanyLanding /> : 
      (
        <PDFViewer>
          <Certificate />
        </PDFViewer>
      )
   }
  
   </>
  );
}

export default App;
