import { Database } from "lucide-react";
import PropTypes from 'prop-types';
const RepositoryItem = ({ item }) => {
  return (
    <li className="p-3 md:p-5 hover:bg-[#F5F5F5] transition-colors">
      <div className="flex items-center gap-2">
        <h1 className="font-medium text-lg md:text-xl">{item.name}</h1>
        <span className="w-[65px] h-6 rounded-full flex items-center text-xs md:text-sm justify-center border bg-[#EFF8FF] border-[#B2DDFF] text-[#175CD3]">
          {item.status}
        </span>
      </div>
      <div className="my-3 flex gap-5 md:gap-7 items-center">
        <div className="flex items-center gap-2">
          <p className=" text-sm md:text-[16px] text-[#181D27]">
            {item.language}
          </p>
          <div className="h-2 w-2 rounded-full bg-[#1570EF]" />
        </div>
        <div className="flex items-center gap-1">
          <Database size={10.5} />
          <p className=" text-sm md:text-[16px] text-[#181D27]">{item.size}</p>
        </div>
        <div>
          <p className=" text-sm md:text-[16px] text-[#181D27]">{item.date}</p>
        </div>
      </div>
    </li>
  );
};

RepositoryItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    status: PropTypes.string.isRequired, 
    language: PropTypes.string.isRequired, 
    size: PropTypes.string.isRequired, 
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default RepositoryItem;
