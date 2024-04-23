import React from 'react'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
	className,
	onClick,
	children,
}) => {
	return (
		<button
			onClick={onClick}
			className={`min-w-[100px] rounded-lg  bg-indigo-500 px-5 py-2 text-center text-sm font-medium text-white outline-none hover:bg-indigo-700 ${className}`}
		>
			{children}
		</button>
	)
}

export default Button
