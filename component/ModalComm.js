import React from 'react'
import Comment from './Comment'

function ModalComm() {
    return (
        <>



            <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header pb-0 border-b-0">
                            <span className="modal-title text-xl font-mono font-extralight" id="exampleModalLongTitle">Comments</span>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pt-0 max-h-screen overflow-x-auto">
                            <hr />
                            <Comment />
                            
                            <hr />
                            <hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr /><hr />
                            <Comment />
                            
                            <hr />

                        </div>
                        <div className=" mb-2 border-t-0">
                            <form className='d-flex justify-content-between '>
                                <div className="form-group mb-0 flex-grow-1 mx-3">
                                    <input type="email" className="py-0 h-100 form-control font-mono" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write Something here." />
                                </div>
                                <button style={{margin:'unset'}} type="button" className="butn mr-3 butn-blue">Post</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalComm
