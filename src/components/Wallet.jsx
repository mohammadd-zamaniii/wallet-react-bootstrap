import React from 'react'

const Wallet = () => {
  return (
    <div className=' h-screen flex justify-center items-center'>
    <div className='bg-[#00fcdc] text-[#243065]  h-[500px] w-[400px] flex justify-center items-center flex-col rounded-[20px]'>
      <p className='mx-auto text-2xl font-bold'>Wallet</p>
      <label>
        Bitra:
        <br></br>
        <input type="text" className='mt-2 h-[50px] w-[300px] border p-2 border-[#243065] rounded-lg placeholder:text-black' placeholder='Bitra...' />
      </label>
      <label className='mt-12'>
        password:
        <br></br>
        <input type="password" className='mt-2 h-[50px] border w-[300px] p-2 border-[#243065] rounded-lg placeholder:text-black' placeholder='password...' />
      </label>
      <div className='flex justify-between items-center'>
        <button className='text-[#243065] outline-none w-[130px] mr-5  bg-[#ff2e2e] p-3 mt-10  rounded-[10px]'>Depozit</button>
        <button className='text-[#243065] outline-none w-[130px] ml-5  bg-[#ade903] p-3 mt-10  rounded-[10px]'>Withdraw</button>
      </div>
    </div>
  </div>
  )
}

export default Wallet