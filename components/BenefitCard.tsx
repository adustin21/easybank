import React from 'react'
import cs from '../styles/BenefitCard.module.sass'

interface I_Props{
	className?: string
}

function BenefitCard({className}: I_Props) {
	return (
		<div className={`${cs.card} ${className || ""}`}>
			<div
			style={{backgroundImage: "url(/images/icon-online.svg)"}}
			className={cs.card__icon}/>
			<h3 className={cs.card__header}>Online Banking</h3>
			<p className={cs.card__text}>
			Our modern web and mobile applications
			allow you to keep track of your finances
			wherever you are in the world.
			</p>
		</div>
	)
}

export default BenefitCard
