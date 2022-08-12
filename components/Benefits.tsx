import React from 'react'
import cs from '../styles/Benefits.module.sass'
import { I_Benefit } from '../types/benefits'
import BenefitCard from './BenefitCard'

interface I_Props{
	benefits: I_Benefit[]
}

function Benefits({benefits}: I_Props) {
	return (
		<div className={cs.benefits}>
			<h2 className={cs.benefits__header}>Why choose Easybank?</h2>
			<p className={cs.benefits__text}></p>
			<div className={cs.benefits__cards}>
			{benefits.map(card=><BenefitCard
									className={cs.benefits__card}
									benefit={card}
									key={card._id}/>)
			}
			</div>
		</div>
	)
}

export default Benefits
