import React from 'react'

interface GrowlProps {
	message: string
	type: 'Success' | 'Error'
}

const Growl: React.FC<GrowlProps> = ({ message, type }) => {
	return (
		<div className='fixed bottom-10 left-10 z-[999] '>
			<div
				className={`mb-4 rounded-lg bg-green-50  p-4 text-sm dark:bg-gray-800 ${
					type === 'Success'
						? 'bg-green-50 text-green-800 dark:text-green-400'
						: 'bg-red-50 text-red-800 dark:text-red-400'
				} `}
				role='alert'
			>
				<span className='font-medium'>{type}! </span>
				{message}
			</div>
		</div>
	)
}

export default Growl
