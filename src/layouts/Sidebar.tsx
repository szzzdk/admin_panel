import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaAddressBook, FaUser, FaMoneyBill, FaXRay } from "react-icons/fa";
import { MdFeedback, MdInventory } from "react-icons/md";
import { LuFileText } from "react-icons/lu";
import { FaGears } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
// import loggo from "../assets/loggo.png";
import styles from "./index.module.scss";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const { t } = useTranslation();

  const routes = [
    {
      path: "/",
      name: t("records"),
      icon: <FaAddressBook className={styles.icon} />,
    },
    {
      path: "/",
      name: t("patients"),
      icon: <FaUser className={styles.icon} />,
    },
    {
      path: "",
      name: t("finance"),
      icon: <FaMoneyBill className={styles.icon} />,
    },
    {
      path: "",
      name: t("x-ray"),
      icon: <FaXRay className={styles.icon} />,
    },
    {
      path: "",
      name: t("reports"),
      icon: <LuFileText className={styles.icon} />,
    },
    {
      path: "",
      name: t("feedback"),
      icon: <MdFeedback className={styles.icon} />,
    },
    {
      path: "",
      name: t("integration"),
      icon: <FaGears className={styles.icon} />,
    },
    {
      path: "",
      name: t("inventory"),
      icon: <MdInventory className={styles.icon} />,
    },
  ];

  return (
    <motion.div
      initial={false}
      transition={{ duration: 0.3 }}
      className="border border-t-0"
    >
      <section className="h-screen">
        <div className="pt-5 border border-r-0 border-b-0 border-t-0">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name}>
              {isSidebarOpen ? (
                <motion.span
                  className={ styles.sidebarItemStylesOpen}
                  animate={{ opacity: 1, marginRight: 2  }}
                  initial={{ opacity: 0, marginRight: 100 }}
                  transition={{ duration: 0.3 }}
                >
                  {route.icon} <span className="ml-2">{route.name}</span>
                </motion.span>
              ) : (
                <motion.span
                  className="flex items-center h-10 pl-8"
                  animate={{ opacity: 1, marginRight: 30 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {route.icon}
                </motion.span>
              )}
            </NavLink>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Sidebar;
