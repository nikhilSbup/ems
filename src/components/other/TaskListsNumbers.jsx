import React from 'react'

const TaskListsNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='w-[45%] p-10 rounded-xl px-6 py-9 bg-orange-600'>
            <h2 className='text-2xl font-bold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] p-10 rounded-xl px-6 py-9 bg-blue-500'>
            <h2 className='text-2xl font-bold'>1</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] p-10 rounded-xl px-6 py-9 bg-yellow-500'>
            <h2 className='text-2xl font-bold'>2</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] p-10 rounded-xl px-6 py-9 bg-pink-500'>
            <h2 className='text-2xl font-bold'>3</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] p-10 rounded-xl px-6 py-9 bg-emerald-400'>
            <h2 className='text-2xl font-bold'>4</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListsNumbers