import { Mail, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-[#003B5C] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-sm">
        <div className="flex items-center gap-1.5">
          <Sparkles size={12} className="text-[#F4C542]" />
          <span>Faith • Skills • Opportunity • Global Impact</span>
        </div>

        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-5">
          <a
            href="tel:+2348122452692"
            className="flex items-center gap-1.5 transition hover:text-[#5DE1E6]"
          >
            <Phone size={12} />
            <span>08122452692, 08141570784</span>
          </a>

          <a
            href="mailto:learn@iola.com"
            className="flex items-center gap-1.5 transition hover:text-[#5DE1E6]"
          >
            <Mail size={12} />
            <span>learn@iola.com</span>
          </a>

          <Link
            to="/student-portal"
            className="rounded-md bg-[#0B5278] px-3 py-1.5 font-medium transition hover:bg-[#08658F]"
          >
            Student Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;