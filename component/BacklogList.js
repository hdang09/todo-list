import html from '../core.js'
import { connect } from '../store.js'
import TodoItem from './TodoItem.js'

function BacklogList({ backlogs }) {
    return html`
        <div class="col-lg-3 col-md-6 col-sm-12">
            <h2 class="tag">Backlog</h2>
            <span class="count">(${backlogs.length})</span>
            <ul class="todo-list">
                ${backlogs.map((backlog, index) => TodoItem(backlog, index))}    
            </ul>
            <div onclick="showInputModal('backlogs')" class="todo-list__add">
                <i class="todo-list__add--icon fa-solid fa-plus"></i>
                <span class="todo-list__add--text">Add New Task</span>
            </div>
        </div>
    `
}

export default connect()(BacklogList)
