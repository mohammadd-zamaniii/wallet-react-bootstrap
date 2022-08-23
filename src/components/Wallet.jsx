import React from 'react'

const Wallet = () => {
  return (
    <div className=' vh-100 d-flex justify-content-center align-items-center'>
    <div className='bg-aqua dark-blue lrw-height lrw-width d-flex justify-content-center align-items-center flex-column lr-rounded'>
      <p className='mx-auto fs-5 fw-bold'>Wallet</p>
      <label>
        Bitra:
        <br></br>
        <input type="text" className='mt-2 input-height lnr-width p-2 border-dark-blue rounded-3' placeholder='Bitra...' />
      </label>
      <label className='mt-5'>
        password:
        <br></br>
        <input type="password" className='mt-2 input-height border lnr-width p-2 border-dark-blue rounded-3' placeholder='password...' />
      </label>
      <div className='d-flex justify-content-between align-items-center'>
        <button className='dark-blue border-0 wallet-button  red-btn p-3 mt-4 mx-3 rounded-3'>Depozit</button>
        <button className='text-[#243065] border-0 wallet-button mx-3 yellow-btn p-3 mt-4  rounded-3'>Withdraw</button>
      </div>
    </div>
  </div>
  )
}

export default Wallet