import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet-async'

function Css() {
  return (
    <>
  <Header />

  <Helmet>
        <title>Css page</title>
        <meta
          name="description"
          content="CSS"
    />  
  </Helmet>

  <main>
    <p>
    CSS
      👌
    </p>
  </main>

  <Footer />
</>  )
}

export default Css