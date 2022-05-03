export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group('Action: ', action)
        console.log('Prev State: ', prevState)
        console.log('Arguments: ', args)
        const nextState = reducer(prevState, action, args)
        console.log('Next State: ', nextState)
        console.groupEnd()
        
        return nextState
    }
}