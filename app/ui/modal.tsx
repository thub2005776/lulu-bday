'use client'

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import Link from 'next/link';
import { dynaPuff } from "../ui/fonts"

export default function Modal({ openModal }: { openModal?: boolean }) {
    const [open, setOpen] = useState(openModal ?? true)

    return (
        <div>
            {/* <button
                onClick={() => setOpen(true)}
                className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20"
            >
                Open dialog
            </button> */}
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-blue-100/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed top-[22%] sm:left-[15%] lg:left-[33%] left-0 z-10 w- overflow-y-auto">
                    <div className="flex min-h-full items-center text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div className="sm:flex sm:items-start">
                                <video autoPlay loop muted className=" rounded-2xl" >
                                    <source src="/love.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="absolute left-1/3 bottom-0 px-4 py-3">
                            <p className={`${dynaPuff.className} text-center text-orange-400 text-4xl shadow-orange-400 pb-3 animate-ping`}>923</p>
                                <Link href="/hbd">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="inline-flex w-full justify-center rounded-md bg-rose-400 animate-bounce hover:cursor-pointer px-3 py-2 text-sm font-semibold text-white hover:bg-red-400"
                                    >
                                        Love You! ❤️
                                    </button>
                                </Link>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
