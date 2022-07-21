import AccessFunction from '@components/multiple_dashboard/StaffPartner/AccessFunction'
import CreateEmployee from '@components/multiple_dashboard/StaffPartner/CreateEmployee'
import EmployeeTable from '@components/multiple_dashboard/StaffPartner/EmployeeTable'
import InviteEmployee from '@components/multiple_dashboard/StaffPartner/InviteEmployee'
import SearchEmployee from '@components/multiple_dashboard/StaffPartner/SearchEmployee'
import React from 'react'

const staf = () => {
  return (
    <div>
        <CreateEmployee/>
        <SearchEmployee/>
        <AccessFunction/>
        <InviteEmployee/>
        <EmployeeTable/>
    </div>
  )
}

export default staf