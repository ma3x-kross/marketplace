import React from 'react'

interface DeleteItemModalProps {
	title: string
	onClickYes: () => void
	onClickNo: () => void
}

const DeleteItemModal: React.FC<DeleteItemModalProps> = ({
	title,
	onClickYes,
	onClickNo,
}) => {
	return (
		<div>
			<h3 className='font medium mb-4 text-center text-2xl'>
				Do you really want to delete &quot;{title}&quot;?
			</h3>
			<div className='flex items-center justify-center gap-2'>
				<button
					onClick={onClickYes}
					className='min-w-[100px] rounded-lg bg-indigo-500 px-5 py-2 text-center text-sm font-medium text-white outline-none hover:bg-indigo-700'
				>
					No
				</button>
				<button
					onClick={onClickNo}
					className='min-w-[100px] rounded-lg  bg-indigo-500 px-5 py-2 text-center text-sm font-medium text-white outline-none hover:bg-indigo-700'
				>
					Yes
				</button>
			</div>
		</div>
	)
}

export default DeleteItemModal
