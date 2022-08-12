import type { NextPage } from 'next'
import Head from 'next/head'
import Benefits from '../components/Benefits'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Poster from '../components/Poster'
import { sanityClient } from '../sanity/client'
import { I_Benefit } from '../types/benefits'
import { I_Post } from '../types/post';

interface I_Props {
  posts: I_Post[],
  benefits: I_Benefit[]
}

const Home: NextPage<I_Props> = ({posts, benefits}) => {
  return (
    <div>
      <Head>
        <title>Easybank</title>
        <meta name="description"
        content="Take your financial life online. Your Easybank
        account will be a one-stop-shop for spending, saving,
        budgeting, investing, and much more." />
        <link rel="icon" href="/images/favicon.ico" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://easybank-by-adustin21.netlify.app"/>
        <meta property="og:title" content="Easybank - Your Only Finance Tool"/>
        <meta property="og:description" content="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."/>
        <meta property="og:image" content="/images/slice.png"/>
      </Head>
      <Header />
      <Poster />
      <Benefits benefits={benefits}/>
      <Blog posts={posts}/>
      <Footer />
    </div>
  )
}


export async function getStaticProps() {
  const posts = await sanityClient
    .fetch('*[_type == "post"] | order(_createdAt asc)')
  const benefits = await sanityClient
    .fetch('*[_type == "benefit"] | order(_createdAt asc)')
  return {
    props: {
      posts,
      benefits
    }
  }
}

export default Home
