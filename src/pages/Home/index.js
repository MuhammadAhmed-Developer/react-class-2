import React from 'react'
import Fruits from './Fruits'
import Hero from './Hero'
import Services from './Services'
import Countries  from './Countries'
import Events from './Events'
export default function index() {
  return (
    <div id ='Home'>
     <Hero/>
     <Countries />
     <Services/>
     <Events/>
     <Fruits/>
     
    </div>
  )
}
