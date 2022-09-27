import React, { useState } from 'react'
import cs from '../styles/RequestForm.module.sass'
import Button from './Button'

interface I_Props{
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function RequestForm({isOpen,setIsOpen}: I_Props) {
	const [submitted, setSubmitted] = useState<boolean>(false)
	const submitHandler: React.FormEventHandler<HTMLFormElement> =
	e => {
		e.preventDefault()
		setSubmitted(true)
		setTimeout(()=>{
			setIsOpen(false)
			setSubmitted(false)
		}, 2000)
	}
	return (
		<div
		className={`${cs.requestForm}
					${isOpen && cs.requestForm_open}
					${submitted && cs.requestForm_submitted}`}>
			<form
			onSubmit={submitHandler}
			className={cs.requestForm__form}>
				<input
				required
				placeholder='Name'
				name='name'
				id={cs.name}
				type="text"
				className={cs.requestForm__input}/>
				<input
				required
				pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
				placeholder='E-mail'
				name='email'
				id={cs.mail}
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
