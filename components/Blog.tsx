import React from 'react'
import cs from '../styles/Blog.module.sass'
import { I_Post } from '../types/post'
import BlogCard from './BlogCard'

interface I_Props{
	posts: I_Post[]
}

function Blog({posts}: I_Props) {
	return (
		<div className={cs.blog}>
			<h2 className={cs.blog__header}>Latest Articles</h2>
			<div className={cs.blog__cards}>
			{posts.map(post=><BlogCard
						post={post}
						className={cs.blog__card}
						key={post._id}/>)
			}
			</div>
		</div>
	)
}

export default Blog
