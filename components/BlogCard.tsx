import Image from 'next/image'
import React from 'react'
import cs from '../styles/BlogCard.module.sass'
import Cover from '../public/images/image-currency.jpg'

interface I_Props{
	className?: string
}

function BlogCard({className}: I_Props) {
	return (
		<div className={`${cs.card} ${className || ""}`}>
			<Image
			src={Cover} alt="Piles of currency on the table"/>
			<div className={cs.card__textBlock}>
				<h6 className={cs.card__author}>
					By Claire Robinson
				</h6>
				<h4 className={cs.card__header}>
					Receive money in any currency with no fees
				</h4>
				<p className={cs.card__text}>
				The world is getting smaller and we’re becoming
				more mobile. So why should you be forced to only
				receive money in a single
				</p>
			</div>
		</div>
	)
}

export default BlogCard
