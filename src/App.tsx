import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import PageHeader from "./layouts/PageHeader";
import Sidebar from "./layouts/Sidebar";
import Main from "./layouts/Main";
import clsx from "clsx";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar button toggled!");
  };

  

  return (
    <Router>
       <div className="flex">
        <motion.div
          className={`w-1/6`}
          animate={{ marginLeft: isSidebarOpen ? "-5.66667%" : "-12.66667%"  }}
          transition={{ duration: 0.3 }}
        >
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </motion.div>
        <div className="flex flex-col">
          <div 
            className={clsx('content', {
              "with-sidebar": isSidebarOpen
             })} 
          >
            <PageHeader onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          </div>
          <Main />
        </div>
      </div>
    </Router>
  );
}

