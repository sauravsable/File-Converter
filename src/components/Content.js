import React from 'react'

export default function Content() {
  return (
    <>
    
    <div className='cards'>
      <div className="card1">
        <h2>Word to <span style={{color:'#FF0000'}}>PDF</span></h2>
        <input  className='input-field' type="file" />
        <button className='btn'>Submit</button>
      </div>

      <div className="card1">
        <h2>PDF to <span style={{color:'#6CB4EE'}}>Word</span></h2>
        <input  className='input-field' type="file" />
        <button className='btn'>Submit</button>
      </div>

      <div className="card1">
        <h2>Excel to <span style={{color:'#FF0000'}}>PDF</span></h2>
        <input  className='input-field' type="file" />
        <button className='btn'>Submit</button>
      </div>


      </div>

      <div className="cards cards2">
     <div className="card1">
        <h2>PDF to <span style={{color:'#17B169'}}>Excel</span></h2>
        <input  className='input-field' type="file" />
        <button className='btn'>Submit</button>
      </div>

      <div className="card1">
        <h2>PowerPoint to <span style={{color:'#FF0000'}}>PDF</span></h2>
        <input  className='input-field' type="file" />
        <button className='btn'>Submit</button>
      </div>

      <div className="card1">
        <h2>PDF to <span style={{color:'#FF4500'}}>PowerPoint</span></h2>
        <input  className='input-field' type="file" />
        <button className='btn'>Submit</button>
      </div>
      </div>
 
      </>
  )
}
