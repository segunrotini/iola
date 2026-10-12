

import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#0B3B5A] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
        <div className="flex items-center gap-6">
          <a
            href="tel:+2340000000000"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <Phone size={15} />
            <span>+234 000 000 0000</span>
          </a>

          <a
            href="mailto:info@iola.com"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <Mail size={15} />
            <span>info@iola.com</span>
          </a>
        </div>

        <p className="hidden sm:block">
          Quality Online Learning for a Brighter Tomorrow
        </p>
      </div>
    </div>
  );
};

export default TopBar;
