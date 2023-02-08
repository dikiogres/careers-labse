import { Participant, Status, participant } from "@/data/participant.data";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

const OprecStatusModal = ({
  isOpen,
  closeModal,
  participant,
}: {
  participant: Participant | Status.NotFound;
  isOpen: boolean;
  closeModal: () => void;
}) => (
  <Transition appear show={isOpen} as={React.Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={React.Fragment}
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
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden text-gray-900 dark:text-white rounded-2xl bg-white dark:bg-slate-600 p-4 text-left align-middle shadow-xl transition-all">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6">
                Status Seleksi Berkas
              </Dialog.Title>
              <hr className="mt-2" />
              <div className="mt-2">
                <p className="text-sm">
                  {participant && participant === Status.NotFound ? (
                    <span className="text-xl">❌ NRP tidak ditemukan</span>
                  ) : participant.status === Status.Rejected ? (
                    <div className="text-center">
                      <h2 className="text-xl">
                        Mohon maaf {""}
                        <span className="text-red-500 font-semibold">
                          {participant.name}😞
                        </span>
                      </h2>
                      <p className="text-lg">
                        Kamu <b className="text-red-500">belum lolos</b> proses
                        seleksi.
                      </p>
                      <p className="text-gray-400 ">
                        Sampai jumpa di kesempatan lain, tetap semangat
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <h2 className="text-xl">
                        Selamat {""}
                        <span className="text-teal-500">
                          {participant.name}😊
                        </span>
                      </h2>
                      <p className="text-lg">
                        Kamu <b className="text-teal-500">lolos</b> proses
                        seleksi
                      </p>
                      <p className="text-gray-400 ">
                        Segera join discord kita untuk mendapatkan role <br /> dan
                        mengikuti proses seleksi berikutnya.
                      </p>
                    </div>
                  )}
                </p>
              </div>

              <div className="mt-4 text-end">
                <button
                  type="button"
                  className="px-2 py-2 text-red-500 rounded-lg bg-white border-2 border-red-500 hover:bg-red-500 hover:text-white dark:text-teal-400 dark:bg-slate-600 dark:border-teal-500 dark:hover:bg-teal-500 dark:hover:text-white transition-all duration-200"
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
);

export default function OprecAnnouncement() {
  const [nrp, setNrp] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [findedParticipant, setFindedParticipant] = React.useState<
    Participant | Status.NotFound
  >(Status.NotFound);

  const handleSubmit = () => {
    console.log(nrp, "nrp");
    const isParticipant = participant.find((p) => p.nrp === nrp);
    if (isParticipant) {
      setFindedParticipant(isParticipant);
    } else {
      setFindedParticipant(Status.NotFound);
    }
    setOpen(true);
  };
  return (
    <section className="w-11/12 flex justify-center mx-auto">
      <OprecStatusModal
        isOpen={open}
        closeModal={() => setOpen(false)}
        participant={findedParticipant}
      />
      <div className="p-5 border w-full max-w-sm bg-white text-center dark:bg-slate-600 shadow-red-500 shadow-sm flex-col rounded-lg dark:border-slate-400 space-y-4 transition duration-500 hover:shadow-red-500 hover:shadow-xl hover:scale-105 dark:shadow-teal-500 dark:shadow-md dark:hover:shadow-teal-500 dark:hover:shadow-xl dark:scale-100 dark:hover:scale-105">
        <div className="w-fit mx-auto ">
          <h2 className="typewriter text-red-500 dark:text-teal-500 font-bold text-2xl sm:text-4xl">
            Hasil Seleksi Berkas
          </h2>
        </div>
        <div className="space-x-2 space-y-2">
          <input
            id="nrp"
            name="nrp"
            type="text"
            className="bg-white border-2 border-red-500 text-gray-900 text-sm rounded-lg px-2 py-2.5 dark:bg-gray-700 dark:border-teal-500 dark:placeholder-gray-400 dark:text-white focus:outline-none "
            placeholder="Masukkan NRP"
            required
            value={nrp}
            onInput={(e) =>
              (e.currentTarget.value = e.currentTarget.value.replace(
                /[^0-9]/g,
                ""
              ))
            }
            onChange={(e) => setNrp(e.currentTarget.value)}
          />
          <button
            className={clsx(
              "p-2 font-semibold rounded-lg",
              "text-white bg-red-500 border-2 border-red-500",
              "dark:text-bg-slate-600 dark:bg-teal-500 dark:border-teal-500",
              "transition-all duration-500 hover:animate-pulse",
              "hover:bg-red-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white"
            )}
            onClick={handleSubmit}
          >
            Lihat Status
          </button>
        </div>
      </div>
    </section>
  );
}
