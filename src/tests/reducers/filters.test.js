import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
   const state = filtersReducer(undefined, { type: '@@INIT' })
   expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
   })
})

test('should set sortBy to amount', () => {
   const state = filtersReducer(undefined, {
      type: 'SORT_BY',
      sortBy: 'amount'
   })
   expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
   const currentState = {
      text: '',
      startDate: undefined,
      endDate: undefined,
      sortBy: 'date'
   }
   const state = filtersReducer(currentState, {
      type: 'SORT_BY',
      sortBy: 'date'
   })
   expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
   const state = filtersReducer(undefined, {
      type: 'SET_TEXT_FILTER',
      text: 'this'
   })
   expect(state.text).toBe('this')
})

test('should set start date', () => {
   const state = filtersReducer(undefined, {
      type: 'SET_START_DATE',
      startDate: moment(0).valueOf()
   })
   expect(state.startDate).toBe(moment(0).valueOf())
})

test('should set end date', () => {
   const state = filtersReducer(undefined, {
      type: 'SET_END_DATE',
      endDate: moment(0).valueOf()
   })
   expect(state.endDate).toBe(moment(0).valueOf())
})
