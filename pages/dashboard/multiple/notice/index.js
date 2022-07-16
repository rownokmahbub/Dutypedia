import Addnotice from '@components/multiple_dashboard/Notice/Addnotice'
import Notice from '@components/multiple_dashboard/Notice/Notice'
import Noticeedit from '@components/multiple_dashboard/Notice/Noticeedit'
import Noticeinfo from '@components/multiple_dashboard/Notice/Noticeinfo'
import React from 'react'
import { useState } from "react";
function Index() {
   const [step, setStep] = useState(1);
   return (
      <div>
           <>{step === 1 && <Addnotice goNext={() => setStep(2)} />}</>
         <>{step === 2 && <Noticeinfo goNext={() => setStep(3)} />}</>
         <>{step === 3 && <Noticeedit goNext={() => setStep(4)} />}</>
         <>{step === 4 && <Notice goNext={() => setStep(5)} />}</>
         <>{step === 5 && <Noticeinfo goNext={() => setStep(6)} />}</>
        
     
       
      </div>
   )
}

export default Index