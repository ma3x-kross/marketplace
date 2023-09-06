import React, { FormEvent, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'

// Components
import Growl from '@/components/Growl'
import BankCardInfo from '@/components/BankCardInfo'

// Store
import { useCartStore } from '@/store/cartStore'

const CardPaymentForm = () => {
	const [openGrowl, setOpenGrowl] = useState(false)

	const router = useRouter()

	const clearCart = useCartStore((state) => state.clearCart)

	const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setOpenGrowl(true)
		setTimeout(() => {
			setOpenGrowl(false)
			clearCart()
			router.replace('/')
		}, 3000)
	}

	return (
		<>
			{openGrowl &&
				createPortal(
					<Growl type='Success' message='Payment made successfully' />,
					document.body,
				)}

			<form
				onSubmit={onSubmitForm}
				className='mx-auto w-full rounded-lg bg-white p-5 text-gray-700 md:min-w-[380px]'
			>
				<div className='w-full pb-5 pt-1'>
					<div className='mx-auto -mt-16 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-indigo-500 text-white shadow-lg'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							className='h-8 w-8'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
							/>
						</svg>
					</div>
				</div>
				<div className='mb-10'>
					<h1 className='text-center text-xl font-bold uppercase'>
						Secure payment info
					</h1>
				</div>

				<BankCardInfo />

				<button
					className='mx-auto block w-full max-w-xs rounded-lg bg-indigo-500 px-3 py-3 font-semibold text-white hover:bg-indigo-700 active:bg-indigo-500'
					type='submit'
				>
					PAY UP
				</button>
			</form>
		</>
	)
}

export default CardPaymentForm
