'use client'
import React from 'react'

// Components
import ProductCard from '@/components/ProductCard'
import Pagination from '@/components/Pagination'
import Loader from '@/components/Loader'

// Types
import { ProductResponse } from '@/types/Product'

// Other libraries
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useFilterStore } from '@/store/filterStore'

const Products = () => {
	const { searchValue, category, page, setPage } = useFilterStore((state) => ({
		searchValue: state.searchValue,
		category: state.category,
		page: state.currentPage,
		setPage: state.setCurrentPage,
	}))

	const fetchProducts = async () => {
		const url = `https://dummyjson.com/products/${
			searchValue || category === 'All categories'
				? `search?q=${searchValue}`
				: `category/${category}?`
		}&skip=${(page - 1) * 8}&limit=8`
		const { data } = await axios.get<ProductResponse>(url)
		return data
	}

	const { data, isLoading, isError } = useQuery({
		queryKey: ['products', page, searchValue, category],
		queryFn: fetchProducts,
		keepPreviousData: true,
	})

	console.log(data)

	if (isLoading) return <Loader />
	if (isError) return <h3>Error</h3>

	return (
		<div className='flex flex-col gap-5'>
			{/* Gallery */}
			<div className='flex flex-col content-center items-center gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
				{data.products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			{/* Pagination */}
			<Pagination
				count={Math.ceil(data.total / 8)}
				currentPage={page}
				handleClick={setPage}
			/>
		</div>
	)
}

export default Products
