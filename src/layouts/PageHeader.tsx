import { ReactNode } from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import Button from "../components/Button";

interface PageHeaderProps {
  onToggleSidebar: () => void;
  children?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ onToggleSidebar }) => {
  return (
    <div className="flex gap-10 lg:gap-20 w-full">
      <a href="/">
        <img src={logo} alt="" className="h-6 w-6" />
      </a>
      <button onClick={onToggleSidebar}>Toggle Sidebar</button>
      <form className="flex gap-4  justify-center">
        <div className="flex flex-grow max-w-[600px] relative">
          <input
            type="search"
            placeholder="Search for results..."
            className="rounded-lg border border-secondary-border
                        shadow-inner shadow-secondary py-1 text-lg pl-6 pr-12"
          />
          <Button className="absolute right-0 top-0 mt-1 mr-1">
            <CiSearch />
          </Button>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default PageHeader;
