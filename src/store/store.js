import { observable, action } from 'mobx';


const state = observable({
  todos: [
    {id: 0,text: 'Я длинная задача, я здесь для того, чтобы было легче делать адаптив для устройств с маленьким экраном', type: 0, finished: false, display: true},
    {id: 1,text: 'Закончить проект', type: 1, finished: false, display: true},
    {id: 2,text: 'Полить цветы', type: 0, finished: true, display: true},
    {id: 3,text: 'Создать ToDo лист', type: 1, finished: true, display: true},
    ],
  nextID: 4,
  newTaskText: '',
  currentType: null,
  onChange (e) {
        this.newTaskText = e.currentTarget.value
  },
  onSubmit (type) {
    let display;
    if (this.currentType === null || type === this.currentType) {display = true}
    this.todos.push({id: this.nextID, text: this.newTaskText, type: type, finished: false, display: display})
    this.newTaskText = '';
    this.nextID = this.nextID + 1;
    console.log(this.nextID)
  },
  taskFinished (id) {
    this.todos[this.todos.indexOf(this.todos.find(item => item.id === id))].finished = true
  },
  deleteTask (id) {
    this.todos.splice(this.todos.indexOf(this.todos.find(item => item.id === id)), 1)
  },
  displayAll () {
    this.todos.forEach((item) => {
      item.display = true
    })
    this.currentType = null
  },
  displayHome () {
    this.todos.forEach((item) => {
      if (item.type === 0) {
        item.display = true
      } else {
        item.display = false
      }
    })
    this.currentType = 0
  },
  displayJob () {
    this.todos.forEach((item) => {
      if (item.type === 1) {
        item.display = true
      }  else {
        item.display = false
      }
    })
    this.currentType = 1
  },

}, {
  onChange: action,
  onSubmit: action,
  taskFinished: action,
  onChangeType: action,
  deleteTask: action,
  displayAll: action,
  displayHome: action,
  displayJob: action,
})

export default state;