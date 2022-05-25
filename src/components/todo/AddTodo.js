import axios from "axios";
import React, { useState } from "react";


// var $;
const AddTodo = (props) => {
  const [state, setState] = useState({
    todoTitle: "",
    todoCompleted: false,
  });
  //   const [todoCompleted, setTodoCompleted] = useState(false);
  const inputChangeHandler = (evt) => {
    const name = evt.target.name;
    const value =
    evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [name]: value
    })
    // console.log(state);
  };

  const addTodoHandler = () => {
    const newTodo = {
      "userId": Math.round(Math.random() * 10) + 50,
      "id": Math.round(Math.random() * 100) + 100,
      "title": state.todoTitle,
      "completed": state.todoCompleted
    }
    axios.post("http://localhost:8888/todos", newTodo).then(resp => {
      props.onNewTodoAdd();
      document.querySelector('[data-dismiss=modal]').click();
    });
  };
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#addTodoModal"
      >
        Add Todo
      </button>

      <div
        className={`modal fade`}
        id="addTodoModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addTodoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addTodoModalLabel">
                Add Todo
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Todo Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="todoTitle"
                    placeholder="Enter todo title"
                    value={state.todoTitle}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="todoCompleted"
                    name="todoCompleted"
                    value={state.todoCompleted}
                    onChange={inputChangeHandler}
                  />
                  <label className="form-check-label" htmlFor="todoCompleted">
                    Completed ?
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={addTodoHandler}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>  
    </React.Fragment>
  );
};

export default AddTodo;
