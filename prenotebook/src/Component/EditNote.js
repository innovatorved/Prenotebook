import React, { useState } from 'react';

export default function EditNote() {

    const [note, setnote] = useState({
        "title" : "",
        "description" : "",
        "tag" : ""
    })

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="form-group">
                                    <label htmlFor="etitle">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" placeholder="Title"  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="edescription">Description</label>
                                    <textarea type="text" className="form-control" id="edescription" name="edescription" placeholder="Description" ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="etag">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" placeholder="Description"  />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}