import TaskInput from "./component/TaskInput.js"
import localStorage from "./util/localStorage.js"

const init = {
    todos: localStorage.get('todos'),
    dones: localStorage.get('dones'),
    doings: localStorage.get('doings'),
    backlogs: localStorage.get('backlogs'),
    editFlag: null
}

const actions = {
    add(state, type, ...value) {
        document.getElementById('task-input').remove()

        if (value.every(val => val)) {
            var taskPriorityArray = [...value[5].querySelectorAll('input[name="task-priority"]')]
            state[type].push({
                priority: taskPriorityArray.find(task => task.checked).value,
                task: value[0],
                date: value[1],
                startTime: value[2],
                endTime: value[3],
                description: value[4],
                type
            })

            localStorage.set(type, state[type])
        }    
    },
    delete(state, type, index) {
        state[type].splice(index, 1)
        localStorage.set(type, state[type])
    },
    startEdit(state, index, type) {
        state.editFlag = { index, type }
    },
    endEdit(state, index, type, ...value) {
        state.editFlag = null
        // console.log(state[type][index])

        if (value.every(val => val)) {
            state[type][index].priority = value[0].toLowerCase()
            state[type][index].task = value[1]
            state[type][index].description = value[2]
            
            localStorage.set(type, state[type])
        }    
    }
}




export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}