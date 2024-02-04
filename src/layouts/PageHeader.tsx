import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { CiSearch } from "react-icons/ci";
import Button from "../components/Button";
import { useTranslation, initReactI18next } from "react-i18next";
import { LiaToothSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import i18n from "i18next";
import translationRU from "../locales/ru.json";
import translationKZ from "../locales/kz.json";
import translationEN from "../locales/en.json";
import { motion } from "framer-motion";
import Profile from "../assets/profile.jpeg"

interface PageHeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

i18n.use(initReactI18next).init({
  resources: {
    Английский: { translation: translationEN },
    Казахский: { translation: translationKZ },
    Русский: { translation: translationRU },
  },
  lng: "Русский", // Устанавливаем русский язык по умолчанию
  fallbackLng: "Русский",
});

const PageHeader: React.FC<PageHeaderProps> = ({
  onToggleSidebar,
  isSidebarOpen,
}) => {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Русский");
  const [isNightTheme, setIsNightTheme] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    console.log(event.target.value);
  };

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
    console.log("Buttton language menu toggled!");
  };

  useEffect(() => {
    i18n.changeLanguage("Русский");
  }, []);

  return (
    <div className="flex border relative">
      <div className="flex items-center border border-b-0 border-l-0 border-t-0">
        <a href="/">
          <div className="flex items-center">
            {isSidebarOpen ? (
              <motion.span
                className="flex items-center ml-6"
                animate={{ opacity: 1, marginRight: 140 }}
                initial={{ opacity: 0, marginRight: 100 }}
                transition={{ duration: 0.3 }}
              >
                <LiaToothSolid className={`h-10 w-10 ${styles.icon}`} />
                <p className="ml-2 title">Tooth</p>
              </motion.span>
            ) : (
              <motion.span
                className="ml-5"
                animate={{ opacity: 1, marginRight: 19 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <LiaToothSolid className={`h-10 w-10 ${styles.icon}`} />
              </motion.span>
            )}
          </div>
        </a>
      </div>
      <FaBars
        onClick={onToggleSidebar}
        className={`mt-9 ml-8 ${styles.icon}`}
      />
      <div className="flex gap-4 justify-center mt-1 mb-5 ml-8">
        <div className="flex flex-grow relative">
          <input
            type="search"
            placeholder="Search for results..."
            onChange={handleSearchChange}
            className="rounded-lg border border-secondary-border
                       shadow-inner shadow-secondary py-1 text-lg
                       pl-6 pr-12 text-sm h-10 w-96 mt-4"
          />
          <Button className="absolute right-0 top-0 my-7">
            <CiSearch />
          </Button>
        </div>
      </div>
      <div>
        <button
          onClick={toggleLanguageMenu}
          className="myCustomColor text-sm text-white bg-myCustomColor
                     px-3 py-3 border-none rounded-3xl pointer shadow 
                   shadow-blue-500/40 hover:shadow-indigo-500/40
                     absolute top-5 right-72 "
        >
          {selectedLanguage}
        </button>
        {isLanguageMenuOpen && (
          <div className={styles.languageMenuContainer}>
            <div className={styles.diamond}></div>
            <button onClick={() => handleLanguageChange("Русский")}>
              Русский
            </button>
            <button onClick={() => handleLanguageChange("Казахский")}>
              Казахский
            </button>
            <button onClick={() => handleLanguageChange("Английский")}>
              Английский
            </button>
          </div>
        )}
      </div>
      <IoMoonOutline
        className={`absolute top-8 right-64 h-5 w-5 ${styles.icon}`}
      />
      <IoIosNotificationsOutline
        className={`absolute top-7 right-56 h-7 w-7 ${styles.icon}`}
      />
      <FaRegMessage 
        className={`absolute top-8 right-48 h-5 w-5 ${styles.icon}`}
      />
      <img src={Profile} alt="profile" className="h-8 w-8 absolute top-7 right-36" />
      <div className="flex flex-col absolute top-6 right-6">
        <span className="text-sm text-slate-900">Акан Серикович</span>
        <span className="text-xs text-slate-400">Стоматолог 1</span>
      </div>
    </div>
  );
};

export default PageHeader;
