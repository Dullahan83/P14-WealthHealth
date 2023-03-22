import { useState } from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './app/store'
import Router from './Router'
import { PersistGate } from 'redux-persist/integration/react'
function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}

export default App
