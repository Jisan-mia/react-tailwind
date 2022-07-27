import React, { useState } from 'react'

// courses from cart
const cartCourses = [
  {
    id: 1,
    course_name: 'Drug-Free Workplace Training',
    price: 299,
    image: '',
    courseId: '#234235'
  },
  {
    id: 2,
    course_name: 'DOT Mode Training Across the US ',
    price: 100,
    image: '',
    courseId: '#254535'
  },
  {
    id: 3,
    course_name: 'Federal Motor Carrier Safety Administration (FMCSA) Supervisor Training',
    price: 500,
    image: '',
    courseId: '#785f34'
  }
]

const CompanyCoursesToEnroll = ({
  selectedCourses,
  setSelectedCourses
}) => {
  const [cart, setCart] = useState(cartCourses)

  return (
    <div>
      <div className=" relative ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">

              </th>
              <th scope="col" className="py-3 px-6 hidden sm:block">
                  <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="py-3 px-6">
                  Course Info
              </th>
              <th scope="col" className="p-2">
                  Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr className="bg-white border-b hover:bg-gray-50">
              <td className="p-4 w-4">
                  <div className="flex items-center">
                      <input onChange={(e) => {
                        if(e.target.checked) {
                          setSelectedCourses([
                            ...selectedCourses,
                            item
                          ])
                        } else {
                          const newState = [...selectedCourses]
                          const findIndex = newState.findIndex(
                            (m) => m.courseId === item.courseId
                          );
                          newState?.splice(findIndex, 1);
                          setSelectedCourses(newState)
                        }
                      }} 
                        checked={selectedCourses.some(i => i.courseId == item.courseId)} id={item.courseId} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2 " 
                      />
                      <label for="checkbox-table-1" className="sr-only">checkbox</label>
                  </div>
              </td>
              <td className="p-4 w-32 hidden sm:block">
                  <img className='rounded' src="/images/course1.png" alt="Apple Watch" />
              </td>
              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                <span>{item.course_name}</span>
                <p>
                Price: ${item.price}
                </p>
                <p>Course id: {item.courseId}</p>
              </td>
              <td className="p-2">
                  <a onClick={() => {
                    // remove from cart
                    const updCart = cart.filter(i => i.id !== item.id)
                    setCart(updCart)
                  }} className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline">Remove</a>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CompanyCoursesToEnroll