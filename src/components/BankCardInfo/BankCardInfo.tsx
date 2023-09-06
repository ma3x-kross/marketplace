import React from 'react'

// Constants
import { CARD_YEARS, MONTHS } from '@/utils/Constants'

const BankCardInfo = () => {
	return (
		<>
			<div className='mb-3'>
				<label className='mb-2 ml-1 text-sm font-bold'>Name on card</label>
				<div>
					<input
						className='mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none'
						placeholder='John Smith'
						type='text'
						required
					/>
				</div>
			</div>
			<div className='mb-3'>
				<label className='mb-2 ml-1 text-sm font-bold'>Card number</label>
				<div>
					<input
						className='mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none'
						placeholder='0000 0000 0000 0000'
						type='text'
						required
					/>
				</div>
			</div>
			<div className='-mx-2 mb-3 flex items-end'>
				<div className='w-1/2 px-2'>
					<label className='mb-2 ml-1 text-sm font-bold'>Expiration date</label>
					<div>
						<select className='form-select mb-1 w-full cursor-pointer rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none'>
							{MONTHS.map((month) => (
								<option key={month} value={month}>
									{month}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className='w-1/2 px-2'>
					<select className='form-select mb-1 w-full cursor-pointer rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none'>
						{CARD_YEARS.map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className='mb-10'>
				<label className='mb-2 ml-1 text-sm font-bold'>Security code</label>
				<div>
					<input
						className='mb-1 w-32 rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none'
						placeholder='000'
						type='text'
						required
					/>
				</div>
			</div>
		</>
	)
}

export default BankCardInfo
