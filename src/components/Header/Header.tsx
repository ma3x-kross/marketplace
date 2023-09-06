'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Components
import Search from '@/components/Search'
import { useCartStore } from '@/store/cartStore'
import Categories from '@/components/Categories'

const Header = () => {
	const path = usePathname()

	const [cartCaption, setCartCaption] = useState<{
		totalPrice: number
		totalCount: number
	}>()

	const { totalPrice, totalCount } = useCartStore((state) => ({
		totalPrice: state.totalPrice,
		totalCount: state.totalCount,
	}))

	useEffect(() => {
		setCartCaption({ totalPrice, totalCount })
	}, [totalPrice, totalCount])

	return (
		<div className='my-6 flex flex-wrap items-center justify-center gap-4 rounded-md bg-indigo-400 p-5 text-gray-50 sm:justify-between'>
			<Link href='/' className='text-4xl font-bold'>
				Marketplace
			</Link>
			{path !== '/cart' && (
				<>
					{path === '/' && (
						<>
							{/* Search */}
							<Search />

							{/* Categories */}
							<Categories />
						</>
					)}

					{/* Cart button */}
					<Link
						className='flex h-[45px] w-[150px] cursor-pointer items-center justify-center divide-x  rounded-3xl bg-indigo-500 font-medium text-gray-50 hover:bg-indigo-700'
						href='/cart'
					>
						<span className='mr-2'>
							${cartCaption ? cartCaption.totalPrice : 0}
						</span>
						<div className='flex items-center gap-1'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='mb-[2px] ml-2 h-5 w-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
								/>
							</svg>
							<span>{cartCaption ? cartCaption.totalCount : 0}</span>
						</div>
					</Link>
				</>
			)}
		</div>
	)
}

export default Header
