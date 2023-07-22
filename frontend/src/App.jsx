import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages/Index'
import Layout from "./pages/Layout";
import Home from './components/Home'
import Projects from './components/Projects'
import Templates from './components/Templates'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/templates',
        element: <Templates />
      },
      {
        path: '/projects',
        element: <Projects />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
