import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup removeExpense action object', () => {
   const action = removeExpense({ id: '123abc' })
   expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
   })
})

test('should setup editExpense action object', () => {
   const action = editExpense('123abcd', { description: 'a', note: 'b' })
   expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abcd',
      updates: {
         description: 'a',
         note: 'b'
      }
   })
})

test('should setup add expense action object with provided values', () => {
   const expenseData = {
      description: 'Rent',
      amount: 109500,
      createdAt: 1000,
      note: 'This was last months rent'
   }
   const action = addExpense(expenseData)
   expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         ...expenseData,
         id: expect.any(String)
      }
   })
})

test('should setup the add expense object with default values', () => {
   const action = addExpense()
   expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         description: '',
         note: '',
         amount: 0,
         createdAt: 0,
         id: expect.any(String)
      }
   })
})
