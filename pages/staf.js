import CreateEmployee from '@components/multiple_dashboard/StaffPartner/CreateEmployee'
import EmployeeTable from '@components/multiple_dashboard/StaffPartner/EmployeeTable'
import InvitationDone from '@components/multiple_dashboard/StaffPartner/InvitationDone'
import InviteEmployee from '@components/multiple_dashboard/StaffPartner/InviteEmployee'
import SearchEmployee from '@components/multiple_dashboard/StaffPartner/SearchEmployee'
import UpdateEmployee from '@components/multiple_dashboard/StaffPartner/UpdateEmployee'
import React from 'react'
import { useState } from "react";
const staf = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      
        <>{step === 1 && <CreateEmployee goNext={() => setStep(2)} />}</>
        <>{step === 2 && <InviteEmployee goNext={() => setStep(3)} />}</>
        <>{step === 3 && <EmployeeTable goNext={() => setStep(4)} />}</>
        <>{step === 4 && <EmployeeTable goNext={() => setStep(5)} />}</>
        <>{step === 5 && <InviteEmployee goNext={() => setStep(4)} />}</>
        <>{step === 6 && <UpdateEmployee goNext={() => setStep(4)} />}</>
       
    
     
       
    </div>
  )
}

export default staf