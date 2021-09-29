import React from 'react'
import { Link } from "react-router-dom"

const PageA = () => {

  return (
    <>
      <p><Link to="/pageb">to PageB</Link></p>
      <p>ページAにいます。</p>
    </>
  )
}

export default PageA