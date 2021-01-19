import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../state'
import RepositoriesList from './RepositoriesList'

interface Props {}

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App
