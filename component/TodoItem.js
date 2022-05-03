import html from '../core.js'
// import { connect } from '../store.js'

function TodoItem(item, index) {
    return html`
        <li class="todo-item ${item.priority}">
            <span class="todo-item__priority--view">${item.priority.toUpperCase()}</span>
            <h3 class="todo-item__task--view">${item.task}</h3>
            <p class="todo-item__description--view">${item.description}</p>

            <input class="todo-item__priority--edit" value="${item.priority.toUpperCase()}"></input>
            <input class="todo-item__task--edit" value="${item.task}">
            <textarea class="todo-item__description--edit" cols="10" rows="5">${item.description}</textarea>
            
            <div class="flex-b">
                <div>
                    <i class="todo-item__icon fa-regular fa-calendar"></i>
                    <span class="todo-item__text">${item.date}</span>
                </div>
                <div style="cursor: pointer">
                    <i class="todo-item__icon fa-solid fa-pen"></i>
                    <span class="todo-item__text">Edit</span>
                </div>
                <div onclick="dispatch('delete', '${item.type}', '${index}')" style="cursor: pointer"><
                    <i class="todo-item__icon fa-solid fa-xmark"></i>
                    <span class="todo-item__text">Delete</span>
                </div>
            </div>
        </li>
    `
}

export default (TodoItem)