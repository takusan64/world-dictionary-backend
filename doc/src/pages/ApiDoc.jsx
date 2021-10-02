import React from 'react'
import { RedocStandalone } from 'redoc';

const ApiDoc = () => {

  return (
    <>
      <RedocStandalone
        specUrl={`${process.env.PUBLIC_URL}/openapi.json`}
        options={{
          nativeScrollbars: true
        }}
      />
    </>
  )
}

export default ApiDoc