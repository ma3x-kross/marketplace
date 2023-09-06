'use client'
import React, { useEffect, useState } from 'react'

// Store
import { useCartStore } from '@/store/cartStore'

// Types
import { cartItem } from '@/types/Cart'

// Components
import Loader from '@/components/Loader'
import PayUpBlock from '@/components/PayUpBlock'
import PaymentMethods from '@/components/PaymentMethods'
import Balance from '@/components/Balance'

const Payment = () => {
	const { cartItems, totalPrice } = useCartStore((state) => ({
		cartItems: state.cartItems,
		totalPrice: state.totalPrice,
	}))

	const [items, setItems] = useState<cartItem[]>([])
	const [price, setPrice] = useState(0)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setItems(cartItems)
		setPrice(totalPrice)
		setLoading(false)
	}, [cartItems])

	if (loading) return <Loader />

	return (
		<div className='mx-auto flex max-w-[1400px] flex-col gap-5'>
			<div className='flex flex-col items-center justify-between gap-3 sm:flex-row'>
				<h1 className='text-3xl font-bold'>Order placement</h1>
				<Balance />
			</div>

			<div className='justify-center px-6 md:flex md:gap-6 xl:px-0'>
				<PaymentMethods />
				<PayUpBlock items={items} price={price} />
			</div>
		</div>
	)
}

export default Payment
