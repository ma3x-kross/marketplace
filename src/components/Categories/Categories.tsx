import React, { useEffect, useRef, useState } from 'react'

// store
import { useFilterStore } from '@/store/filterStore'

// Constants
import { CATEGORIES } from '@/utils/Constants'

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

	const wrapperRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false)
		}

		const handleClickOutside = (e: MouseEvent) => {
			if (
				wrapperRef.current &&
				!e?.composedPath().includes(wrapperRef.current)
			) {
				setOpen(false)
			}
			document.addEventListener('keydown', handleKeyDown)
		}

		document.body.addEventListener('click', handleClickOutside)

		return () => {
			document.body.removeEventListener('click', handleClickOutside)
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	return (
		<div ref={wrapperRef} className='relative w-[300px] min-[450px]:w-[400px]'>
			<button
				className='mx-auto flex w-fit items-center justify-center gap-2 text-xl  font-medium outline-none transition-all duration-100 ease-in-out hover:text-indigo-700 md:text-2xl'
				onClick={() => setOpen(!open)}
			>
				<span>Categories</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={2.5}
					stroke='currentColor'
					className={`h-5 w-5 transform transition-transform duration-200 ${
						open ? 'rotate-180' : 'rotate-90'
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
				className={`absolute top-12 z-20 flex max-w-[400px] transform flex-wrap items-center justify-center gap-2 rounded-md bg-white p-4 pb-6 shadow-3xl transition-all duration-150 ease-in-out ${
					open ? 'opacity-100' : 'opacity-0'
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
