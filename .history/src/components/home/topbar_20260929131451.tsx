import { Mail, Phone, Sparkles } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#003B5C] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[10px] sm:px-6 sm:text-xs">
        <div className="flex items-center gap-1.5">
          <Sparkles size={12} className="text-[#F4C542]" />
          <span>Faith • Skills • Opportunity • Global Impact</span>
        </div>

        <div className="hidden items-center gap-5 sm:flex">
          <a
            href="tel:+2348124526982"
            className="flex items-center gap-1.5 transition hover:text-[#5DE1E6]"
          >
            <Phone size={12} />
            <span>08124526982, 08141570784</span>
          </a>

          <a
            href="mailto:learn@iola.com"
            className="flex items-center gap-1.5 transition hover:text-[#5DE1E6]"
          >
            <Mail size={12} />
            <span>learn@iola.com</span>
          </a>

          <a
            href="#student-portal"
            className="rounded-md bg-[#0B5278] px-3 py-1.5 font-medium transition hover:bg-[#08658F]"
          >
            Student Portal
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;