import html from '../core.js'
import { connect } from '../store.js'

import Sidebar from './Sidebar.js'
import AppContent from './AppContent.js'
import TaskInput from './TaskInput.js'

function App() {
    return html`
        ${Sidebar()}
        ${AppContent()}
    `
}

export default connect()(App)