// const TODOS_STORAGE_KEY = 'TODOS'
// const DOINGS_STORAGE_KEY = 'DOINGS'
// const DONES_STORAGE_KEY = 'DONES'
// const BACKLOG_STORAGE_KEY = 'BACKLOG'

export default {
    get(key) {
        return JSON.parse(localStorage.getItem(key)) || []
    },
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}
