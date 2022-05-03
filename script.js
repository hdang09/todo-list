import { attach } from './store.js'
import App from './component/App.js'

attach(App, document.getElementById('root'))

// const fiterPriorityItems = document.querySelectorAll('.app-content__filter li')
// console.log(fiterPriorityItems)

// fiterPriorityItems.forEach(
//     fiterPriorityItem => fiterPriorityItems.onclick = () 
//         => fiterPriorityItem.classList.add
// )


