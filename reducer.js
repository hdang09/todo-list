import TaskInput from "./component/TaskInput.js"
import localStorage from "./util/localStorage.js"

// const init = {
//     todos: [
//         {
//             task: 'TODO: Have a meeting',
//             date: '2022-12-5',
//             startTime: '10-12',
//             endTime: '20-12',
//             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint earum illo, temporibus sapiente autem magnam unde ipsa ut ea ad minima necessitatibus reprehenderit repellat commodi quam porro nobis nesciunt ab?',
//             priority: 'low',
//             completed: false
//         },
//         {
//             task: 'TODO: Have a lunch',
//             date: '2022-12-5',
//             startTime: '10-12',
//             endTime: '20-12',
//             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint earum illo, temporibus sapiente autem magnam unde ipsa ut ea ad minima necessitatibus reprehenderit repellat commodi quam porro nobis nesciunt ab?',
//             priority: 'medium',
//             completed: true
//         },
//     ],
//     dones: [
//         {
//             task: 'DONE: Have a meeting',
//             date: '2022-12-5',
//             startTime: '10-12',
//             endTime: '20-12',
//             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint earum illo, temporibus sapiente autem magnam unde ipsa ut ea ad minima necessitatibus reprehenderit repellat commodi quam porro nobis nesciunt ab?',
//             priority: 'low',
//             completed: false
//         },
//         {
//             task: 'DONE: Have a lunch',
//             date: '2022-12-5',
//             startTime: '10-12',
//             endTime: '20-12',
//             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint earum illo, temporibus sapiente autem magnam unde ipsa ut ea ad minima necessitatibus reprehenderit repellat commodi quam porro nobis nesciunt ab?',
//             priority: 'medium',
//             completed: true
//         },
//     ],
//     doings: [
//         {
//             task: 'DOING: Have a meeting',
//             date: '2022-12-5',
//             startTime: '10-12',
//             endTime: '20-12',
//             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint earum illo, temporibus sapiente autem magnam unde ipsa ut ea ad minima necessitatibus reprehenderit repellat commodi quam porro nobis nesciunt ab?',
//             priority: 'high',
//             completed: false
//         },
//         {
//             task: 'DOING: Have a lunch',
//             date: '2022-12-5',
//             startTime: '10-12',
//             endTime: '20-12',
//             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint earum illo, temporibus sapiente autem magnam unde ipsa ut ea ad minima necessitatibus reprehenderit repellat commodi quam porro nobis nesciunt ab?',
//             priority: 'medium',
//             completed: true
//         },
//     ],
//     backlogs: [
//         {
//             task: 'BACKLOG: Have a meeting',
//             date: '2022-12-5',
//             startTime: '10-12',
//             endTime: '20-12',
//             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint earum illo, temporibus sapiente autem magnam unde ipsa ut ea ad minima necessitatibus reprehenderit repellat commodi quam porro nobis nesciunt ab?',
//             priority: 'low',
//             completed: false
//         },
//         {
//             task: 'BACKLOG: Have a lunch',
//             date: '2022-12-5',
//             startTime: '10-12',
//             endTime: '20-12',
//             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint earum illo, temporibus sapiente autem magnam unde ipsa ut ea ad minima necessitatibus reprehenderit repellat commodi quam porro nobis nesciunt ab?',
//             priority: 'medium',
//             completed: true
//         },
//     ]
// }

const init = {
    todos: localStorage.get('todos'),
    dones: localStorage.get('dones'),
    doings: localStorage.get('doings'),
    backlogs: localStorage.get('backlogs')
}

const actions = {
    add(state, type, ...value) {
        document.getElementById('task-input').remove()

        for (var i = 0; i < 7; i++) {
            console.log(i, value[i])
        }

        

        if (value.every(val => val)) {
            var taskPriorityArray = [...value[0].querySelectorAll('input[name="task-priority"]')]
            state[type].push({
                priority: taskPriorityArray.find(task => task.checked).value,
                task: value[1],
                date: value[2],
                startTime: value[3],
                endTime: value[4],
                description: value[5],
                type
            })

            localStorage.set(type, state[type])
        }    
    },
    delete(state, type, index) {
        state[type].splice(index, 1)
        localStorage.set(type, state[type])
    }
}




export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}