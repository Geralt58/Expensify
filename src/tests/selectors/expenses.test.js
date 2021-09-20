/* import moment from 'moment'
import selectExpenses from '../../selectors/expenses'

const expenses = [{
    id: '1',
    description: 'gum', 
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'rent', 
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card', 
    note: '',
    amount: 5500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

test('should filter by text value' , () => {
    const filters = {
        text: 'e',        
        sortBy:'date',
        startDate: 'undefined',
        endDate: 'undefined'
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]]) 
})

test('should filter by startDate value' , () => {
    const filters = {
        text: 'e',        
        sortBy:'date',
        startDate: moment(0),
        endDate: moment('9/26/21')
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]]) 
}) */