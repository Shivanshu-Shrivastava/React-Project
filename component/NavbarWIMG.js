import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'

function NavbarWIMG() {
    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-light ">
          <div className='container  '>
            <Link className="navbar-brand font-mono" to="/">
            <span class="material-icons animate-bounce mx-1 font20">
                flutter_dash
              </span>
              React</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link butn cob" to="/">
                    <span className='material-icons animate-pulse mx-1 font20'>home</span><span className='font12 font-mono subpixel-antialiased tracking-normal'>Home</span> <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link butn cob mx-lg-4" to="/contact">
                    <span class="material-icons animate-pulse mx-1 font20">
                      perm_contact_calendar
                    </span><span className='font12 font-mono subpixel-antialiased tracking-normal'>Contact</span> <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link butn cob" to="/post">
                    <span className='material-icons animate-pulse mx-1 font20'>send</span><span className='font12 font-mono subpixel-antialiased tracking-normal'>Post</span> <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active" data-toggle="modal" data-target="#exampleModal">
                  <span className="nav-link butn cob" >
                    <span className='material-icons animate-pulse mx-1 font20'>how_to_reg</span><span className='font12 font-mono subpixel-antialiased tracking-normal'>register</span> <span className="sr-only">(current)</span></span>
                </li>
                <Modal />
                


              </ul>

            </div>
          </div>
          
        </nav>
        </div>
    )
}

export default NavbarWIMG
