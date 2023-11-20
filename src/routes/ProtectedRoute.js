import { Navigate } from "react-router"

export const ProtectedRoute = ({children}) => {
    const token = JSON.parse(sessionStorage.getItem('token'))
  return token ? children : <Navigate to='/login' />
}
