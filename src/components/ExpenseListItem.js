import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

numeral.register('locale', 'in', {
   delimiters: {
      thousands: ',',
      decimal: '.'
   },
   currency: {
      symbol: '₹'
   }
})

numeral.locale('in')

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
   <div>
      <h3>
         <Link to={`/edit/${id}`}>{description}</Link>
      </h3>
      <p>
         {numeral(amount / 100).format('$0,0.00')}-
         {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
   </div>
)

export default ExpenseListItem
