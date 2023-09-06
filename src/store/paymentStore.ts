import { create } from 'zustand'

interface PaymentState {
	balance: number
	paymentMethod: 'balance' | 'card'
	choosePaymentMethod: (method: 'balance' | 'card') => void
	updateBalance: (value: number) => void
}

export const usePaymentStore = create<PaymentState>((set) => ({
	balance: 0,
	paymentMethod: 'balance',
	choosePaymentMethod: (method: 'balance' | 'card') =>
		set({ paymentMethod: method }),
	updateBalance: (value: number) =>
		set((state) => ({ balance: (state.balance += value) })),
}))
