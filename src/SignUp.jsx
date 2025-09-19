import React from 'react'
const SignUp=() =>{
  return (
    <div className='flex items-center flex-col mt-10 gap-10 mr-20 '>
<h1 className='text-2xl text-red-500 font-bold hover:text-violet-600'>Join Sign In</h1>
<p className='text-blue-600 text-center font-semibold hover:text-green-400'>Access your account</p>
<form className='flex flex-col border-1 border-gray-300 w-3/5 py-7 items-center gap-5 mb-5 rounded-2xl'>
<div className=' w-[70%] flex flex-col gap-2'>
    <p className=' text-md text-center text gray-500 font-semibold'>Full name</p>
    <input type="text" placeholder="enter your full name" 
    className='border-1 border-gray-600 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500'/>
    
</div>
<div className='w-[70%] flex flex-col gap-2'>
    <p className='text-md text-gray-600 text-center  font-semibold '>Email</p>
    <input type="email" placeholder="enter your email"
     className='border-1 border-gray-600 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500'/>

    
    

</div>
<div
className='w-[70%] flex flex-col gap-2 '>
    <p className='text-md text-gray-600 text-center  font-semibold'>Password</p>
    <input type="password" placeholder="enter your password"
     className='border-1 border-gray-600 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500'/>

</div>
<div className='w-[70%] flex flex-col gap-2'>
    <p className='text-md text-gray-600 text-center  font-semibold'>Conform Password</p>
    <input type="password" placeholder="conform your password"
    className='border-1 border-gray-600 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500'/>

</div>
<div className='w-[70%] flex gap-2 border-1 border-gray-200 py-4 px-3 rounded-xl hover:bg-green-500 hover:text-white  justify-center items-center'>
    <input type="checkbox" name="id" id=""
    className='h-5 w-5 '/>
    <p>I agree to the terms and conditions </p>

</div>

    <button ClassName='w-[70%] bg-purple-400 py-4 text-white rounded-xl font-semibold hover:bg-purple-600'>Create Account</button>
<div className='border-[0.5px] border-gray-500 w-[90%]'
>
    <p className='text-gray-700 font-semibold mt-4 text-center' >  Already have an account?  <span className='text-purple-500'> Sign In here</span></p>
<button className='text-gray-700 font-semibold hover:bg-100 py-4 w-[90%] rounded-xl cursor-pointer' > 
Back to Home
</button>
</div>
</form>
    </div>
   
  )
}
export default SignUp