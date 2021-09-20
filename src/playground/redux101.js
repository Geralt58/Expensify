import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => ({
   type: 'INCREMENT',
   incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
   type: 'DECREMENT',
   decrementBy
})

const setCount = ({count = 1} = {}) => ({
   type: 'SET',
   count
})

const resetCount = () => ({
   type: 'RESET'
})

//Reducer

const countReducer = (state = { count: 0 }, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return {
            count: state.count + action.incrementBy
         }
      case 'DECREMENT':
         return {
            count: state.count - action.decrementBy
         }
      case 'SET':
         return {
            count: action.count
         }
      case 'RESET':
         return {
            count: 0
         }
      default:
         return state
   }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
   console.log(store.getState())
}) // runs everytime the store changes. returns a function that can be used to unsubscribe

/* store.dispatch({
   type: 'INCREMENT',
   incrementBy: 5
})
 */

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

/* unsubscribe()           stop subcribe and not print anymore*/

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(resetCount())

store.dispatch(setCount({ count: 101 }))
