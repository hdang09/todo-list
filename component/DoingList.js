import html from '../core.js'
import { connect } from '../store.js'
import TodoItem from './TodoItem.js'

function DoingList({ doings, editFlag }) {
    return html`
        <div class="col-lg-3 col-md-6 col-sm-12">
            <h2 class="tag">Doing</h2>
            <span class="count">(${doings.length})</span>
            <ul class="todo-list">
                ${doings.map((doing, index) => TodoItem(doing, index, editFlag))}
            </ul>
            <div onclick="showInputModal('doings')" class="todo-list__add">
                <i class="todo-list__add--icon fa-solid fa-plus"></i>
                <span class="todo-list__add--text">Add New Task</span>
            </div>
        </div>
    `
}

export default connect()(DoingList)