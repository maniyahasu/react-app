import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import $ from 'jquery';

import axios from "axios";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState({});
  const [showEditiTodoModal, setShowEditiTodoModal] = useState(false);
  useEffect(() => {
    getTodoList();
  }, []);
  const getTodoList = () => {
    axios.get("http://localhost:8888/todos").then((resp) => {
      setTodoList(resp.data.reverse());
    });
  };
  const onNewTodoAddHandler = () => {
    getTodoList();
  };
  const onTodoUpdateHandler = () => {
    getTodoList();
  };
  const todoDeleteHandler = (id) => {
    axios
    .delete(`http://localhost:8888/todos/${id}`)
    .then((resp) => {
      getTodoList();
    })
    .catch((error) => {
      console.log(error);
    });
   
  }
  return (
    <div className="container">
      <div className="h4 text-center">Todo List</div>
      <div className="d-flex justify-content-right pb-2">
        {/* <button className="btn btn-primary">Add Todo</button> */}
        <AddTodo onNewTodoAdd={onNewTodoAddHandler} />
      </div>
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoList.length > 0 && (
              <React.Fragment>
                {todoList.map((todo) => (
                  <tr key={todo.id}>
                    <th scope="row">{todo.id}</th>
                    <td>{todo.title}</td>
                    <td>{todo.completed.toString()}</td>
                    <td>
                      <Link
                        className="btn btn-primary mr-2"
                        to={`/todo/${todo.id}/detail`}
                      >
                        View
                      </Link>
                      <div
                        className="btn btn-warning mr-2"
                        data-toggle="modal"
                        data-target="#updateTodoModalLabel"
                        onClick={() => setEditTodo(todo)}
                      >
                        Edit
                      </div>
                      <button className="btn btn-danger mr-2" onClick={() => todoDeleteHandler(todo.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            )}
          </tbody>
        </table>
        {Object.keys(editTodo).length > 0 && <EditTodo currentTodo={editTodo} onTodoUpdate={onTodoUpdateHandler}/>}
      </div>
    </div>
  );
};

export default TodoList;
