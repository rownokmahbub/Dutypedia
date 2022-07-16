import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from "next/image";
import roundedplus from '/public/Assets/icon/roundedplus.svg'
import cross from '/public/Assets/icon/cross.png'
import OnlineSearch from './OnlineSearch';
import OnlineOfflineTabs from './OnlineOfflineTabs';
export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="">
      <button onClick={openModal} className="flex flex-row md:ml-[230px] md:mr-8 bg-transparent border-none cursor-pointer items-center">
              <p className="capitalize mr-1 text-md text-[#707070] text-[16px]">
              Create Appointment
              </p>
              <div className="flex items-center">
                <Image src={roundedplus} width={60} height={60} alt='fdefd'/>
              </div>
            </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden align-middle transition-all">
             
                <OnlineOfflineTabs onClose= {()=>closeModal()}/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
