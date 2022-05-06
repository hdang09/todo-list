import html from '../core.js'
import { connect } from '../store.js'

import TodoList from './TodoList.js'
import DoingList from './DoingList.js'
import DoneList from './DoneList.js'
import BacklogList from './BacklogList.js'

function AppContent() {
    return html`
        <div id="app-content">
            <header class"flex-b">
                <h1 class="app-content__title">Task Management</h1>
                
            </header>
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

{/* <ul class="app-content__filter flex-a">
    <li class="app-content__filter--low">LOW</li>
    <li class="app-content__filter--medium ">MEDIUM</li>
    <li class="app-content__filter--high active">HIGH</li>
</ul> */}