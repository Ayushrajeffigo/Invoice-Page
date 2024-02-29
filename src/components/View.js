import React from 'react'
import Border from './Border'
import UpperBorder from './UpperBorder'

export default function View() {
  return (
    <>
    <div class=" align-items-start" style={{ display: "inline" }}>
    <UpperBorder/>
      <div style={{ display: "inline" }}>
        <Border />
        
        Invoice View 
    </div>
    </div>
  </>
  

  )
}
