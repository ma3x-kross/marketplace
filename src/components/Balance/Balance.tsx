import React, { useState } from 'react'

// Store
import { usePaymentStore } from '@/store/paymentStore'
// Components
import Modal from '@/components/Modal'
import TopUpBalanceForm from '@/components/TopUpBalance'

const Balance = () => {
	const [openTopUpForm, setOpenTopUpForm] = useState(false)

	const balance = usePaymentStore((state) => state.balance)

	return (
		<>
			<Modal open={openTopUpForm} setOpen={setOpenTopUpForm}>
				<TopUpBalanceForm />
			</Modal>
			<div className='flex items-center gap-3 text-xl font-medium'>
				<span>Balance: {balance} coins</span>
				<button
					onClick={() => setOpenTopUpForm(true)}
					className=' rounded-[50%] bg-indigo-500 p-1 font-medium text-indigo-50 hover:bg-indigo-700'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='h-6 w-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 4.5v15m7.5-7.5h-15'
						/>
					</svg>
				</button>
			</div>
		</>
	)
}

export default Balance
