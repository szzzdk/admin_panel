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
  fallbackLng: "Русский", // Устанавливаем русский язык по умолчанию
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
    i18n.changeLanguage("Русский"); // Изменяем язык на русский при монтировании компонента
  }, []);

  return (
    <div className="flex border " >
      <div className="flex items-center border border-b-0 border-l-0 border-t-0">
        <a href="/">
          <div className="flex items-center">
            {isSidebarOpen ? (
              <div
                className="flex items-center ml-5"
                style={{
                  paddingRight: "219px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <LiaToothSolid className="h-10 w-10 icon" />
                <p className="ml-2 title">Tooth</p>
              </div>
            ) : (
              <div style={{padding: "14px"}}>
                <LiaToothSolid className="h-10 w-10 icon" />
              </div>
            )}
          </div>
        </a>
      </div>
      <FaBars onClick={onToggleSidebar} className="cursor-pointer" style={{ marginTop: "30px" }} />
      <div className="flex gap-4 justify-center">
        <div className="flex flex-grow relative">
          <input
            type="search"
            placeholder="Search for results..."
            onChange={handleSearchChange}
            className="rounded-lg border border-secondary-border
                       shadow-inner shadow-secondary py-1 text-lg pl-6 pr-12"
            style={{ height: "2.5rem", marginTop: "15px"}}
          />
          <Button className="absolute right-0 top-0 mt-3 mr-1" style={{marginTop: "30px"}}>
            <CiSearch />
          </Button>
        </div>
      </div>
      <div>
        <button onClick={toggleLanguageMenu} className={styles.languageButton} style={{ marginTop: "20px"}}>
          {selectedLanguage} {isLanguageMenuOpen ? "▲" : "▼"}
        </button>
        {isLanguageMenuOpen && (
          <div className="flex flex-col items-center justify-center absolute mt-2 bg-white border">
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
