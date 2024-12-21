import PropTypes from 'prop-types';
import TabContent from "./TabContent";

const TabContentWrapper = ({ activeTab, saasContent, selfHostedContent }) => {
  return (
    <div className="border-t py-6 h-[340px] px-4 md:px-0">
    <div className="flex flex-col gap-y-4 items-center">
      {(activeTab === "tab1" ? saasContent : selfHostedContent).map((content) => (
        <TabContent content={content} key={content.name} />
      ))}
    </div>
  </div>
  );
};

TabContentWrapper.propTypes = {
    activeTab: PropTypes.string, 
    saasContent: PropTypes.array, 
    selfHostedContent: PropTypes.array,
  };
  

export default TabContentWrapper;
