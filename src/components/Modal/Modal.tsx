import React from 'react'

interface ModalProps {
	open: boolean
	setOpen: (bool: boolean) => void
	children: React.ReactNode
}
const handleContentClick = (
	e: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => {
	e.stopPropagation()
}
const Modal: React.FC<ModalProps> = ({ open, setOpen, children }) => {
	return (
		<div
			className={`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/50  duration-300 ${
				open ? 'opacity-100' : 'pointer-events-none opacity-0'
			}`}
			onClick={() => setOpen(false)}
		>
			<div
				className={`flex w-fit flex-col items-center justify-center space-y-10 rounded-md bg-white p-[20px] ease-in-out  ${
					open ? 'scale-100' : 'scale-0'
				}`}
				onClick={handleContentClick}
			>
				{children}
			</div>
		</div>
	)
}

export default Modal
