import React from 'react'
import { urlFor } from '../sanity/imageBuilder'
import cs from '../styles/BenefitCard.module.sass'
import { I_Benefit } from '../types/benefits'

interface I_Props{
	className?: string,
	benefit: I_Benefit
}

function BenefitCard({className, benefit}: I_Props) {
	return (
		<div className={`${cs.card} ${className || ""}`}>
			<div
			style={{backgroundImage: `url(${urlFor(benefit.icon.asset._ref).url()}`}}
			className={cs.card__icon}/>
			<h3 className={cs.card__header}>{benefit.title}</h3>
			<p className={cs.card__text}>{benefit.text}</p>
		</div>
	)
}

export default BenefitCard
