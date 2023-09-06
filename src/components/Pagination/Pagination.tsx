import React from 'react'

interface PaginationProps {
	count: number
	currentPage: number
	handleClick: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
	count,
	currentPage,
	handleClick,
}) => {
	const paginateItem = (num: number) => {
		return (
			<li
				key={num}
				className={`${
					num === currentPage ? 'pagination-item-active' : 'pagination-item'
				}`}
				onClick={() => handleClick(num)}
			>
				{num}
			</li>
		)
	}

	const dottedItem = () => (
		<li className='pagination-item pointer-events-none'>...</li>
	)

	return (
		<div className='mb-10 text-center sm:mb-0'>
			<ul className='flex h-10 flex-wrap items-center -space-x-px text-base'>
				<li
					className={`${
						currentPage === 1 ? 'pointer-events-none opacity-70' : ''
					} pagination-item rounded-l-lg`}
					onClick={() => handleClick(currentPage - 1)}
				>
					<span className='sr-only'>Previous</span>
					<svg
						className='h-3 w-3'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 6 10'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M5 1 1 5l4 4'
						/>
					</svg>
				</li>
				{count === 1 ? (
					paginateItem(count)
				) : currentPage < 5 ? (
					<>
						{Array.from({ length: count })
							.slice(currentPage, currentPage + 5)
							.map((_, idx) => paginateItem(idx + 1))}
						{dottedItem()}
						{paginateItem(count)}
					</>
				) : count - currentPage < 4 ? (
					<>
						{paginateItem(1)}
						{dottedItem()}
						{Array.from({ length: count }).map((_, idx) => {
							if (idx < count - 5) return
							return paginateItem(idx + 1)
						})}
					</>
				) : (
					<>
						{paginateItem(1)}
						{dottedItem()}
						{Array.from({ length: 3 }).map((_, idx) =>
							paginateItem(currentPage - 1 + idx),
						)}

						{dottedItem()}
						{paginateItem(count)}
					</>
				)}
				<li
					className={`${
						currentPage === count ? 'pointer-events-none opacity-70' : ''
					} pagination-item rounded-r-lg`}
					onClick={() => handleClick(currentPage + 1)}
				>
					<span className='sr-only'>Next</span>
					<svg
						className='h-3 w-3'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 6 10'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m1 9 4-4-4-4'
						/>
					</svg>
				</li>
			</ul>
		</div>
	)
}

export default Pagination
