import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PreviewAlert = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-900 dark:bg-slate-200 text-white dark:text-gray-900">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-1">
                    Esta página é uma pré-visualização.{" "}
                    <Link
                      href="/api/exit-preview"
                      className="underline hover:text-cyan duration-200 transition-colors"
                    >
                      Clique aqui
                    </Link>{" "}
                    para sair.
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="h-5 w-5 text-red-400 mt-0.5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default PreviewAlert;
