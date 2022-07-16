import BusinessProfile from '@components/feed/BusinessProfile'
import LoginDashboard from '@components/feed/LoginDashboard'
import React from 'react'

const login = () => {
  return (
    <div>
        <LoginDashboard/>
        <BusinessProfile/>
    </div>
  )
}

export default login