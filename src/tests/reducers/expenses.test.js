import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
   const state = expensesReducer(undefined, { type: '@@INIT' })
   expect(state).toEqual([])
})

test('should remove expense by id', () => {
   const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
   }
   const state = expensesReducer(expenses, action)
   expect(state).toEqual([expenses[0], expenses[2]])
})

test('should remove expense by id', () => {
   const action = {
      type: 'REMOVE_EXPENSE',
      id: 'asdfads'
   }
   const state = expensesReducer(expenses, action)
   expect(state).toEqual(expenses)
})

test('should add an expense', () => {
   const expense = {
      id: '23',
      description: 'hello',
      note: 'bello',
      amount: 23,
      createdAt: 0
   }
   const action = {
      type: 'ADD_EXPENSE',
      expense
   }
   const state = expensesReducer(expenses, action)
   expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
   const expense = {
      id: '1',
      description: 'Toffee',
      note: '',
      amount: 200,
      createdAt: 0
   }
   const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[0].id,
      updates: expense
   }
   const state = expensesReducer(expenses, action)
   expect(state[0]).toEqual(expense)
})

test('should edit an expense', () => {
    const action = {
       type: 'EDIT_EXPENSE',
       id: '99',
       updates: {}
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses) 
 })
