import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import LoginPage from '../components/LoginPage'

export const history = createBrowserHistory()

const AppRouter = () => (
   <Router history={history}>
      <div>
         <Header />
         <Switch>
            <Route path="/" component={LoginPage} exact />
            <Route path="/dashboard" component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   </Router>
)

export default AppRouter