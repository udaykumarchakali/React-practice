import React from 'react'

const Form = () => {
  return (
   
    <div>
        <Form className=''>
        <h1 className='h9'>Job Form</h1>
        <label className='label1'>Name</label><br></br>
        <input className='input1' type="text" placeholder='enter the Name' /><br></br>
        <label className='label1'>Phone</label><br></br>
        <input  className='input1' type="number" placeholder='enter the NUmber'/><br></br>
        <label className='label1'>email</label><br></br>
        <input className='input1' type="email" placeholder='enter the Email'/><br></br>
        <label className='label1'>Resume</label><br></br>
      <input  className='input1' type='file' placeholder='file upload'/><br></br>
        <button className='btn1'>Submit</button>
        </Form>
    </div>
  )
}
export default Form