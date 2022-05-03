import html from '../core.js'
import { connect } from '../store.js'
import TodoItem from './TodoItem.js'
import TaskInput from './TaskInput.js'

function TodoList({ todos }) {
    var showInputModal = type => {
        var html = TaskInput(type)
        document.getElementById('root').innerHTML += html
    }

    document.showInputModal = showInputModal

    return html`
        <div class="col-lg-3 col-md-6 col-sm-12">
            <h2 class="tag">Todo</h2>
            <span class="count">(${todos.length})</span>
            <ul class="todo-list">
                ${todos.map((todo, index) => TodoItem(todo, index))}
            </ul>
            <div onclick="showInputModal('todos')" class="todo-list__add">
                <i class="todo-list__add--icon fa-solid fa-plus"></i>
                <span class="todo-list__add--text">Add New Task</span>
            </div>
        </div>
    `
}

export default connect()(TodoList)
