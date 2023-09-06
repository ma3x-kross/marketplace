import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

// Types
import { cartItem } from '@/types/Cart'
import { Product } from '@/types/Product'
import { persist } from 'zustand/middleware'

interface CartState {
	totalPrice: number
	totalCount: number
	cartItems: cartItem[]
	addItem: (item: Product) => void
	minusItem: (item: Product) => void
	deleteItem: (item: Product) => void
	clearCart: () => void
}

export const useCartStore = create<CartState>()(
	persist(
		immer((set) => ({
			totalPrice: 0,
			totalCount: 0,
			cartItems: [],

			// Actions
			addItem: (item: Product) =>
				set((state) => {
					const findItem = state.cartItems.find(
						(cartItem) => cartItem.id === item.id,
					)
					if (findItem) findItem.count++
					else {
						state.cartItems.push({ ...item, count: 1 })
					}
					state.totalPrice += item.price
					state.totalCount++
				}),
			minusItem: (item: Product) =>
				set((state) => {
					const findItem = state.cartItems.find(
						(cartItem) => cartItem.id === item.id,
					)
					if (findItem) {
						findItem.count--
						state.totalPrice -= item.price
						state.totalCount--
					}
				}),
			deleteItem: (item: Product) => {
				set((state) => {
					const findItemIndex = state.cartItems.findIndex(
						(cartItem) => cartItem.id === item.id,
					)
					const findItem = state.cartItems[findItemIndex]
					state.totalPrice -= findItem.count * findItem.price
					state.totalCount -= findItem.count
					state.cartItems.splice(findItemIndex, findItemIndex)
				})
			},
			clearCart: () => {
				set((state) => {
					state.totalCount = 0
					state.totalPrice = 0
					state.cartItems = []
				})
			},
		})),
		{ name: 'CartStore', version: 1 },
	),
)
