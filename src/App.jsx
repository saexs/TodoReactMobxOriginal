import React from 'react';
import classes from './App.module.scss';
import { observer } from 'mobx-react';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm';
import EditIcon from '@material-ui/icons/Edit';


const App = observer(() => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <span className={classes.headerText}>
          My ToDo
        </span>
        <span className={classes.headerIcon}>
          <EditIcon fontSize='large'/>
        </span>
      </header>
      <div className={classes.todoListComponent}>
        <TodoList/>
      </div>
      <TodoForm />
    </div>
  );
})

export default App;