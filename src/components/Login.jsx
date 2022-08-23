import React from 'react'

const Login = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='bg-aqua dark-blue lrw-height lrw-width d-flex justify-content-center align-items-center flex-column lr-rounded'>
        <p className='mx-auto fs-5 fw-bold'>Login</p>
        <label>
          email:
          <br></br>
          <input type="text" className='mt-2 lnr-width input-height border-dark-blue p-2 rounded-3' placeholder='email...' />
        </label>
        <label className='mt-5'>
          password:
          <br></br>
          <input type="text" className='mt-2 lnr-width input-height border-dark-blue p-2 rounded-3' placeholder='password....' />
        </label>
        <div className='d-flex justify-content-center align-items-center'>
          <button className='text-white send-btn p-3 mt-5 lnr-width rounded-3 border-0'>login</button>
        </div>
      </div>
    </div>
  )
}

export default Login