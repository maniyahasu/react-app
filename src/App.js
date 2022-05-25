import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import ExpenseWrapper from "./components/Expense/ExpenseWrapper";
import Contacts from "./components/Contacts/Contacts";
import ContactDetail from "./components/Contacts/ContactDetail";
import styles from "../src/styles.module.css";
import TodoList from "./components/todo/TodoList";
import TodoDetail from "./components/todo/TodoDetail";
// import EditTodo from './components/todo/EditTodo';

const App = () => {
  // const filterYearChangeHandler = (year) => {
  //   const filteredList = expenseList.filter(el => el.date.getFullYear().toString() === year);
  //   setExpenseList(filteredList);
  // };

  return (
    <div className={styles["mt-80"]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {/* component={withRouter(Home)} */}
            <Redirect to="/contact"></Redirect>
          </Route>
          <Route
            exact
            path="/expense"
            component={withRouter(ExpenseWrapper)}
          ></Route>
          <Route exact path="/contact" component={withRouter(Contacts)}></Route>
          <Route exact path="/contact/:id" component={ContactDetail}></Route>
          <Route exact path="/todo" component={TodoList}></Route>
          <Route exact path="/todo/:id/detail" component={TodoDetail}></Route>
          {/* <Route exact path="/todo/:id/edit" component={EditTodo}></Route> */}
        </Switch>
      </Router>
    </div>
  );
};
export default App;

export const Home = () => {
  return <div>Home</div>;
};
