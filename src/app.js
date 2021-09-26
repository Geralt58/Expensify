import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouters'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'

const store = configureStore()
const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
