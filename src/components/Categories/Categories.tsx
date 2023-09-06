import React, { useState } from 'react'

// Constants
import { CATEGORIES } from '@/utils/Constants'
import { useFilterStore } from '@/store/filterStore'

const Categories = () => {
	const { category, setCategory } = useFilterStore((state) => ({
		category: state.category,
		setCategory: state.setCategory,
	}))

	const [open, setOpen] = useState(false)

	const onClickCategory = (category: string) => {
		setCategory(category)
		setOpen(false)
	}

	return (
		<div className='relative w-[300px] min-[450px]:w-[400px]'>
			<button
				className='mx-auto flex w-fit items-center justify-center gap-2  text-2xl font-medium hover:text-indigo-700'
				onClick={() => setOpen(!open)}
			>
				Categories
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={2.5}
					stroke='currentColor'
					className={`h-5 w-5 transform transition-transform duration-200 ${
						open ? 'rotate-180' : 'rotate-0'
					}`}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M4.5 15.75l7.5-7.5 7.5 7.5'
					/>
				</svg>
			</button>

			<div
				className={`shadow-3xl absolute top-12 z-20 flex max-w-[400px] transform flex-wrap items-center justify-center rounded-md bg-white p-4 pb-4 transition duration-200 ease-in-out ${
					open ? 'scale-100' : 'scale-0'
				}   `}
			>
				{CATEGORIES.map((item) => (
					<button
						key={item}
						onClick={() => onClickCategory(item)}
						className={`${
							category === item ? 'active-category-item' : 'category-item'
						}`}
					>
						{item}
					</button>
				))}
			</div>
		</div>
	)
}

export default Categories
