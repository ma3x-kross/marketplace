import Link from 'next/link'
import React, { useState } from 'react'

// Store
import { useCartStore } from '@/store/cartStore'

const Checkout = () => {
	const totalPrice = useCartStore((state) => state.totalPrice)

	return (
		<>
			<div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/4'>
				<Link
					href='/'
					className='mt-6 flex w-fit items-center bg-transparent py-1.5 font-medium text-indigo-500 hover:text-indigo-700'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='h-5 w-5'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 19.5L8.25 12l7.5-7.5'
						/>
					</svg>
					Back to products
				</Link>
				<hr className='my-4' />
				<div className='flex justify-between'>
					<p className='text-lg font-bold'>Total</p>
					<div className=''>
						<p className='mb-1 text-lg font-bold'>${totalPrice} USD</p>
					</div>
				</div>
				<Link
					href='/payment'
					className='mt-6 flex w-full justify-center rounded-md bg-indigo-500 py-1.5 font-medium text-indigo-50 hover:bg-indigo-700'
				>
					Check out
				</Link>
			</div>
		</>
	)
}

export default Checkout
