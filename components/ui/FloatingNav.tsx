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
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
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
