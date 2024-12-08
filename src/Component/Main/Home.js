import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
<>
<Header/>
  <Helmet>
          <title>Home page</title>
          <meta
            name="description"
            content="HOME"
      />  
  </Helmet>
  <main>
    <p>
    HOME
      👌
    </p>
  </main>
<Footer />
</>  )
}

export default Home
