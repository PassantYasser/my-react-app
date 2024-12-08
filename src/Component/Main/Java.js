import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet-async'

function java() {
  return (
    <>
  <Header />

  <main>
  <Helmet>
        <title>java page</title>
        <meta
          name="description"
          content="java"
    />  
  </Helmet>
    <p>
    JAVA
      👌
    </p>
  </main>
  
  <Footer />
</>  
      )
}

export default java