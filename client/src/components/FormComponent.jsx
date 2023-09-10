import React, { useState } from 'react'

const FormComponent = () => {
  const [username,setUserName] = useState("");
  const [useremail,setUserEmail] = useState("");
  const [prevCond,setPrevCond] = useState("");
  const [otherCond,setOtherCond] = useState("");
  const [age,setAge] = useState();
  return (
<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-2 lg:grid-cols-2">

          <div class="lg:col-span-1">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-4">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={username} onChange={(e)=>setUserName(e.target.value)} />
              </div>

              <div class="md:col-span-4">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={useremail} onChange={(e)=>setUserEmail(e.target.value)} placeholder="email@domain.com" />
              </div>

              <div class="md:col-span-4">
                <label for="address">Previous Medical Conditions</label>
                <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={prevCond} onChange={(e)=>setPrevCond(e.target.value)} placeholder="" />
              </div>

              <div class="md:col-span-4">
                <label for="city">Age</label>
                <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="" />
              </div>

              <div class="md:col-span-4">
                <label for="zipcode">Other Details</label>
                <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value={otherCond} onChange={(e)=>setOtherCond(e.target.value)} />
              </div>

              <div class="md:col-span-5 text-left mt-4">
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
          </div>

          <div className='col-span-1 rounded-md text-white bg-[#000000cd] flex justify-center items-center'>
            Upload Image Here
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default FormComponent