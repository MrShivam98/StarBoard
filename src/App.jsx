import { Outlet } from "react-router"
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-white dark:text-white">
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  )
}
