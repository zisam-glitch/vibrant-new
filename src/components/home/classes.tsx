import React from 'react'

const classData = [
  {
    id: 1,
    title: 'Language Class',
    description: 'Interactively brand client center through is customized value good ideas.',
    age: '3-5 years',
    time: '8-10 am',
    capacity: '30 Kids',
    image: 'classes/1.png'
  },
  {
    id: 2,
    title: 'Mathematics Class',
    description: 'Interactively brand client center through is customized value good ideas.',
    age: '3-5 years',
    time: '8-10 am',
    capacity: '30 Kids',
    image: 'classes/2.png'
  },
  {
    id: 3,
    title: 'Drawing Class',
    description: 'Interactively brand client center through is customized value good ideas.',
    age: '3-5 years',
    time: '8-10 am',
    capacity: '30 Kids',
    image: 'classes/3.png'
  },
  {
    id: 4,
    title: 'Language Class',
    description: 'Interactively brand client center through is customized value good ideas.',
    age: '3-5 years',
    time: '8-10 am',
    capacity: '30 Kids',
    image: 'classes/4.png'
  },
  {
    id: 5,
    title: 'Mathematics Class',
    description: 'Interactively brand client center through is customized value good ideas.',
    age: '3-5 years',
    time: '8-10 am',
    capacity: '30 Kids',
    image: 'classes/5.png'
  },
  {
    id: 6,
    title: 'Language Class',
    description: 'Interactively brand client center through is customized value good ideas.',
    age: '3-5 years',
    time: '8-10 am',
    capacity: '30 Kids',
    image: 'classes/1.png'
  },
  {
    id: 7,
    title: 'Drawing Class',
    description: 'Interactively brand client center through is customized value good ideas.',
    age: '3-5 years',
    time: '8-10 am',
    capacity: '30 Kids',
    image: 'classes/2.png'
  },    
  {
    id: 8,
    title: 'Language Class',
    description: 'Interactively brand client center through is customized value good ideas.',
    age: '3-5 years',
    time: '8-10 am',
    capacity: '30 Kids',
    image: 'classes/3.png'
  },
];

export default function Classes() {
  return (
    <section className='md:px-12 px-4 md:py-16 py-12'>
      <div className='text-center md:w-[40%] w-full mx-auto md:mb-16 mb-8'>
        <h4 className='md:text-xl text-lg font-bold pb-4 text-[#FF66C4]'>On Going Classes</h4>
        <h2 className='md:text-4xl text-2xl font-bold'>Take The Classes & Start Learning From Today</h2>
      </div>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-10'>
        {classData.map((classItem) => (
          <div key={classItem.id} className='p-3 rounded-lg bg-[#FF66C4]'>
            <img src={classItem.image} alt={classItem.title} />
            <div className='text-white flex flex-col gap-2 py-3'>
              <h3 className='text-xl font-bold'>{classItem.title}</h3>
              <p className='text-sm'>{classItem.description}</p>
            </div>
            <div className='grid grid-cols-3 gap-2 pb-3 text-sm'>
              <div className='flex flex-col text-center'>
                <p className='text-[#FFD600]'>Age:</p>
                <p className='text-white'>{classItem.age}</p>
              </div>
              <div className='flex flex-col text-center'>
                <p className='text-[#FFD600]'>Time:</p>
                <p className='text-white'>{classItem.time}</p>
              </div>
              <div className='flex flex-col text-center'>
                <p className='text-[#FFD600]'>Capacity:</p>
                <p className='text-white'>{classItem.capacity}</p>
              </div>
            </div>
            <button className='w-full bg-[#FFD600] text-[#FF66C4] px-6 py-2 cursor-pointer rounded-sm font-semibold hover:bg-[#FFD600]/80 transition'>
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
