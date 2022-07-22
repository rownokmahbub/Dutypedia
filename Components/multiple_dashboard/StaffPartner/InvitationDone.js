import React from 'react'

const InvitationDone = ({goNext}) => {
  return (
    <div className='container mx-auto max-w-sm rounded-lg bg-white shadow-3xl flex justify-center items-center py-6'>
        <div className="flex flex-col justify-center items-center space-y-3">
        <p className='text-lg'>Invitation Sent Successfully!!</p>
        <button onClick={goNext} className='btn btn-primary w-24'>Done</button>
        </div>
       
    </div>
  )
}

export default InvitationDone