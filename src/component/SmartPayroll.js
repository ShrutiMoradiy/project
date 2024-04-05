import React from 'react';
import Link from "next/link";

export default function SmartPayroll() {
  return (
    <>
        <section className='relative overflow-hidden py-7'> 
            <div className='container'>
                <div className='row items-center flex'>
                    <div className='col-lg-5'>
                        <div className='mb-5'>
                            <span className='bg-[#0055ff1f] opacity-[12%] w-[48px] h-[48px]'></span>
                            <h1 className='text-[1.78125rem] font-semibold'>Smart Payroll. Paying your people couldn't be easier</h1>
                            <p className='text[#8a90a2!important] leading-6 my-4'>
                            You can modify your pages with drag-dropping , can import demos with just ” One Click” and can modify theme setting easy-to-use options panel.
                            </p>
                            <Link href='/'></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
