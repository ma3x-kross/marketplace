import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Components
import Header from '@/components/Header'

// Utils
import ReactQueryProvider from '@/utils/ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Marketplace',
	description: 'Trial version of marketplace',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`bg-indigo-500 text-sm text-slate-300 ${inter.className}`}
			>
				<ReactQueryProvider>
					<div className='md:w-[calc(100vw -  100px)] container mx-auto my-5 min-h-[90vh] w-[calc(100vw-30px)] max-w-[1440px] rounded-md bg-gray-100 p-5 text-black'>
						<Header />
						{children}
					</div>
				</ReactQueryProvider>
			</body>
		</html>
	)
}
