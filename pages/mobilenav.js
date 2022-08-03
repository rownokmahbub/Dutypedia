import MobileSidebar from '@components/navbar/MobileSidebar'
import MultipleDashboardLayout from 'layouts/MultipleLayout'
import React from 'react'

const mobilenav = () => {
  return (
    <div>
        <MobileSidebar/>
    </div>
  )
}
mobilenav.layout=MultipleDashboardLayout
export default mobilenav