import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Home } from "./layouts/Home";
import PageHeader from "./layouts/PageHeader";
import Sidebar from "./layouts/Sidebar";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar button toggled!");
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col w-full h-1/7">
          <div
            className={clsx("content h-full", {
              "with-sidebar": isSidebarOpen,
            })}
          >
            <PageHeader
              onToggleSidebar={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
          </div>
        </div>
        <div className="flex h-6/7">
          <motion.div
            transition={{ duration: 0.3 }}
            className="border-r"
          >
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </motion.div>
          <div className="w-full bg-gray-100 overflow-auto">
            <Home 
              isSidebarOpen={isSidebarOpen}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}
