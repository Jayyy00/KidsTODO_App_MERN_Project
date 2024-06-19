import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
const TodoCards = ({title,body}) =>{
  return (
    <div className = "p-3 todo-card">
       <div>
             <h5>{title}</h5>
                 <p className="todo-card-p">
                       {body.split("",77)}...
                  </p>
        </div> 
           <div className="d-flex justify-content-around">
             <div>
                <GrDocumentUpdate className="card-icons"/>
             </div>
                <div>
                    <AiFillDelete className="card-icons"/>
                </div> 
           </div> 
    </div>
  )
}

export default TodoCards;