import React from 'react'

export default function Ipout({getdata,city,setcity}) {
  return (
    <div className=' h-[30px]  w-aotu m-10'>
        <form   onSubmit={getdata} >
          <h1>simple weather app</h1>
            <input type='text' value={city}  onChange={(e)=>setcity(e.target.value)} className='rounded-l-[5px] border-none'  />
            <button className='h-auto bg-[#3a89f0] w-[50px] m-3' >seach</button>
        </form>
    </div>
  )
}
