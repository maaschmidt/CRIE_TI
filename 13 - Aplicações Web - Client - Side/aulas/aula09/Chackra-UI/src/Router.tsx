import { Route, Routes } from "react-router-dom";
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard';
import { UserList } from './pages/UserList';
import { UserCreate } from "./pages/UserCreate";

export function Router(){
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/create" element={<UserCreate />} />
    </Routes>
  )
}