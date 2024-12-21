import { Input } from "@/components/ui/input";
import { Plus, RefreshCcw, Search } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className=" px-4">
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-[#181D27]">
            Repositories
          </h3>
          <p className="text-sm text-[#414651] font-normal">
            33 total repositories
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <button className="text-[#414651] shadow rounded-lg flex justify-center gap-x-2 items-center border border-[#D5D7DA] px-4 py-3">
            <RefreshCcw size={20} />
            <span className="text-sm">Refresh All</span>
          </button>
          <button className="text-white shadow rounded-lg flex justify-center gap-x-2 items-center bg-[#1570EF] px-4 py-3">
            <Plus size={20} />
            <span className="text-sm">Add Repository</span>
          </button>
        </div>
      </div>
      <div className="relative mt-4 w-full max-w-[366px]">
        <Search
          size={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#414651]"
        />
        <Input className="w-full pl-10 py-5 border-[#D5D7DA]" placeholder="Search repositories" />
      </div>
    </header>
  );
};

export default DashboardHeader;
