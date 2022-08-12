import React from 'react'
import cs from '../styles/Blog.module.sass'
import BlogCard from './BlogCard'

interface I_Props{}

function Blog({}: I_Props) {
	const temp = [0,1,2,3]
	return (
		<div className={cs.blog}>
			<h2 className={cs.blog__header}>Latest Articles</h2>
			<div className={cs.blog__cards}>
			{temp.map(card=><BlogCard className={cs.blog__card} key={card}/>)}
			</div>
		</div>
	)
}

export default Blog
