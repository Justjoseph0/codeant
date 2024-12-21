import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Code2,
  Settings,
  LogOut,
  Home,
  Cloud,
  Book,
  Phone,
  X,
  Menu,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Repositories");
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resize and set mobile state
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768; 
      setIsMobile(isMobileView);
      // Close sidebar on mobile
      setIsSidebarOpen(!isMobileView);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    {
      icon: <Home size={20} />,
      label: "Repositories",
      path: "/dashboard",
    },
    { icon: <Code2 size={20} />, label: "AI Code Review", path: "#" },
    { icon: <Cloud size={20} />, label: "Cloud Security", path: "#" },
    { icon: <Book size={20} />, label: "How to Use", path: "#" },
    { icon: <Settings size={20} />, label: "Settings", path: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header for small devices */}
      <header className="sticky top-0 z-30 flex items-center justify-between p-4 bg-white border-b md:hidden">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold text-[#181D27]">
            CodeAnt AI
          </span>
        </div>
        <Menu
          size={24}
          className="cursor-pointer text-[#181D27]"
          onClick={() => setIsSidebarOpen(true)}
        />
      </header>

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 z-40 md:h-screen h-fit bg-white shadow
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0 w-full" : "-translate-x-full w-64"}
        md:translate-x-0 md:w-64
        `}
      >
        <div className="flex flex-col justify-between h-full p-4">
          {/* Logo and Navigation */}
          <div className="flex flex-col mt-3 gap-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
                <span className="text-2xl font-normal text-[#181D27]">
                  CodeAnt AI
                </span>
              </div>
              <X
                size={24}
                className="text-[#181D27] md:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            </div>
            <div className="w-full">
              <Select>
                <SelectTrigger className="py-5">
                  <SelectValue placeholder="UtkarshDhairyaPanwar..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">UtkarshDhairyaPanwar...</SelectItem>
                  <SelectItem value="profile">Profile</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {navItems.map((item,index) => (
                <Link
                  onClick={() => {
                    setActiveTab(item.label);
                    if (isMobile) setIsSidebarOpen(false);
                  }}
                  key={index}
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-4 md:py-3 py-2 rounded-lg
                    transition-colors duration-200 text-base font-semibold
                    ${
                      activeTab === item.label
                        ? "bg-[#1570EF] text-white"
                        : "text-[#414651] hover:bg-gray-50"
                    }
                  `}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Support and Logout Buttons */}
          <div>
            <button className="w-full flex items-center gap-3 px-4 py-3 font-semibold text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <Phone size={20} />
              <span className="font-medium">Support</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 font-semibold text-[#414651] hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`
        transition-margin duration-300 ease-in-out
        ${isSidebarOpen ? "md:ml-64" : ""}
        min-h-screen bg-[#FAFAFA] md:p-6
      `}
      >
        {/* Page Content */}
        <div className="bg-white md:rounded-xl shadow-custom ">
          <Outlet />
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;