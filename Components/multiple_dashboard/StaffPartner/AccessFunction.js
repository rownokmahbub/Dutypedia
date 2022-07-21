import CheckBox from '@components/global/CheckBox'
import React from 'react'

const AccessFunction = () => {
  return (
    <div className='my-10 container mx-auto flex justify-center '>
        <div className="bg-white shadow-3xl px-10 max-w-screen-md py-5 rounded-lg">
        <p className='pb-3 text-lg font-medium'>Access Functionality</p>
        <div className="grid sm:grid-cols-2 sm:mb-2">
        <div className="flex items-center mb-1">
            <CheckBox value={true}/>
            <p>Dashboard</p>
        </div>
        <div className="flex items-center mb-1">
            <CheckBox/>
            <p>Staff & PArtner</p>
        </div>
        </div>
        <div className="grid sm:grid-cols-2 sm:mb-2">
        <div className="flex items-center mb-1">
            <CheckBox value={true}/>
            <p>Order</p>
        </div>
        <div className="flex items-center mb-1">
            <CheckBox/>
            <p>Expenses</p>
        </div>
        </div>
        <div className="grid sm:grid-cols-2 sm:mb-2">
        <div className="flex items-center mb-1">
            <CheckBox/>
            <p>Member</p>
        </div>
        <div className="flex items-center mb-1">
            <CheckBox/>
            <p>Account Balance</p>
        </div>
        </div>
        <div className="grid sm:grid-cols-2 sm:mb-2">
        <div className="flex items-center mb-1">
            <CheckBox/>
            <p>Group</p>
        </div>
        <div className="flex items-center mb-1">
            <CheckBox/>
            <p>Customer Review</p>
        </div>
        </div>
        <div className="grid sm:grid-cols-2 sm:mb-2">
        <div className="flex items-center mb-1">
            <CheckBox/>
            <p>Notice</p>
        </div>
        <div className="flex items-center mb-1">
            <CheckBox/>
            <p>No Access In Functionality</p>
        </div>
        </div>
        <div className="flex justify-end mt-3">
        <button className='btn btn-primary md:w-28 capitalize '>Done</button>
        </div>
    
        </div>

    </div>
  )
}

export default AccessFunction