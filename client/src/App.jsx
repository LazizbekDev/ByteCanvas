import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./ui/Home"
import Layout from "./ui/Layout"
import { Provider } from "react-redux"
import { store } from "./store"
import Error from "./ui/Error"
import BlogPost from "./features/BlogPost"

import "./base.css"
import Editor from "./components/Editor"

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/blog/:slug",
          element: <BlogPost />
        },
        {
          path: "/category/:slug",
          element: <h1>Category Slice</h1>
        },
        {
          path: "/editor",
          element: <Editor />
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
