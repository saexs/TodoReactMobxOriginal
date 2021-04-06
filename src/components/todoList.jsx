import { observer } from 'mobx-react'
import { useContext } from 'react'
import MyContext from '../store/StoreContext'
import classes from './todoList.module.scss'

const TodoList = observer(() => {
    const state = useContext(MyContext)

    return (<div className={classes.taskNavContainer}>
        <div className={classes.taskNav}>
            <div>
                <button id='1' className={classes.taskNavButtons} onClick={() => state.displayAll()}>Все</button>
                <label htmlFor='1' className={classes.taskNavLabel} >Все</label>
            </div>
            <div>
                <button id='2' className={classes.taskNavButtons} onClick={() => state.displayHome()}>По дому</button>
                <label htmlFor='2' className={classes.taskNavLabel} >По дому</label>
            </div>
            <div>
                <button id='3' className={classes.taskNavButtons} onClick={() => state.displayJob()}>По работе</button>
                <label htmlFor='3' className={classes.taskNavLabel} >По работе</label>
            </div>
        </div>
        <div className={classes.tasks}>
            {state.todos.map((item) => {
                if (!item.display) {
                    return false
                }
                return (
                <div key={item.id}>
                    <div className={classes.task} >
                        <span className={`${classes.tasksText} ${item.finished ? classes.taskDone : undefined}`}>
                            {item.text}
                        </span>
                        <div className={classes.taskButtons}>
                            {item.finished ? undefined : <button className={classes.taskButtonDone} onClick={() => state.taskFinished(item.id)}>Выполнено</button>}
                            <button className={classes.taskButtonDel} onClick={() => state.deleteTask(item.id)}>Удалить</button>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                )
            })}
        </div>
    </div>)
})

export default TodoList;