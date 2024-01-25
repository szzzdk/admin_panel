import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaAddressBook, FaUser, FaMoneyBill, FaXRay  } from "react-icons/fa";
import { MdFeedback, MdInventory } from "react-icons/md";
import { LuFileText } from "react-icons/lu";
import { FaGears } from "react-icons/fa6";
// import loggo from "../assets/loggo.png";
import { LiaToothSolid } from "react-icons/lia";
// import styles from './index.module.scss';

interface SidebarProps {
  isSidebarOpen: boolean;
}

const routes = [
  {
    path: "/",
    name: "Записи",
    icon: <FaAddressBook />
  },
  {
    path: "/",
    name: "Пациенты",
    icon: <FaUser />
  },
  {
    path: "",
    name: "Финансы",
    icon: <FaMoneyBill />
  },
  {
    path: "",
    name: "Рентген",
    icon: <FaXRay />
  },
  {
    path: "",
    name: "Отчеты",
    icon: <LuFileText />
  },
  {
    path: "",
    name: "Обратная связь",
    icon: <MdFeedback />
  },
  {
    path: "",
    name: "Интеграции",
    icon: <FaGears />
  },
  {
    path: "",
    name: "Инвентарь",
    icon: <MdInventory />
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  return (
    <motion.div  
              initial={false}
              // animate={{ x: isSidebarOpen ? "0" : "100%" }}
              transition={{ duration: 0.3}}
              className="fixed top-0 left-0 h-full bg-white z-50 overflow-hidden"
    >
      <section>
        <div className="flex">
        <a href="/">
            {
              isSidebarOpen ? (
                <div className="flex items-center">
                  <LiaToothSolid className="h-10 w-10 icon" />
                  <p className="ml-2 title">Tooth</p>
                </div>
              ) : (
                <LiaToothSolid className="h-10 w-10 icon" />
              )
            }
          </a>
        </div>
        {routes.map((route) => (
          <NavLink to={route.path} key={route.name}>
            {isSidebarOpen ? (
              <span className="flex items-center">
                {route.icon} {route.name}
              </span>
            ) : (
              <span>{route.icon}</span>
            )}
          </NavLink>
        ))}
      </section>  
    </motion.div>
  );
};

export default Sidebar;