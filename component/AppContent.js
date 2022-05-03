import html from '../core.js'
import { connect } from '../store.js'

import TodoList from './TodoList.js'
import DoingList from './DoingList.js'
import DoneList from './DoneList.js'
import BacklogList from './BacklogList.js'

function AppContent() {
    return html`
        <div id="app-content">
            <h1 class="app-content__title">Task Management</h1>
            <div class="row">
                ${TodoList()}
                ${DoingList()}
                ${DoneList()}
                ${BacklogList()}
            </div>
        </div>
    `
}

export default connect()(AppContent)