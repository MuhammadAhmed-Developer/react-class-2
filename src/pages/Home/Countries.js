import React from 'react'
import Buttonlight from '../../components/Buttons/Buttonlight'
import { countries } from '../../data/Countries'

export default function Countries() {

  return (
    <div className='py-5 bg-secondary fruits '>
    <div className="container text-center">
        <div className="row">
            <div className="col">
                <h1 className='text-center'>This is our countries section</h1>
                <ul>
                    {countries.map((country, i)=>{
                     return <li key={i}>{i+1+': '}{country}</li>
                    })}
                </ul>
                <Buttonlight bg="info" icon='facebook' text='Facebook'/>
                <Buttonlight  icon = 'trash' text='Delete'/>
             </div>
        </div>
    </div>
</div>
  )
}
