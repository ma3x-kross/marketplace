import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

// Types
import { cartItem } from '@/types/Cart'

// Stores
import { usePaymentStore } from '@/store/paymentStore'
import { useCartStore } from '@/store/cartStore'

// Components
import Modal from '@/components/Modal'
import CardPaymentForm from '@/components/CardPaymentForm'
import Growl from '@/components/Growl'

interface PayUpBlockProps {
	items: cartItem[]
	price: number
}

const PayUpBlock: React.FC<PayUpBlockProps> = ({ items, price }) => {
	const router = useRouter()

	const [openModal, setOpenModal] = useState(false)
	const [openGrowl, setOpenGrowl] = useState(false)
	const [growlConf, setGrowlConf] = useState<{
		message: string
		type: 'Error' | 'Success'
	}>({
		message: '',
		type: 'Error',
	})

	const { method, balance, updateBalance } = usePaymentStore((state) => ({
		method: state.paymentMethod,
		balance: state.balance,
		updateBalance: state.updateBalance,
	}))

	const clearCart = useCartStore((state) => state.clearCart)

	const onClickPayUp = () => {
		{
			if (method === 'card') setOpenModal(true)
			else {
				if (balance < price) {
					setGrowlConf({
						type: 'Error',
						message: 'Not enough coins in the balance',
					})
					setOpenGrowl(true)
					setTimeout(() => {
						setOpenGrowl(false)
					}, 3000)
				} else {
					updateBalance(-price)
					setGrowlConf({
						type: 'Success',
						message: 'Payment made successfully',
					})
					setOpenGrowl(true)
					setTimeout(() => {
						setOpenGrowl(false)
						clearCart()
						router.replace('/')
					}, 3000)
				}
			}
		}
	}

	return (
		<>
			<Modal open={openModal} setOpen={setOpenModal}>
				<CardPaymentForm />
			</Modal>

			{openGrowl && <Growl type={growlConf.type} message={growlConf.message} />}

			<div className='flex flex-col gap-2 rounded-lg bg-white p-5 pl-7 shadow-md md:w-1/3'>
				<h3 className='text-xl font-bold text-gray-400'>Products</h3>
				<div className='flex flex-wrap gap-2'>
					{items.map((item) => (
						<div key={item.id} className=''>
							<Image
								alt={item.title}
								src={item.thumbnail}
								width={95}
								height={95}
								className=' mb-1 h-[95px] w-[95px] border border-gray-400 object-fill'
							/>
							<span className='tex-xs text-gray-400'>{item.count} pc.</span>
						</div>
					))}
				</div>
				<hr className='my-8 h-px border-0 bg-gray-300'></hr>
				<div className='flex items-center justify-between'>
					<span className='text-lg font-bold'>Amount:</span>
					<span className='text-xl'>
						${price} / {price} coins
					</span>
				</div>
				<button
					onClick={onClickPayUp}
					className=' mt-2 w-full rounded-md bg-indigo-500 py-1.5 font-medium text-indigo-50 hover:bg-indigo-700'
				>
					Pay Up
				</button>
			</div>
		</>
	)
}

export default PayUpBlock
