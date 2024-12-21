import { ArrowUp } from "lucide-react"
import StatCard from "./StatCard"


const MarketingSection = () => {
    const stats = [
        { value: "30+", label: "Language Support" },
        { value: "10k+", label: "Developers" },
        { value: "100k+", label: "Hours Saved" },
      ];
  return (
    <section className="bg-white h-full hidden md:flex justify-center items-center relative shadow">
        <div className="relative">
          <div className="bg-white shadow-custom rounded-3xl w-[447px]">
            <div className="flex items-center gap-1 border-b border-lightGray  p-4">
              <img
                src="/logo.svg"
                alt="Company logo"
                className="h-6 w-6"
                loading="eager"
              />
              <h1 className="text-lg text-customBlue font-bold">
                AI to Detect & Autofix Bad Code
              </h1>
            </div>

            <div className="grid grid-cols-3 px-4 py-6 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          <div className="w-64 bg-white shadow-custom rounded-3xl  py-4 px-8 flex flex-col gap-y-3 absolute -right-6 -bottom-36">
            <div className="flex justify-between items-center">
              <img
                src="graph.svg"
                alt="Performance graph"
                className="w-14 h-14"
              />
              <div className="flex flex-col gap-0">
                <div className="flex items-center gap-1 text-[#0049C6] ">
                  <ArrowUp className="w-5 h-5" />
                  <span className="font-bold text-sm">14%</span>
                </div>
                <span className="text-xs text-darkGray">This week</span>
              </div>
            </div>
            <div>
              <p className="text-darkGray font-bold text-sm">Issues Fixed</p>
              <p className="text-3xl font-bold">500K+</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0">
          <img
            src="subtract.png"
            alt="Decorative background pattern"
            className="w-[250px] h-[250px]"
            loading="lazy"
          />
        </div>
      </section>
  )
}

export default MarketingSection