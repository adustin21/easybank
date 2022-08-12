import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity/imageBuilder'
import cs from '../styles/BlogCard.module.sass'
import { I_Post } from '../types/post'

interface I_Props{
	className?: string
	post: I_Post
}


function BlogCard({className, post}: I_Props) {
	const imageParams = {
		width: 600,
		height: 400
	}
	return (
		<div className={`${cs.card} ${className || ""}`}>
			<Image
			src={urlFor(post.cover.asset._ref)
					.width(imageParams.width)
					.height(imageParams.height)
					.url()}
			width={imageParams.width}
			height={imageParams.height}
			alt={post.title}/>
			<div className={cs.card__textBlock}>
				<h5 className={cs.card__author}>
					{post.author}
				</h5>
				<h4 className={cs.card__header}>
					{post.title}
				</h4>
				<p className={cs.card__text}>
					{post.previewText}
				</p>
			</div>
		</div>
	)
}

export default BlogCard
