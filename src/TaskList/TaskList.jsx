import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[50%] flex overflow-x-auto w-full mt-10 justify-start gap-5 flex-nowrap'>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-500 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>15 July 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make an assignment</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptate velit vitae laudantium ex ea.</p>
        </div>
        
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-500 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>15 July 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make an assignment</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptate velit vitae laudantium ex ea.</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-500 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>15 July 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make an assignment</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptate velit vitae laudantium ex ea.</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-500 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>15 July 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make an assignment</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptate velit vitae laudantium ex ea.</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-pink-500 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>15 July 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make an assignment</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptate velit vitae laudantium ex ea.</p>
        </div>
    </div>
  ) 
}

export default TaskList  