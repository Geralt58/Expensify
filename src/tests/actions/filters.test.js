import moment from 'moment'
import {
   setStartDate,
   setEndDate,
   setTextFilter,
   sortByDate,
   sortByAmount
} from '../../actions/filters'

test('should generate set start date action object', () => {
   const action = setStartDate(moment(0))
   expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0)
   })
})

test('should generate set end date action object', () => {
   const action = setEndDate(moment(0))
   expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0)
   })
})

test('should generate set text filter object with test value', () => {
   const action = setTextFilter('a')
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'a'
   })
})

test('should generate set text filter object with default', () => {
   const action = setTextFilter()
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
   })
})

test('should generate action object for sort by Date', () => {
   expect(sortByDate()).toEqual({ type: 'SORT_BY', sortBy: 'date' })
})

test('should generate action object for sort by Amount', () => {
   expect(sortByAmount()).toEqual({ type: 'SORT_BY', sortBy: 'amount' })
})
