import React from 'react'
import cs from '../styles/RequestForm.module.sass'
import Button from './Button'

interface I_Props{
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function RequestForm({isOpen,setIsOpen}: I_Props) {
	const submitHandler: React.FormEventHandler<HTMLFormElement> =
	e => {
		e.preventDefault()
		setIsOpen(false)
	}
	return (
		<div
		className={`${cs.requestForm}
					${isOpen && cs.requestForm__open}`}>
			<form
			onSubmit={submitHandler}
			className={cs.requestForm__form}>
				<input
				placeholder='Name'
				name='name'
				type="text"
				className={cs.requestForm__input}/>
				<input
				placeholder='E-mail'
				name='email'
				type="email"
				className={cs.requestForm__input}/>
				<Button
				className={cs.requestForm__button}
				action={()=>setIsOpen(false)}>
					Cancel
				</Button>
				<Button
				className={cs.requestForm__button}
				type="submit"
				action={e=>e}>
					Submit
				</Button>
			</form>
		</div>
	)
}

export default RequestForm
