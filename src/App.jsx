import react from 'react'
import './App.css'
import router from './utils/router'
import { RouterProvider } from 'react-router-dom';

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
