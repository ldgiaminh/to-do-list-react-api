import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

function FormActions({ todos, completeTodo, removeTodo }) {
    return todos.map((todo, index) => (
        <tr className={todo.isDone ? 'fw-normal complete' : 'fw-normal'} key={index}>
            <td>
                <span className="ms-2">{todo.id}</span>
            </td>
            <td className="align-middle">
                <span >{todo.title}</span >
            </td>
            <td className="align-middle">
                <h6 className="mb-0"><span className={todo.isDone ? 'badge bg-success' : 'badge bg-danger'}>{todo.cate}</span></h6>
            </td>
            <td className="align-middle">
                <FaCheckCircle title="Done" className={todo.isDone ? 'text-success me-3 btn btn-success' : 'text-success me-3 btn'} onClick={() => completeTodo(todo.id)} />
                <RiDeleteBin6Fill title="Remove" className="text-warning btn" onClick={() => removeTodo(todo.id)} />
            </td>
        </tr>
    ))
}

export default FormActions