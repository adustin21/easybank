import Image from 'next/image'
import React from 'react'
import cs from '../styles/Poster.module.sass'
import Button from './Button'

interface I_Props {
  openRequestForm: Function
}

function Poster({openRequestForm}: I_Props) {
	return (
		<div className={cs.poster}>
      <div className={cs.poster__cover}>
		<div className={cs.poster__mockups}>
        <Image
		width="767px"
		height="939px"
        src="/images/image-mockups.png"
        alt="Screenshots of the Easybank mobile application"/>
		</div>
      </div>
      <article className={cs.poster__article}>
        <h1 className={cs.poster__header}>
            Next generation digital banking
        </h1>
        <p className={cs.poster__text}>
          Take your financial life online. Your Easybank account
          will be a one-stop-shop for spending, saving, budgeting,
          investing, and much more.
        </p>
    	<Button
		action={()=>openRequestForm()}
		className={cs.poster__inviteButton}>
			Request Invite
		</Button>
      </article>

		</div>
	)
}

export default Poster
