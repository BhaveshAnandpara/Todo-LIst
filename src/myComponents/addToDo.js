import React, {useState } from 'react';


export default function AddToDo({addToDo}) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e)=>{

        e.preventDefault() //prevents reloading of page

        if( !title )
            alert("Title cannot be Blank")
        else if( !desc )
            alert("Description cannot be Blank")
        else{
            addToDo(title , desc)
            setTitle("")
            setDesc("")
        }

    }

    return (
    <div className='container border-green'>
        <h3 className='text-center my-3'> Add a ToDo </h3>
        <form onSubmit={submit} > 
            <div className="mb-3">
                <label htmlFor="title" className="form-label">ToDo Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control title-input" id="title"/>
            </div>

            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <textarea type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control desc-input" id="desc" />
            </div>
 
            <button type="submit"  className="btn btn-success btn-sm">Submit</button>
        </form>
    </div>);
}
