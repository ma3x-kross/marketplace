import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PaymentState {
	balance: number
	paymentMethod: 'balance' | 'card'
	choosePaymentMethod: (method: 'balance' | 'card') => void
	updateBalance: (value: number) => void
}

export const usePaymentStore = create<PaymentState>()(
	persist(
		(set) => ({
			balance: 0,
			paymentMethod: 'balance',
			choosePaymentMethod: (method: 'balance' | 'card') =>
				set({ paymentMethod: method }),
			updateBalance: (value: number) =>
				set((state) => ({ balance: (state.balance += value) })),
		}),
		{ name: 'PaymentStore', version: 1 },
	),
)
