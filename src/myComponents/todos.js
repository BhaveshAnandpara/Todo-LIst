import React from 'react'
import Todo from './todo'

export default function Todos(props){

    return(
        <section className="Todo-section   flex-center">
            <span className='text-center' >Todos List</span>
            <div className="todo-Items flex-center ">

            { props.todoList.length === 0 ?"There is Nothing TO-DO" 
            :
                props.todoList.map( (todoItem) => {
                    return (
                        <>
                    <Todo todoList={todoItem} key={todoItem.srn} onDelete={()=>{props.onDelete(todoItem)}} />
                    
                        </>
                    )
                    })
            }

            </div>
        </section>
    )


}