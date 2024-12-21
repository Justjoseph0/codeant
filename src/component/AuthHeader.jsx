const AuthHeader = () => {
  return (
    <div>
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-2 text-[#181D27]">
          <img src="logo.svg" className="w-8 h-8" alt="logo" />
          <span className="text-3xl font-normal">CodeAnt AI</span>
        </div>
      </div>
      <h3 className="md:text-3xl text-2xl font-semibold text-center mb-7">
        Welcome to CodeAnt AI
      </h3>
    </div>
  );
};

export default AuthHeader;
