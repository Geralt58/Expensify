export default (expenses) => {
    return expenses
    .map((expense) => {
       return expense.amount
    })
    .reduce((sum, value) => sum + value, 0)
}
