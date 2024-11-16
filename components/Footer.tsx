import { FaLocationArrow } from "react-icons/fa6";

import { navItems, socialMedia } from "@/data";
import MagicButton from "./MagicButton";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: NavigationItem[] = [
  { name: navItems[0].name, href: navItems[0].link, current: false },
  { name: navItems[1].name, href: navItems[1].link, current: false },
  { name: navItems[2].name, href: navItems[2].link, current: false },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const Footer = () => {
  return (
    <footer
      className="w-full px-6 sm:px-8 py-20 sm:py-24 mx-2 bg-neutral-50"
      id="contact"
    >
      <nav className="flex flex-row-reverse justify-center items-center">
        <div className="flex flex-row-reverse gap-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-neutral-500 hover:text-neutral-700 hover:font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <div className="flex gap-16 pt-10 justify-center">
        {socialMedia.map((info) => (
          <a
            key={info.id}
            href={info.link}
            target="_blank"
            className="cursor-pointer flex justify-center items-center"
          >
            <img src={info.img} alt="icons" width={20} height={20} />
          </a>
        ))}
      </div>
      <p className="text-sm text-neutral-400 text-center pt-10">
        © 2024 Nima Parangasa. All rights reserved.
      </p>
      {/* <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
