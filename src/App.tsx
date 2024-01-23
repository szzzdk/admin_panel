import { useState } from "react";
import "./App.css";
import PageHeader from "./layouts/PageHeader";
import Sidebar from "./layouts/Sidebar";
import Main from "./layouts/Main";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar button toggled!");
  };

  return (
    <div>
      <div className={`content ${isSidebarOpen ? "with-sidebar" : ""}`}>
        <PageHeader onToggleSidebar={toggleSidebar} />
      </div>
      <Sidebar />
      <Main />
    </div>
  );
}
