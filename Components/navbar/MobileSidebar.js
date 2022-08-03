
import Link from 'next/link'
import React from 'react'

const MobileSidebar = () => {
  return (
    <div className='md:hidden flex flex-col space-y-5 container mx-auto'>
        <Link href='/pages/dashboard/multiple/profile'>
            <div className=''>
                Profile
            </div>
        </Link>
        <Link href='/dashboard/multiple/members'>
            <div className=''>
                Member
            </div>
        </Link>
        <Link href=''>
            <div className=''>
                Appoinment
            </div>
        </Link>
    </div>
  )
}

export default MobileSidebar