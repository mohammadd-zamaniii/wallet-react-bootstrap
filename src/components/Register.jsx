import React from 'react'

function register() {
  return (
    <div className=' vh-100 d-flex justify-content-center align-items-center'>
    
      <div className=' vh-100 d-flex justify-content-center align-items-center'>
        <div className='bg-aqua dark-blue register-height lr-width d-flex justify-content-center align-items-center flex-column lr-rounded'>
          <p className='mx-auto fs-5 fw-bold'>Register</p>
          <label>
            full name:
            <br></br>
            <input type="text" className='mt-2 lnr-width input-height p-2 border-dark-blue rounded-3 ' placeholder='fullName...' />
          </label>
          <label className='mt-4'>
            user name:
            <br></br>
            <input type="text" className='mt-2 input-height lnr-width p-2 border-dark-blue rounded-3 ' placeholder='user name...' />
          </label>
          <label className='mt-4'>
            Email:
            <br></br>
            <input type="email" className='mt-2 input-height lnr-width p-2 border-dark-blue rounded-3 ' placeholder='email...' />
          </label>
          <label className='mt-4'>
            Password:
            <br></br>
            <input type="password" className='mt-2 input-height lnr-width p-2 border-dark-blue rounded-3 ' placeholder='Password...' />
          </label>
          <div className='d-flex justify-content-center align-items-center'>
            <button className='text-white send-btn p-3 mt-5 lnr-width rounded-3 border-0'>register</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default register