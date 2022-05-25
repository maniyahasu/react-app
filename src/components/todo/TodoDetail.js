import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TodoDetails.css";
// import todoImage from "../../../public/images/todo.jpg";

const TodoDetail = ({ match }) => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    fetch(`http://localhost:8888/todos/${match.params.id}`)
      .then((res) => res.json())
      .then((resp) => {
        setTodo(resp);
      });
  };
  return (
    <div className="todo-detail-wrapper">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link to={`/todo`} className="flex-1">
            Back to list
          </Link>
        </div>
        <div className="card mt-4" style={{ width: "20rem" }}>
          {/* <img className="card-img-top" src={todoImage} alt="Card image cap" /> */}
          {todo !== null ? (
            <div className="card-body">
              <h5 className="card-title">ID: {todo.id}</h5>
              <p className="card-text">Title: {todo.title}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default TodoDetail;
