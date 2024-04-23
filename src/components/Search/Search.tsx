import React, { useCallback, useEffect, useRef, useState } from 'react'

// Other libraries
import debounce from 'lodash.debounce'
import { useFilterStore } from '@/store/filterStore'

const Search = () => {
	// const setSearchValue = useFilterStore((state) => state.setSearchValue)

	const { searchValue, setSearchValue } = useFilterStore((state) => ({
		searchValue: state.searchValue,
		setSearchValue: state.setSearchValue,
	}))

	const [value, setValue] = useState('')

	useEffect(() => {
		if (!searchValue) {
			setValue('')
		}
	}, [searchValue])

	const inputRef = useRef<HTMLInputElement>(null)

	const updateSearchValue = useCallback(
		debounce((value: string) => {
			setSearchValue(value)
		}, 300),
		[],
	)
	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)
		updateSearchValue(value)
	}

	const onClickClear = () => {
		setValue('')
		setSearchValue('')
		inputRef?.current?.focus()
	}

	return (
		<div className='w-[300px] lg:w-[500px]'>
			<label
				htmlFor='default-search'
				className='sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'
			>
				Search
			</label>
			<div className='relative'>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
					<svg
						className='h-4 w-4 text-gray-500 dark:text-gray-400'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 20 20'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
						/>
					</svg>
				</div>

				<input
					ref={inputRef}
					id='default-search'
					className='block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3  pl-10 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-indigo-500'
					placeholder='Search Products...'
					value={value}
					onChange={onChangeInput}
				></input>
				{value && (
					<svg
						onClick={onClickClear}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2}
						stroke='currentColor'
						className='button-pointing absolute right-3 top-3 h-5 w-5 cursor-pointer'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				)}
			</div>
		</div>
	)
}

export default Search
