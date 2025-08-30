import React from 'react'

const classData = [
  {
    id: 1,
    title: 'Online Class',
    description: 'Interactively brand client center  is  value good.',
    age: '3-5 years',
    time: '8-10 am',
    capacity: '30 Kids',
    image: 'classes/7.png'
  },
  {
    id: 2,
    title: 'Online Class',
    description: 'Interactively brand client center  is  value good.',
    age: '3-5 years',
    time: '8-10 am',
    capacity: '30 Kids',
    image: 'classes/6.png'
  },
  {
    id: 3,
    title: 'Online Class',
    description: 'Interactively brand client center  is  value good.',
    age: '3-5 years',
    time: '8-10 am',
    capacity: '30 Kids',
    image: 'classes/7.png'
  },
  {
    id: 4,
    title: 'Online Class',
    description: 'Interactively brand client center  is  value good.',
    age: '3-5 years',
    time: '8-10 am',
    capacity: '30 Kids',
    image: 'classes/6.png'
  }
];

export default function Classes() {
  return (
    <section className=' bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(0,0,0,0.1)_100%)]'>
      <div className='max-w-7xl mx-auto relative md:px-12 px-4 md:py-24 py-12'>
      <div className='text-center md:w-[40%] w-full mx-auto md:mb-16 mb-8'>
        <h4 className='md:text-xl text-lg pb-4 text-[#FF66C4]'>Educational Programs</h4>
        <h2 className='md:text-4xl text-2xl'>Step By Step Systematic Education</h2>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-10 md:w-5/6 w-full mx-auto'>
        {classData.map((classItem) => (
          <div key={classItem.id} className='md:p-10 p-4 grid grid-cols-[1fr_2fr] justify-center items-center md:gap-8 gap-4 md:rounded-[40px] rounded-[20px] bg-[#fff]'>
            <img src={classItem.image} alt={classItem.title} />
            <div>
              <div className='flex flex-col gap-2 md:gap-4 md:py-3 py-0'>
                <h3 className='text-[#710A85] md:text-xl text-lg'>{classItem.title}</h3>
                <p className='text-sm'>{classItem.description}</p>
              </div>

              <button className='text-[#710A85] py-2 cursor-pointer  font-semibold hover:bg-[#710A85]/80 transition'>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <img src="shapes/planet.png" alt="" className='absolute top-0 left-[7%] md:block hidden' />
      <img src="shapes/abc.png" alt="" className='absolute top-0 right-[7%] md:block hidden' />
      </div>
    </section>
  )
}
