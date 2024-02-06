import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./layouts/Home";
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
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div
            className={clsx("content", {
              "with-sidebar": isSidebarOpen,
            })}
          >
            <PageHeader
              onToggleSidebar={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
          </div>
        </div>
        <div className="flex">
          <motion.div
            transition={{ duration: 0.3 }}
          >
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </motion.div>
          <Home />
        </div>
        
      </div>
    </Router>
  );
}
