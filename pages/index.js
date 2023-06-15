import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>I am Ryan, a normal human from the EARTH!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Just work for FREEDOM and Live OURLIFE forever." />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
