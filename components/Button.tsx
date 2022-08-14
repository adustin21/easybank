import React from 'react'
import cs from '../styles/Button.module.sass'

interface I_Props extends React.PropsWithChildren{
	className?: string
	type?: "reset" | "submit" | "button"
	action: React.MouseEventHandler

}

function Button({children, action, className, type}: I_Props) {
	return (
		<button
		type={type || "button"}
		onClick={action}
		className={`${cs.button} ${className || ""}`}>
			{children}
		</button>
	)
}

export default Button
