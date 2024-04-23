'use client'
import React, { useState } from 'react'
import Image from 'next/image'

// Components
import Modal from '@/components/Modal'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'

// Types
import { cartItem } from '@/types/Cart'

// Store
import { useCartStore } from '@/store/cartStore'

interface CartItemProps {
	item: cartItem
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
	const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false)

	const { addItem, minusItem, deleteItem } = useCartStore((state) => ({
		cartItems: state.cartItems,
		addItem: state.addItem,
		minusItem: state.minusItem,
		deleteItem: state.deleteItem,
	}))

	const onClickPlus = () => {
		addItem(item)
	}
	const onClickMinus = () => {
		minusItem(item)
	}
	const onClickDelete = () => {
		deleteItem(item)
		setOpenDeleteItemModal(false)
	}

	return (
		<>
			<Modal open={openDeleteItemModal} setOpen={setOpenDeleteItemModal}>
				<ConfirmationModal
					message={`Do you really want to delete "${item.title}"?`}
					rejectOnClick={() => setOpenDeleteItemModal(false)}
					confirmOnClick={onClickDelete}
				/>
			</Modal>
			<div className='mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
				<Image
					alt={item.title}
					src={item.thumbnail}
					width={600}
					height={600}
					className='w-full rounded-lg sm:w-40'
				/>

				<div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
					<div className='mt-5 sm:mt-0'>
						<h2 className='text-lg font-bold text-gray-900'>{item.title}</h2>
						<p className='mt-1 text-xs text-gray-700'>{item.description}</p>
					</div>
					<div className='mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6'>
						<div className='flex items-center border-gray-100'>
							<button
								onClick={onClickMinus}
								className={`rounded-l bg-gray-100 px-3.5 py-1 duration-100  ${
									item.count === 1
										? 'pointer-events-none '
										: 'hover:bg-indigo-500 hover:text-indigo-50'
								}`}
							>
								-
							</button>
							<span className='flex h-7 w-7 items-center justify-center border bg-white outline-none'>
								{item.count}
							</span>

							<button
								onClick={onClickPlus}
								className=' rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-indigo-500 hover:text-indigo-50'
							>
								+
							</button>
						</div>
						<div className='flex items-center space-x-4'>
							<p className='text-sm'>${item.count * item.price}</p>
							<button onClick={() => setOpenDeleteItemModal(true)}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartItem
