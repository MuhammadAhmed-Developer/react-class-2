import React from 'react'
import Buttonlight from '../../components/Buttons/Buttonlight'
export default function Events() {


 const handleSubmit = (event) => {
  event.preventDefault()
    alert('working')
    
 }


  return (
    <div className='py-5 bg-danger fruits '>
    <div className="container text-center">
        <div className="row">
            <div className="col">
                <h1 className='text-center'>This is our Events section</h1>
                 <form >
                    <input type="text"  className='form-control mb-2' placeholder='Enter Your Name'/>
                   <button className='btn btn-info' onClick={handleSubmit}><i className='bi bi-send'></i> Submit</button>
                </form>
             </div>
             <p style={{color: 'yellow', fontSize: '30px', backgroundColor: 'red', marginTop: 8}}>Lorem ipsum dolor sit.</p>
        </div>
    </div>
</div>
  )
}
