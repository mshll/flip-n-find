import { useState } from 'react'

export default function CustomSelect({ setSelectedTheme, selectedTheme }) {
  function handleChange(event) {
    setSelectedTheme(event.target.value)
  }

  return (
    <div className='w-full min-w-[200px] max-w-sm'>
      <div className='relative'>
        <select
          value={selectedTheme}
          onChange={handleChange}
          className='ease w-full cursor-pointer appearance-none rounded-md border border-slate-400 bg-slate-200 fill-slate-200 py-2 pl-3 pr-8 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-800 focus:border-blue-400 focus:outline-none'
        >
          <option value='banks'>Banks</option>
          <option value='cars'>Cars</option>
          <option value='coffee'>Coffee Shops</option>
          <option value='flags'>Flags</option>
        </select>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.2'
          stroke='currentColor'
          className='absolute right-2.5 top-2.5 ml-1 h-5 w-5 text-slate-700'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9' />
        </svg>
      </div>
      {/* {selectedTheme && (
        <p className="mt-2 text-sm text-slate-600">
          You selected: {selectedTheme}
        </p>
      )} */}
    </div>
  )
}
