import React, { PropsWithChildren } from 'react'
import cs from '../styles/Button.module.sass'

interface I_Props extends PropsWithChildren{}

function Button({children}: I_Props) {
	return (
		<a href="#" className={cs.button}>
			{children}
		</a>
	)
}

export default Button
