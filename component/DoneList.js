import html from '../core.js'
import { connect } from '../store.js'
import TodoItem from './TodoItem.js'

function DoneList({ dones }) {
    return html`
        <div class="col-lg-3 col-md-6 col-sm-12">
            <h2 class="tag">Done</h2>
            <span class="count">(${dones.length})</span>
            <ul class="todo-list">
                ${dones.map((done, index) => TodoItem(done, index))}
            </ul>
            <div onclick="showInputModal('dones')" class="todo-list__add">
                <i class="todo-list__add--icon fa-solid fa-plus"></i>
                <span class="todo-list__add--text">Add New Task</span>
            </div>
        </div>
    `
}

export default connect()(DoneList)