import React from 'react'
import cs from '../styles/Benefits.module.sass'
import BenefitCard from './BenefitCard'

interface I_Props{}

function Benefits({}: I_Props) {
	const temp = [0,1,2,3]
	return (
		<div className={cs.benefits}>
			<h2 className={cs.benefits__header}>Why choose Easybank?</h2>
			<p className={cs.benefits__text}></p>
			<div className={cs.benefits__cards}>
			{temp.map(card=><BenefitCard className={cs.benefits__card} key={card}/>)}
			</div>
		</div>
	)
}

export default Benefits
