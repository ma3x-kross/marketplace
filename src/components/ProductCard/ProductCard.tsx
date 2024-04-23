import React from 'react'
import Image from 'next/image'

// Store
import { useCartStore } from '@/store/cartStore'

// Types
import { Product } from '@/types/Product'
import Button from '../Button/Button'

interface ProductCardProps {
	product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const addProduct = useCartStore((state) => state.addItem)

	const onClickAddProduct = (product: Product) => {
		addProduct(product)
	}

	return (
		<div className='w-full  max-w-[300px]  rounded-lg border border-gray-200 bg-white shadow '>
			<Image
				alt={product.title}
				src={product.thumbnail}
				width='300'
				height='150'
				className='h-[150px] w-[300px] object-fill'
			/>
			<div className='mt-5 px-5 pb-5'>
				<h5 className='truncate text-xl font-semibold tracking-tight text-gray-900'>
					{product.title}
				</h5>

				<div className='flex items-center justify-between'>
					<span className='text-3xl font-bold text-gray-900 '>
						${product.price}
					</span>
					<Button onClick={() => onClickAddProduct(product)}>
						Add to cart
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
