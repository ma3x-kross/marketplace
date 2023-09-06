import { CATEGORIES } from '@/utils/Constants'
import { create } from 'zustand'

interface FilterState {
	category: string
	searchValue: string
	currentPage: number
	setCategory: (value: string) => void
	setSearchValue: (value: string) => void
	setCurrentPage: (page: number) => void
}

export const useFilterStore = create<FilterState>((set) => ({
	category: CATEGORIES[0],
	searchValue: '',
	currentPage: 1,
	setCategory: (value: string) =>
		set({ category: value, searchValue: '', currentPage: 1 }),
	setSearchValue: (value: string) =>
		set({ searchValue: value, category: CATEGORIES[0], currentPage: 1 }),
	setCurrentPage: (page: number) => set({ currentPage: page }),
}))
