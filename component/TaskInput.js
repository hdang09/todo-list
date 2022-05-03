import html from '../core.js'
// import { connect } from '../store.js'

{/* <div class="col-lg-12 col-md-12 col-sm-12">
    <input type="radio" name="task-priority" value="Low">Low
    <input type="radio" name="task-priority" value="Medium">Medium
    <input type="radio" name="task-priority" value="High">High
    <p class="form-msg"></p>
</div> */}


function TaskInput(type) {
    return html`
        <div id="task-input">
            <div class="row" action="" method="POST" id="form-1">
                <div class="flex-b">
                    <h2 class="task-input__title">Add Task</h2>
                    <i class="task-input__close-btn fa-solid fa-xmark"></i>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12">
                    <label class="task-input__label" for="task-name">Task</label>
                    <input onchange="console.log(this.value)" class="task-input__input" id="task-name" name="task-name" type="text" placeholder="Your Task Name"/>
                    <p class="form-msg"></p>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12">
                    <label class="task-input__label" for="date">DATE</label>
                    <input class="task-input__input" id="date" name="date" type="date" min="2022-05-02" max="3000-12-31"/>
                    <p class="form-msg"></p>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                    <label class="task-input__label" for="start-time">START TIME</label>
                    <input class="task-input__input" id="start-time" name="start-time" type="time"/>
                    <p class="form-msg"></p>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                    <label class="task-input__label" for="end-time">END TIME</label>
                    <input class="task-input__input" id="end-time" name="end-time" type="time"/>
                    <p class="form-msg"></p>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12">
                    <label class="task-input__label" for="description">DESCRIPTION</label>
                    <textarea class="task-input__textarea" name="description" id="description" cols="10" rows="5"></textarea>
                    <p class="form-msg"></p>
                </div>
                
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <label class="task-input__label" for="task-priority">PRIORITY</label>
                    <input class="task-input__radio" type="radio" name="task-priority" value="low">Low
                    <input class="task-input__radio" type="radio" name="task-priority" value="medium">Medium
                    <input class="task-input__radio" type="radio" name="task-priority" value="high">High
                    <p class="form-msg"></p>
                </div>

                <button onclick="dispatch(
                    'add',
                    '${type}',
                    this.parentElement.children[1].children[1].value.trim(),
                    this.parentElement.children[2].children[1].value.trim(),
                    this.parentElement.children[3].children[1].value.trim(),
                    this.parentElement.children[4].children[1].value.trim(),
                    this.parentElement.children[5].children[1].value.trim(),
                    this.parentElement.children[6],
                )" type="submit" id="submit" class="submit-btn">Submit</button>
            </div>
        </div>
    `
}

export default (TaskInput)