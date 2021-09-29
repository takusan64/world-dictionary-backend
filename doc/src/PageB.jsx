import React from 'react'
import { Link } from "react-router-dom"

const PageB = () => {

  return (
    <>
      <p><Link to="/">to PageA</Link></p>
      <p>ページBにいます。</p>
    </>
  )
}

export default PageB