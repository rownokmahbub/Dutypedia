import { FiPlusCircle } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

const AddNewCat = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const addCat = () => {
    if (!title) {
      toast.error("Please fill all fields");
      return;
    }
    onSubmit({
      title,
      id: nanoid(),
    });
    closeModal();
  };
  return (
    <>
      <div className="">
        <a
          onClick={openModal}
          className="p-4 text-2xl w-full flex items-center justify-center gap-2 cursor-pointer text-gray-700 shadow text-center rounded-md bg-gray-50"
        >
       
          <FiPlusCircle className="text-primary" />
          <p className="text-primary text-base">Add New</p>
        </a>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add New Category
                  </Dialog.Title>
                  <div className="mt-2 py-4">
                    <input
                      className="input input-bordered w-full"
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn btn-primary btn-wide"
                      onClick={addCat}
                    >
                      Add
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddNewCat;
