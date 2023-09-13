import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { useSnapshot } from 'valtio';
import { store } from '../utils/store';

const ResultsModal = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }
  const results = useSnapshot(store);
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
                    className="text-xl text-center font-medium leading-6 text-gray-900"
                  >
                    Results
                  </Dialog.Title>
                  <div className="my-6 space-y-3">
                    {results.results.map(result => (
                      <div
                        className="flex flex-col gap-4 bg-gray-200 p-4 rounded-lg"
                        key={result}
                      >
                        <div>
                          <p className="text-lg font-semibold">
                            User: {result.name}, Age: {result.age}
                          </p>
                          <p className="text-lg font-semibold">
                            Predicted Disease: {result.disease}
                          </p>
                          <p className="mb-1">Accuracy: {result.accuracy}%</p>
                          {/* show yellow note if accuracy below 85 */}
                          {result.accuracy < 85 && (
                            <p className="text-yellow-700">
                              Note: Accuracy is below 85%. Results might be
                              inaccurate. Please consult a doctor for further
                              diagnosis. <br />
                              Retry with a better image.
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row gap-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
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

export default ResultsModal;
