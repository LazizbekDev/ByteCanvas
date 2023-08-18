import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./ui/Home"
import "./base.css"
import Layout from "./ui/Layout"

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
    <RouterProvider router={router} />
  )
}

export default App
