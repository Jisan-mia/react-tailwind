import React, { useState } from 'react'
import InputComponent from '../InputComponent'

const CompanyProfileAndEnrolledCourses = () => {
  // not editable info
  const companyId = '#234234';
  const companyEmail = 'example@gmail.com'

  // editable info
  const [companyInfo, setCompanyInfo] = useState({
    company_name: 'My company Name',
    company_phone: '01656484845',
  })

  const handleChange = (e) => {
    setCompanyInfo({...companyInfo, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <div className='w-full bg-[#E2F5FF] h-screen'>
      <div className='max-w-4xl  mx-auto p-4 h-full'>
        <div className='grid gap-4'>
          {/* edit profile */}
          <form onSubmit={handleSubmit}>
            <div className='grid gap-2'>
              <div className='flex items-center gap-4'>
                <div className='w-[130px] h-[130px] bg-gray-400 rounded-full'>
                  <img className='w-full rounded-full' src="/images/placeholderImg2.svg" alt="" />
                </div>
                <button  className='text-sm max-w-max   h-8 rounded-full flex items-center justify-center gap-1 font-semibold w-full px-4 active:scale-[.98] transition border border-[#1F497B] text-[#1F497B]' type="submit">
                    Change Photo
                </button>
              </div>

              <div className='grid gap-x-4 sm:grid-cols-2 grid-cols-1'>
                <InputComponent  
                  name="company_id"
                  label={'Company Id'} 
                  value={companyId}
                  disabled
                  required
                />
                <InputComponent  
                  name="company_name"
                  label={'Company Name'} 
                  value={companyInfo.company_name} 
                  onChange={handleChange} 
                  required
                />
                <InputComponent  
                  name="company_email"
                  label={'Email Address'} 
                  value={companyEmail} 
                  disabled
                  required
                />
                <InputComponent  
                  name="company_phone"
                  label={'Phone Number'} 
                  value={companyInfo.company_phone} 
                  onChange={handleChange} 
                  required
                />
                <div className='sm:col-start-2 sm:justify-self-end '>
                  <button  className='text-base max-w-max   h-10 rounded-lg flex items-center justify-center gap-1 font-semibold w-full px-12 active:scale-[.98] transition bg-[#1F497B] text-white' type="submit">
                    Edit & Save
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* enrolled courses */}
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfileAndEnrolledCourses