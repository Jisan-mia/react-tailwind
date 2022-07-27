import React, { useEffect, useState } from 'react'
import InputComponent from '../InputComponent';
import CompanyCoursesToEnroll from './CompanyCoursesToEnroll'


const CompanyEnroll = () => {
  const [allAddedEmployeeEmail, setAllAddedEmployeeEmail] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([])
  const handleAddEmail = () => {
    setAllAddedEmployeeEmail([
      ...allAddedEmployeeEmail,
      ''
    ])
  }

  const handleChange = (index, value) => {
    setAllAddedEmployeeEmail([...allAddedEmployeeEmail.map((d, idx) => (idx === index ? value : d))]);
  }
  const handleDeleteEmail = (index) => {
    const newState = allAddedEmployeeEmail.filter((email, idx) => idx !== index);
    setAllAddedEmployeeEmail(newState)
  }

  const handleSubmitEmailAddresses = (e) => {
    e.preventDefault();
    if(selectedCourses.length < 1) {
      alert('Please select at least one course to submit')
    }
    console.log(allAddedEmployeeEmail)
  }



  return (
    <div className='min-h-screen w-full bg-[#E2F5FF] px-3'>
      <div className='px-4 m-auto pt-8'>
        <div className='grid gap-5 justify-items-stretch sm:grid-cols-2 grid-cols-1'>
          {/* left side */}
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg font-semibold'>Company Information</h1>
              <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-4'>
                <InputComponent label={'Institution Id'} />
                <InputComponent label={'Institution Name'} />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg font-semibold'>Add Employee Email Address</h1>
              <form onSubmit={handleSubmitEmailAddresses} className='flex flex-col gap-2'>
                <div className='flex flex-col gap-4 w-full'>
                  {allAddedEmployeeEmail?.map((employ, idx) => (
                    <div key={idx} className="flex  items-stretch gap-3 w-full" >
                      <InputComponent  
                        onKeyDown={e => {
                          if(e.key === 'Enter') {
                            e.preventDefault();
                            e.stopPropagation()
                          }}
                        } 
                        parentClasses="!pb-0 w-full" 
                        type='email' 
                        required 
                        value={allAddedEmployeeEmail[idx]} 
                        onChange={(e) => {
                          handleChange(idx, e.target.value.trim().replace(' ', ''))
                        }}
                      />
                      <button onClick={(e) => {
                        handleDeleteEmail(idx)
                      }} className='text-base max-w-max rounded-lg flex items-center justify-center font-semibold w-full px-10 active:scale-[.98] transition bg-white text-[#1F497B] border border-[#1F497B]'>
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
                <div className='flex items-center gap-4 mt-4'>
                  <button onClick={handleAddEmail} className='text-base max-w-max   h-10 rounded-lg flex items-center justify-center gap-1 font-semibold w-full px-10 active:scale-[.98] transition bg-[#1F497B] text-white'>
                    Add Email
                  </button>
                  {allAddedEmployeeEmail?.length > 0 && (
                    <button type='submit' className='text-base max-w-max   h-10 rounded-lg flex items-center justify-center gap-1 font-semibold w-full px-10 active:scale-[.98] transition bg-[#1F497B] text-white'>
                    Submit
                  </button>
                  )}
                </div>
                
              </form>
            </div>
          </div>
          {/* right side */}
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg font-semibold'>Courses</h2>
            <CompanyCoursesToEnroll selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyEnroll