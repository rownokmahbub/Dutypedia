import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";
import { BsPlusCircle } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import CheckBox from "@components/global/CheckBox";

const EditPackage = ({ onSubmit, data, isOpen, closeModal }) => {
  const [name, setName] = useState(data.name || "");
  const [price, setPrice] = useState(data.price || "");
  const [features, setFeatures] = useState(data.features || []);
  const formRef = useRef();
  const addFeature = (title) => {
    if (features.length < 8) {
      setFeatures([...features, { id: nanoid(), title, isAvailable: true }]);
    } else {
      toast.error("You can add only 8 features!");
    }
  };
  const removeFeature = (id) => {
    setFeatures(features.filter((feature) => feature.id !== id));
  };
  const updateFeature = (id, title) => {
    setFeatures(
      features.map((feature) => {
        if (feature.id === id) {
          return {
            ...feature,
            title,
          };
        }
        return feature;
      })
    );
  };
  const toggleFeature = (id) => {
    setFeatures(
      features.map((feature) => {
        if (feature.id === id) {
          return {
            ...feature,
            isAvailable: !feature.isAvailable,
          };
        }
        return feature;
      })
    );
  };
  const handelSubmit = () => {
    if (features.length < 1) {
      toast.error("You must add at least one feature!");
      return;
    }
    onSubmit({
      id: data.id,
      name,
      price,
      features,
    });
    closeModal();
  };
  return (
    <>
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
                    Add New Package
                  </Dialog.Title>
                  <form ref={formRef} className=" space-y-2">
                    <div className="mt-4">
                      <div className="flex justify-end">
                        <span className="text-xs italic text-gray-400">
                          (20 charecters max)
                        </span>
                      </div>
                      <input
                        className="input input-bordered w-full"
                        type="text"
                        placeholder="Package Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength="20"
                        required
                      />
                    </div>
                    <div className="">
                      <input
                        className="input input-bordered w-full"
                        type="number"
                        placeholder="Price (৳)"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        min="1"
                        max="999999"
                        required
                      />
                    </div>

                    {features.map((feature) => (
                      <div className=" space-y-2">
                        <div className="flex gap-2 items-center">
                          <div className="flex-1">
                            <div className="flex justify-end">
                              <span className="text-xs italic text-gray-400">
                                (50 charecters max)
                              </span>
                            </div>
                            <input
                              className="input input-bordered w-full"
                              type="text"
                              placeholder="Feature"
                              value={feature.title}
                              onChange={(e) =>
                                updateFeature(feature.id, e.target.value)
                              }
                              maxLength="50"
                              minLength="3"
                              required
                            />
                          </div>
                          <FaTrash
                            onClick={() => removeFeature(feature.id)}
                            className="text-red-500 cursor-pointer"
                          />
                        </div>
                        <CheckBox
                          onChange={() => toggleFeature(feature.id)}
                          value={feature.isAvailable}
                          title="Available"
                        />
                      </div>
                    ))}
                    <a
                      onClick={() =>
                        addFeature(`Feature ${features.length + 1}`)
                      }
                      className="btn btn-link gap-2 p-0 text-gray-500 lowercase font-normal"
                    >
                      <BsPlusCircle />
                      <p>
                        add feature{" "}
                        <span className="italic">
                          ({8 - features.length} left)
                        </span>
                      </p>
                    </a>

                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => {
                          if (formRef.current.checkValidity()) {
                            handelSubmit();
                          } else {
                            formRef.current.reportValidity();
                          }
                        }}
                        type="button"
                        className="btn btn-primary btn-wide"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditPackage;
