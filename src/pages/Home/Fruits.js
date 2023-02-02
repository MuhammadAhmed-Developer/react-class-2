import React from 'react'
import Buttonlight from '../../components/Buttons/Buttonlight'

export default function Fruits() {

    // Array Method
    const fruits = ["Apple", "Mango", "Orange", "Banana","Banana", "Strawbarry", "Peach"]
   
    // Destructuring

    const user = {firstName: "Muhammad", lastName: "Ahmed", country: "Pakistan", city: "Faisalabad"}
    const{firstName,lastName}= user

    let cgpa = 3.23

  return (
    <div className='py-5 bg-warning fruits'>
    <div className="container text-center">
        <div className="row">
            <div className="col">
                <h1 className='text-center'>This is our Fruits section</h1>
                <p className='text-center fw-bold'>User Name is: {firstName} {lastName}</p>
                <Buttonlight bg='dark' icon= 'messenger' text='Messenger'/>
                {/* terminal operetor */}
                <p className="text-center fw-bold text-success">{cgpa >= 3? "Brilliant":"Average"}</p>
                 <div className="text-center">
                    <ul>

                        {
                            fruits.map((fruit, i)=>{
                                return <li key={i}>{ i+1+ " : "}{fruit}</li>
 
                            })
                        }
                        {/* <li>Apple</li>
                        <li>Mango</li>
                        <li>Orange</li>
                        <li>Banana</li>
                        <li>Stawbarry</li> */}
                    </ul>
                 </div>
            </div>
        </div>
    </div>
</div>
  )
}
