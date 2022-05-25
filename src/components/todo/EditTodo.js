import React, { useState, useEffect } from "react";
import axios from "axios";

const EditTodo = (props) => {
  const { currentTodo } = props;
  const initialState = {
    title: "",
    completed: false,
    id: "",
    userId: "",
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (Object.keys(currentTodo).length > 0) {
      setState({
        title: currentTodo.title,
        completed: currentTodo.completed,
        id: currentTodo.id,
        userId: currentTodo.userId,
      });
    //   console.log("current todo", currentTodo);
    } else {
      setState(initialState);
    }
  }, [currentTodo]);

  const inputChangeHandler = (evt) => {
    const name = evt.target.name;
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [name]: value,
    });
    // console.log(state);
  };

  const modalCloseHandler = () => {
    setState(initialState);
    document.querySelector("#updateTodoModalLabel [data-dismiss=modal]").click();
  };
  const updateTodoHandler = () => {
    axios
      .put(`http://localhost:8888/todos/${currentTodo.id}`, state)
      .then((resp) => {
        modalCloseHandler();
        props.onTodoUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <div
        className={`modal fade`}
        id="updateTodoModalLabel"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="updateTodoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateTodoModalLabel">
                Edit Todo ({currentTodo.id})
              </h5>
              <button
                type="button"
                className="close"
                onClick={modalCloseHandler}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* {currentTodo.title} */}
              <form>
                <div className="form-group">
                  <label>Todo Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Enter todo title"
                    value={state.title}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="completed"
                    name="completed"
                    value={state.completed}
                    checked={state.completed}
                    onChange={inputChangeHandler}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="completed"
                  >
                    Completed ?
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateTodoHandler}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default EditTodo;
