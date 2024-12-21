import { useState } from "react";
import AuthHeader from "./AuthHeader";
import Tabs from "./Tabs";
import TabContentWrapper from "./TabContentWrapper";

const AuthSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "SAAS" },
    { id: "tab2", label: "Self Hosted" },
  ];

  const saasContent = [
    { name: "Sign in with Github", img: "git.png" },
    { name: "Sign in with Bitbucket", img: "bucket.png" },
    { name: "Sign in with Azure Devops", img: "dev.png" },
    { name: "Sign in with GitLab", img: "gitlab.png" },
  ];

  const selfHostedContent = [
    { name: "Self Hosted GitLab", img: "gitlab.png" },
    { name: "Sign in with SSO", img: "key.png" },
  ];
  return (
    <section className="bg-[#FAFAFA] h-full flex flex-col justify-center items-center px-5">
      <div className="w-full shadow bg-white rounded-xl">
        <div className="py-5 px-6">
          <AuthHeader />
          <Tabs tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        {/* tab content */}
        <TabContentWrapper
          activeTab={activeTab}
          saasContent={saasContent}
          selfHostedContent={selfHostedContent}
        />
      </div>
      <p className="md:text-base text-sm text-[#181D27] mt-4">
        By signing up you agree to the{" "}
        <span className="font-bold">Privacy Policy</span>.
      </p>
    </section>
  );
};

export default AuthSection;
