import AuthSection from "@/component/AuthSection";
import MarketingSection from "@/component/MarketingSection";

const Login = () => {
  return (
    <section className="min-h-screen grid md:grid-cols-2">
      <MarketingSection />
      <AuthSection />
    </section>
  );
};

export default Login;
