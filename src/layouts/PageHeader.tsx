import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { CiSearch } from "react-icons/ci";
import Button from "../components/Button";
import { useTranslation, initReactI18next } from "react-i18next";
import { LiaToothSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa";
import i18n from "i18next";
import translationRU from "../locales/ru.json";
import translationKZ from "../locales/kz.json";
import translationEN from "../locales/en.json";
import { motion } from "framer-motion";

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
    <div className="flex border ">
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
                transition={{ duration: 0.3 }}>
                <LiaToothSolid className={`h-10 w-10 ${styles.icon}`} />
              </motion.span>
            )}
          </div>
        </a>
      </div>
      <FaBars 
        onClick={onToggleSidebar} 
        className={`cursor-pointer ${styles.icon}`} 
        style={{ marginTop: "35px", marginLeft: "30px" }} 
      />
      <div className="flex gap-4 justify-center" style={{ marginTop: "5px", marginBottom: "20px", marginLeft: "30px"}}>
        <div className="flex flex-grow relative">
          <input
            type="search"
            placeholder="Search for results..."
            onChange={handleSearchChange}
            className="rounded-lg border border-secondary-border
                       shadow-inner shadow-secondary py-1 text-lg
                       pl-6 pr-12 text-sm"
            style={{ height: "2.5rem", width: "25rem", marginTop: "15px"}}
          />
          <Button className="absolute right-0 top-0 mt-3 mr-1" style={{marginTop: "30px", marginBottom: "30px"}}>
            <CiSearch />
          </Button>
        </div>
      </div>
      <div>
        <button onClick={toggleLanguageMenu} className={styles.languageButton} style={{ marginTop: "30px", marginBottom: "20px", marginLeft: "300px"}}>
          {selectedLanguage} {isLanguageMenuOpen ? "▲" : "▼"}
        </button>
        {isLanguageMenuOpen && (
          <div className="flex flex-col items-center justify-center absolute mt-2 bg-white border" style={{ marginLeft: "285px"}}>
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
    </div>
  );
};

export default PageHeader;
