import { AppContext } from '@/contexts/app.context'
import { AuthLayout } from '@/layouts'
import Home from '@/pages'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

// eslint-disable-next-line react-refresh/only-export-components
function AuthRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

// eslint-disable-next-line react-refresh/only-export-components
function UnAuthRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <AuthRoute />,
      children: [
        {
          path: '/',
          index: true,
          element: <Home />
        }
      ]
    },
    {
      path: '',
      element: <UnAuthRoute />,
      children: [
        {
          path: '/login',
          element: (
            <AuthLayout>
              <Login />
            </AuthLayout>
          )
        },
        {
          path: '/register',
          element: (
            <AuthLayout>
              <Register />
            </AuthLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}
