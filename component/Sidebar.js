import html from '../core.js'
import { connect } from '../store.js'

function Sidebar() {
    return html`
        <div id="sidebar">
            <header>
                <div class="sidebar__logo"></div>
                <div class="sidebar__menu"></div>
            </header>
            <div>
                <ul class="sidebar__list">
                    <li class="sidebar__item">
                        <i class="fa-solid fa-house"></i>
                        <a href="#">Home</a>
                    </li>
                    <li class="sidebar__item active">
                        <i class="fa-solid fa-list-check"></i>
                        <a href="#">My Tasks</a>
                    </li>
                    <li class="sidebar__item">
                        <i class="fa-solid fa-comment"></i>
                        <a href="#">Inbox</a>
                    </li>
                    <li class="sidebar__item">
                        <i class="fa-solid fa-circle-info"></i>
                        <a href="#">Portfolios</a>
                    </li>
                    <li class="sidebar__item">
                        <i class="fa-solid fa-trophy"></i>
                        <a href="#">Goals</a>
                    </li>
                    <li class="sidebar__item">
                        <i class="fa-solid fa-house"></i>
                        <a href="#">Home</a>
                    </li>
                    <li class="sidebar__item">
                        <i class="fa-solid fa-list-check"></i>
                        <a href="#">My Tasks</a>
                    </li>
                    <li class="sidebar__item">
                        <i class="fa-solid fa-comment"></i>
                        <a href="#">Inbox</a>
                    </li>
                    <li class="sidebar__item">
                        <i class="fa-solid fa-circle-info"></i>
                        <a href="#">Portfolios</a>
                    </li>
                    <li class="sidebar__item">
                        <i class="fa-solid fa-trophy"></i>
                        <a href="#">Goals</a>
                    </li>
                </ul>
            </div>
        </div>
    `
}

export default connect()(Sidebar)