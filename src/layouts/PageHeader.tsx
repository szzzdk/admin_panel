
import { ReactNode } from "react";
import { CiSearch } from "react-icons/ci";
import Button from "../components/Button";

interface PageHeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  children?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ onToggleSidebar }) => {
  // const [ searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="flex gap-20 lg:gap-20 w-full">
      <button onClick={onToggleSidebar}>Toggle Sidebar</button>
      <form className="flex gap-4 justify-center">
        <div className="flex flex-grow max-w-[600px] relative">
          <input
            type="search"
            placeholder="Search for results..."
            className="rounded-lg border border-secondary-border
                        shadow-inner shadow-secondary py-1 text-lg pl-6 pr-12"
          />
          <Button className="absolute right-0 top-0 mt-3 mr-1">
            <CiSearch />
          </Button>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default PageHeader;
