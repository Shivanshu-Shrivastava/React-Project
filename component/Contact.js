import React, { Component } from 'react'
import NavbarWIMG from './NavbarWIMG'
import coimg from './20.jpg'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <NavbarWIMG />
                <div style={{ height: 100 + 'vh' }} className='card  mt-4'>
                    <div className='card-body container'>
                        <div className='row'>
                            <div className='col-md-6  orer-sm-2  col-sm-12 my-auto '>
                                <h2 style={{ color: '#959cf7' }} className='font-normal subpixel-antialiased '>Contact Us</h2>
                                <h4 className='font-extralight subpixel-antialiased ' >I'll make sure Everything is <strong style={{ color: '#91b4f9' }}>Okay </strong>
                                    <span className="material-icons animate-bounce text-3xl text-blue-400">
                                        thumb_up_off_alt
                                    </span></h4>
                                <form className='mt-4'>
                                    <h4 style={{ color: '#959cf7' }} className='font-normal subpixel-antialiased '>Fill This Form</h4>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label font-mono text-muted">Full Name</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="xyz" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label font-mono text-muted">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label font-mono text-muted">What Message do You want to Share</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                                    </div>
                                    <button type='button' className='butn butn-blue  d-block mx-auto w-50'>Submit</button>
                                </form>

                            </div>
                            <div className='col-md-6 d-s-none col-sm-12 '>
                                <span> <img style={{ maxHeight: 522 + 'px' }} className='animate-bounc img-fluid fill-current' src={coimg} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
