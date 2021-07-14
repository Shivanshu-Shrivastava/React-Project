import React, { Component } from 'react'
import $ from 'jquery';
import NavbarWIMG from './NavbarWIMG'

export default function Post() {


   


    return (
        <div>
            <NavbarWIMG />
            <div style={{ height: 100 + 'vh' }} className='card mt-3'>
                <div className='card-body container'>
                    <form className='my-6'>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label text-muted font-mono text-xl d-block text-center">Post everything here.</label>
                            <textarea   className="form-control w-75 mx-auto" id="exampleFormControlTextarea1" rows="10"></textarea>
                            <span id='showdnone' className='font-mono d-none font-light'>We'll kept your Identity Safe</span>
                        </div>
                        <button type='button' className='butn butn-blue d-block mx-auto w-50'>Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

