import Image from 'next/image'
import React from 'react'

// Assets
import img from '@/assets/payment_check.webp'
import { usePaymentStore } from '@/store/paymentStore'

const PaymentMethods = () => {
	const { method, chooseMethod } = usePaymentStore((state) => ({
		method: state.paymentMethod,
		chooseMethod: state.choosePaymentMethod,
	}))



	return (
		<div className='md:w-2/3 mb-3'>
			<div className='flex flex-col gap-2'>
				<h2 className='text-xl text-gray-400'>Choose a payment method</h2>
				<div
					onClick={() => chooseMethod('balance')}
					className={`hover:border-3 flex cursor-pointer flex-col rounded-lg border-2 border-indigo-300 p-5 hover:border-indigo-500 ${
						method === 'balance' && 'border-3 border-indigo-500'
					}`}
				>
					<h3 className='text-lg font-medium'>Coins</h3>
					<p className='text-gray-400'>Payment from balance coins</p>
				</div>
				<div
					onClick={() => chooseMethod('card')}
					className={`hover:border-3 flex cursor-pointer flex-col gap-2 rounded-lg border-2 border-indigo-300 p-5 hover:border-indigo-500 ${
						method === 'card' && 'border-3 border-indigo-500'
					}`}
				>
					<h3 className='text-lg font-medium'>Bank card online</h3>
					<Image alt='payment_check' src={img} />
				</div>
			</div>
		</div>
	)
}

export default PaymentMethods
