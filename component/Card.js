import React from 'react'
import ModalComm from './ModalComm'

function Card() {
    return (

        <div className="card"  >
            <div className="card-body" style={{paddingTop:'unset',paddingBottom:'unset'}}>
                <p className="card-title font-mono">Shivanshu</p>
                <div style={{marginBottom:0.75+'rem'}} className='textforcard '>
                    <span className='card-test text-center d-block'>Hello World!</span>
                </div>
                <span className='font-mono cursor-pointer' data-toggle="modal" data-target="#exampleModalLong">Comments</span>
              <ModalComm />
        
               
                
            </div>
        </div>

    )
}

export default Card
