import Link from 'next/link'
import React from 'react'

const EmptyCart = () => {
	return (
		<div className='mt-20 flex flex-col items-center gap-3'>
			<h1 className='text-3xl font-bold'>Cart is empty</h1>
			<p className='text-gray-500'>
				You have not added anything to your cart yet.
			</p>
			<p className='text-gray-500'>
				To add an item to your cart go back to the main page.
			</p>
			<Link
				href='/'
				className=' flex w-fit items-center bg-transparent py-1.5 font-medium text-indigo-500 hover:text-indigo-700'
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
		</div>
	)
}

export default EmptyCart
