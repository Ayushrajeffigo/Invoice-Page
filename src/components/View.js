import React from 'react'
import Border from './Border'
import UpperBorder from './UpperBorder'
import Footer from './Footer'

export default function View() {
  return (
    <>
    <div class=" align-items-start" style={{ position:"absolute"}}>
    <UpperBorder/>
      <div style={{ position: "absolute" }}>
        <Border />
        Invoice View 
    </div>
    <Footer/>
    </div>
  </>
  

  )
}
