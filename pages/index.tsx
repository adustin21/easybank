import type { NextPage } from 'next'
import Head from 'next/head'
import Benefits from '../components/Benefits'
import Blog from '../components/Blog'
import Header from '../components/Header'
import Poster from '../components/Poster'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Easybank</title>
        <meta name="description"
        content="Take your financial life online. Your Easybank
        account will be a one-stop-shop for spending, saving,
        budgeting, investing, and much more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Poster />
      <Benefits />
      <Blog />



    </div>
  )
}

export default Home
