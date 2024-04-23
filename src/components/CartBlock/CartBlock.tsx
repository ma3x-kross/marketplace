'use client'
import React, { useEffect, useState } from 'react'

// Components
import CartItem from '@/components/CartItem'
import Loader from '@/components/Loader'
import Modal from '@/components/Modal'
import Checkout from '@/components/Checkout'
import EmptyCart from '@/components/EmptyCart'

// Types
import { cartItem } from '@/types/Cart'

// Store
import { useCartStore } from '@/store/cartStore'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'

const CartBlock = () => {
	const { cartItems, clearCart } = useCartStore((state) => ({
		cartItems: state.cartItems,
		clearCart: state.clearCart,
	}))

	const [openClearCartModal, setOpenClearCartModal] = useState(false)
	const [items, setItems] = useState<cartItem[]>([])
	const [loading, setLoading] = useState(true)

	const onClickClearCart = () => {
		clearCart()
		setOpenClearCartModal(false)
	}

	useEffect(() => {
		setItems(cartItems)
		setLoading(false)
	}, [cartItems])

	if (loading) return <Loader />

	return (
		<>
			<Modal open={openClearCartModal} setOpen={setOpenClearCartModal}>
				<ConfirmationModal
					message='Do you really want to empty your shopping cart?'
					rejectOnClick={() => setOpenClearCartModal(false)}
					confirmOnClick={onClickClearCart}
				/>
			</Modal>
			<div>
				{items.length !== 0 ? (
					<div className='mx-auto flex max-w-[1400px] flex-col gap-5'>
						<div className='flex justify-between'>
							<h1 className='flex items-center gap-2 px-2 text-3xl font-bold'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={2.5}
									stroke='currentColor'
									className='h-7 w-7'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
									/>
								</svg>
								Cart
							</h1>

							<button
								onClick={() => setOpenClearCartModal(true)}
								className='rounded-lg  bg-indigo-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 '
							>
								Clear cart
							</button>
						</div>
						<div className='  justify-center px-6 md:flex md:space-x-6 xl:px-0'>
							<div className='rounded-lg md:w-3/4'>
								{items.map((item) => (
									<CartItem key={item.id} item={item} />
								))}
							</div>
							{/*  Checkout  */}
							<Checkout />
						</div>
					</div>
				) : (
					<EmptyCart />
				)}
			</div>
		</>
	)
}

export default CartBlock
