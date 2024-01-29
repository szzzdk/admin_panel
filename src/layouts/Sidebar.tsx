import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaAddressBook, FaUser, FaMoneyBill, FaXRay } from "react-icons/fa";
import { MdFeedback, MdInventory } from "react-icons/md";
import { LuFileText } from "react-icons/lu";
import { FaGears } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
// import loggo from "../assets/loggo.png";
import { LiaToothSolid } from "react-icons/lia";
import styles from './index.module.scss';

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const { t } = useTranslation();


  const routes = [
    {
      path: "/",
      name: t("records"),
      icon: <FaAddressBook />,
    },
    {
      path: "/",
      name: t("patients"),
      icon: <FaUser />,
    },
    {
      path: "",
      name: t("finance"),
      icon: <FaMoneyBill />,
    },
    {
      path: "",
      name: t("x-ray"),
      icon: <FaXRay />,
    },
    {
      path: "",
      name: t("reports"),
      icon: <LuFileText />,
    },
    {
      path: "",
      name: t("feedback"),
      icon: <MdFeedback />,
    },
    {
      path: "",
      name: t("integration"),
      icon: <FaGears />,
    },
    {
      path: "",
      name: t("inventory"),
      icon: <MdInventory />,
    },
  ];

  return (
    <motion.div
      initial={false}
      transition={{ duration: 0.3 }}
      className="border"

    > 
      <section className={styles.section}>
        <div style={{padding: "20px"}} className="flex items-center border border-b-0 border-r-0 border-t-0">
          <a href="/">
            {isSidebarOpen ? (
              <div className="flex items-center">
                <LiaToothSolid className="h-10 w-10 icon" />
                <p className="ml-2 title">Tooth</p>
              </div>
            ) : (
              <LiaToothSolid className="h-10 w-10 icon" />
            )}
          </a>
        </div>
        <div className="border border-r-0 border-b-0">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name}>
              {isSidebarOpen ? (
                <motion.span className="flex items-center pl-7 ml-8 mt-7 pr-40"
                animate={{ opacity: 1, marginLeft: 0 }}
                initial={{ opacity: 0, marginLeft: -20 }}
                transition={{ duration: 0.3 }}>
                  {route.icon} <span className="ml-2">{route.name}</span> 
                </motion.span>
              ) : (
                <motion.span className="flex items-center ml-8 mt-7 pr-5"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>{route.icon}</motion.span>
              )}
            </NavLink>
          ))}
        </div>
        
      </section>
    </motion.div>
  );
};

export default Sidebar;
