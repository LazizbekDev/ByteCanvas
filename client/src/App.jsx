import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./ui/Home"
import "./base.css"
import Layout from "./ui/Layout"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ])
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
