import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FormActions from './FormActions';
import FormSubmit from './FormSubmit';

function FormTask() {
  const generateAPI = (endpoint) => {
    return {
      getAll: () => {
        return axios
          .get(`https://5f62b7ce67e195001625f17c.mockapi.io/api/${endpoint}`)
          .then((res) => res.data);
      },
      create: (data) => {
        return axios
          .post(
            `https://5f62b7ce67e195001625f17c.mockapi.io/api/${endpoint}`,
            data
          )
          .then((res) => res.data);
      },
      update: (id, data) => {
        return axios
          .put(
            `https://5f62b7ce67e195001625f17c.mockapi.io/api/${endpoint}/${id}`,
            data
          )
          .then((res) => res.data);
      },
      delete: (id) => {
        return axios
          .delete(
            `https://5f62b7ce67e195001625f17c.mockapi.io/api/${endpoint}/${id}`
          )
          .then((res) => res.data);
      }
    };
  };

  const [todos, setTodos] = useState([]);

  const API = {
    todoApp: generateAPI("todos"),
  };

  useEffect(() => {
    API.todoApp.getAll().then((data) => setTodos(data));
  });

  const addTodo = todo => {
    if ((!todo.tilte || /^\s*$./.test(todo.title)) && (!todo.cate || /^\s*$./.test(todo.cate))) {
      return;
    }
    // const newTodos = [todo, ...todos]

    // API.todoApp.create(todo).then((data) => setTodos(newTodos));

    API.todoApp.create(todo).then((response) => {
      const newTodos = [...todos, response]
      setTodos(newTodos)
    })

    // setTodos(newTodos)
  }

  const removeTodo = id => {
    const removeTodo = todos.filter(todo => todo.id !== id)

    // setTodos(removeTodo)

    API.todoApp.delete(id).then((data) => setTodos(removeTodo));

  }

  const completeTodo = id => {
    let todo1;
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
        todo1 = todo;
      }
      return todo;
    });

    API.todoApp.update(id, todo1).then((data) => setTodos(updatedTodos));
    
    // setTodos(updatedTodos);
   
  };

  return (
    <React.Fragment>
      <FormSubmit onSubmit={addTodo} />
      {/* <h3 className='text-center pt-3 pb-2'>What's the Plan for Today ?</h3> */}
      <table className="table text-white mb-0">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <FormActions
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default FormTask