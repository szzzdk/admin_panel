import './App.css'
import { BrowseRouter as Router, Routes, Route } from "react-router"
import PageHeader from './layouts/PageHeader'
import Sidebar from './layouts/Sidebar'
import Main from './layouts/Main'
import { SidebarProvider } from './SidebarContext';

export default function App() {
  return (
    <Router>
      <SidebarProvider>
        <div>
          <PageHeader />
          <Sidebar />
          <Main />
          {/* Остальное содержимое вашего приложения */}
        </div>
      </SidebarProvider>
  </Router>
  )
}
