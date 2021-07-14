import React from 'react'

function Modal() {
    return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-mono" id="exampleModalLabel">Register Yourself</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div style={{ paddingTop: 'unset', paddingBottom: 'unset' }} className="modal-body">
                            <form>
                                <p className='font-mono mb-2 mt-2  text-muted'>Register Yourself By this </p>

                                <div className='row justify-content-center'>
                                    <span className='material-icons hover:text-red-400 shad text-red-600 cursor-pointer text-5xl'>help</span>
                                    <span className='material-icons hover:text-blue-800 shad mx-5 cursor-pointer text-5xl text-blue-900'>facebook </span>
                                    <span className='material-icons hover:text-blue-600 shad cursor-pointer text-5xl text-blue-400'>paid</span>
                                </div>
                            </form>
                            <form>
                                <p className='font-mono mt-2 text-muted'>Login</p>
                                <div className='d-flex flex-column mx-3'>
                                    <div className="form-group mb-3">
                                        <label for="exampleInputEmail1 " className='font-mono text-muted
                                            font-mono text-muted'> Full Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1 " className='font-mono text-muted
                                            font-mono text-muted'>Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>

                        
                            <button type="button" className="butn butn-blue mb-3 d-block mx-auto w-75 font-mono">Login</button>
            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Modal
