import React, { useRef } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done';

export default function Todo(props){

    const title = useRef()
    const desc = useRef()
    


    return(
        <div className=" container todo  flex-center ">

            <div class="text-container">
                <h4 ref={title} >{props.todoList.title}</h4>
                <p ref={desc} >{props.todoList.descrpition}</p>
            </div>

            <div class="btn-container">
                <button className="done"  >
                    <DoneIcon className='icon'/>
                </button>
                <button className="delete" onClick={props.onDelete} >
                    <DeleteIcon className='icon'/>
                </button>
            </div>

        </div>
    )


}