import React from 'react'
import cs from '../styles/Button.module.sass'

interface I_Props extends React.PropsWithChildren{
	className?: string
	action: React.MouseEventHandler,

}

function Button({children, action, className}: I_Props) {
	return (
		<button
		onClick={action}
		className={`${cs.button} ${className || ""}`}>
			{children}
		</button>
	)
}

export default Button
