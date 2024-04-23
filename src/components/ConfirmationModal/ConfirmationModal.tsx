import React from 'react'

// components
import Button from '@/components/Button'

interface ConfirmationModalProps {
	message: string
	confirmOnClick: () => void
	rejectOnClick: () => void
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
	message,
	confirmOnClick,
	rejectOnClick,
}) => {
	return (
		<div>
			<h3 className='font medium mb-4 text-center text-2xl'>{message}</h3>
			<div className='flex items-center justify-center gap-2'>
				<Button onClick={rejectOnClick}>No</Button>
				<Button onClick={confirmOnClick}>Yes</Button>
			</div>
		</div>
	)
}

export default ConfirmationModal
