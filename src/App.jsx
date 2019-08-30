import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'hack'

import store from './redux/store'
import HomeContainer from './containers/Home'
import JournalView from './containers/JournalView'
import JournalEdit from './containers/JournalEdit'
import JournalList from './containers/JournalList'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/journals" exact component={JournalList} />
        <Route path="/journals/:id" exact component={JournalView} />
        <Route path="/journals/:id/edit" exact component={JournalEdit} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
