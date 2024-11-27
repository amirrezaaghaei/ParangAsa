"use client";
import { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navItems } from "@/data";

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

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-600/10"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div
          className={`relative flex flex-row-reverse items-center justify-between ${classNames(
            "transition-all duration-[850ms]",
            isScrolled ? "h-16" : "h-24"
          )}`}
        >
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex-1 flex flex-row-reverse items-center justify-center sm:items-stretch sm:justify-start">
            <svg className={classNames(
                    isScrolled ? "text-primary-500" : "text-white", "fill-current h-16 w-16"
            )} width="42" height="27" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.366 27C38.1367 26.8019 38.904 26.589 39.6667 26.3614C39.4641 25.6829 39.2614 25.0044 39.0599 24.3248C39.8056 24.1028 40.5467 23.8661 41.2832 23.6145C41.0544 22.944 40.8267 22.2735 40.5979 21.603C39.1829 22.0845 37.7554 22.5114 36.3074 22.8836C36.6603 24.2554 37.0132 25.6271 37.366 26.9989V27Z"/>
            <path d="M35.5014 1.98305C32.9343 2.9723 30.3366 3.66557 27.6193 4.08677L27.2937 1.98646C29.8607 1.58803 32.3139 0.933468 34.7375 0C34.9925 0.661396 35.2464 1.32165 35.5014 1.98305Z"/>
            <path d="M37.4116 6.94068C32.4187 8.86453 27.1127 9.8515 21.7623 9.8515V5.60195C26.5913 5.60195 31.3782 4.71174 35.8839 2.97571L37.4116 6.94068Z"/>
            <path d="M3.82039 12.8887C13.5137 16.6237 24.1301 17.2407 34.1911 14.6532C33.8382 13.2814 33.4853 11.9097 33.1324 10.5379C24.9509 12.6417 16.3448 12.4345 8.27485 9.93801C8.90324 7.90829 9.53048 5.87857 10.1589 3.84771C9.30964 3.58474 8.47179 3.29446 7.64192 2.97458C6.36808 6.27928 5.09537 9.58398 3.82153 12.8887H3.82039Z"/>
            <path d="M35.416 12.1078C36.0045 11.9324 36.5897 11.7458 37.1702 11.5477C36.9414 10.8772 36.7137 10.2067 36.4849 9.53617C35.9294 9.72514 35.3705 9.90387 34.8081 10.0712C35.0107 10.7497 35.2134 11.4281 35.4148 12.1078H35.416Z"/>
            <path d="M5.13521 20.0878C17.2134 23.8239 30.1988 23.3822 41.9958 18.8367C41.4869 17.515 40.977 16.1934 40.4681 14.8717C28.4286 19.5106 15.096 19.5106 3.05654 14.8717C2.03769 17.515 1.01885 20.1595 0 22.8028C1.2784 23.2957 2.57045 23.7431 3.87844 24.1484C4.29737 22.7948 4.71515 21.4413 5.13407 20.0889L5.13521 20.0878Z"/>
            </svg>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex flex-row-reverse space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-white text-black font-medium"
                      : isScrolled
                      ? "text-gray-700 hover:text-gray-600 font-medium"
                      : "text-white hover:text-gray-200 font-medium",
                    "px-3 py-2 rounded-md text-sm font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      <DisclosurePanel className="sm:hidden">
        <div className="bg-white h-screen space-y-1 px-6 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-white text-black font-medium"
                  : "text-gray-600 hover:text-indigo-800 font-medium",
                "block px-3 py-12 rounded-md text-xl underline font-medium text-right"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
