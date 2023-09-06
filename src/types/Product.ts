export interface Product {
	id: number
	title: string
	description: string
	price: number
	thumbnail: string
}

export interface ProductResponse {
	products: Product[]
	total: number
	skip: number
	limit: number
}
