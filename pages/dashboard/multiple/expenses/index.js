import CreateExpences from '@components/multiple_dashboard/Expenses/CreateExpences'
import ExpenceCreate from '@components/multiple_dashboard/Expenses/ExpenceCreate'
import ExpenceEdit from '@components/multiple_dashboard/Expenses/ExpenceEdit'
import NewExpence from '@components/multiple_dashboard/Expenses/NewExpence'
import { useState } from "react";
import React from 'react'
import MultipleDashboardLayout from 'layouts/MultipleLayout';

function Index() {
   const [step, setStep] = useState(1);
   return (
      <div className='m-auto md:p-10 bg-[#FFF1F2] dark:bg-bg-200'>
      <>{step === 1 && <ExpenceCreate goNext={() => setStep(2)} />}</>
    <>{step === 2 && < CreateExpences goNext={() => setStep(3)} />}</>
    <>{step === 3 && < ExpenceEdit goNext={() => setStep(4)} />}</>
    <>{step === 4 && <NewExpence goNext={() => setStep(5)} />}</>
    <>{step === 5 && <ExpenceEdit goNext={() => setStep(4)} />}</>
    
   </div>

   )
}
Index.layout=MultipleDashboardLayout
export default Index