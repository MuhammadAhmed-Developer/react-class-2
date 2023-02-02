import React from 'react'

export default function Hero() {

// const sayMyName = function(param){
//   return "My name is " + param
// } 

// const sayMyName1 = (param) => {
//   return "My name  is " + param
// }

const sayMyName2 = param => "My name  is " + param
  return (
    <div className='py-5 bg-light'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className='text-center'>This is our Hero section</h1>
                    <p className='text-center fw-bold'>{sayMyName2('Muhammad Ahmed')}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
