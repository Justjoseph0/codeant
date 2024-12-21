import PropTypes from 'prop-types';
const Tabs = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <div className="flex bg-[#FAFAFA] border border-[#E9EAEB] rounded-lg">
      {tabs.map((tab, index) => (
        <button
          onClick={() => setActiveTab(tab.id)}
          key={index}
          className={`md:w-1/2 w-full py-3 transition-all duration-300 ease-in-out font-semibold text-xl ${
            activeTab === tab.id
              ? "bg-[#1570EF] text-white shadow"
              : "text-[#414651]"
          } rounded-lg`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
Tabs.propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
      })
    ).isRequired,
    setActiveTab: PropTypes.func,
    activeTab: PropTypes.string, 
  };
  
export default Tabs;
