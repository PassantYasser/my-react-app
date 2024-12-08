import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet-async'

function Html() {
  return (
    <>
    <Header />
    <Helmet>
        <title>Html page</title>
        <meta
          name="description"
          content="HTML"
        />  
    </Helmet>

      <main>
        <p>
        HTML
          👌
        </p>
      </main>

    <Footer />
    </>  )
}

export default Html