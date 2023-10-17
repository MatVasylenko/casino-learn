import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/index';
import { Provider } from 'react-redux'
import { store } from './app/store/index';

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
