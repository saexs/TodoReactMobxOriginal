import { observer } from 'mobx-react'
import { useContext } from 'react'
import MyContext from '../store/StoreContext'
import classes from './todoForm.module.scss'

const TodoForm = observer(() => {
  const state = useContext(MyContext)
  return (
    <div className={classes.formWrap}>
      <form onSubmit={(e) => {
        e.preventDefault()
        state.onSubmit(e.currentTarget[1].options.selectedIndex)
      }
      }>
        <div className={classes.form}>
          <div className={classes.formTextareaWrap}>
            <textarea className={classes.formTextarea} placeholder={'Write new task'} onChange={(e) => state.onChange(e)} value={state.newTaskText} />
          </div>
          <div className={classes.formSelectWrap}>
            <select className={classes.formSelect} name='type'>
              <option >Дом</option>
              <option >Работа</option>
            </select>
          </div>
          <div className={classes.formButtonWrap}>
            <button className={classes.formButton} disabled={state.newTaskText.length === 0 ? true : false}>Добавить</button>
          </div>
        </div>

      </form>
    </div>
  )
})

export default TodoForm;