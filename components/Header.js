"use client";

import { useState } from "react";
// import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";
import CTAButton from "./CTAButton";
import ButtonAccount from "./ButtonAccount";

const links = [
  {
    href: "/#pourquoi",
    label: "Pourquoi ?",
  },
  {
    href: "/#comment",
    label: "Comment ?",
  },
  {
    //   href: "/#why-me",
    //   label: "Pourquoi moi ?",
    // },
    // {
    href: "/#à-propos",
    label: "Qui suis-je ?",
  },
  // {
  // href: "/blog",
  // label: "Blog",
  // },
];

// const cta = (
// );
const cta = (
  // <ButtonSignin extraStyle="bg-base-100 hover:bg-base-100 hover:text-black" />
  <CTAButton className=" text-primary !bg-base-100" />
);

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  return (
    <header className="bg-primary text-white">
      <nav
        className="container mx-auto flex max-w-7xl items-center justify-between p-2"
        aria-label="Global"
      >
        {/* Your logo/name on large screens */}
        <div className="flex lg:flex-1">
          <Link
            className="flex shrink-0 items-center gap-2 "
            href="/"
            title={`${config.appName} hompage`}
          >
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className=""
              placeholder="blur"
              priority={true}
              // width={32}
              height={45}
            />
            {/* <span className="font-extrabold text-3xl">{config.appName}</span> */}
          </Link>
        </div>
        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="text-base-content h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Your links on large screens */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-2">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="hover:bg-base-100 rounded-lg px-6 py-2 hover:text-black"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
          <ButtonAccount />
        </div>

        {/* CTA on large screens */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">{cta}</div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`bg-primary sm:ring-neutral/10 fixed inset-y-0 right-0 z-10 w-full origin-right transform overflow-y-auto p-2 transition duration-300 ease-in-out sm:max-w-sm sm:ring-1`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link
              className="flex shrink-0 items-center gap-2 "
              title={`${config.appName} hompage`}
              href="/"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className=""
                placeholder="blur"
                priority={true}
                // width={32}
                height={45}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Your links on small screens */}
          <div className="mt-6 flow-root">
            <div className="py-4">
              <div className="flex flex-col items-center gap-y-4">
                {links.map((link) => (
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={link.href}
                    key={link.href}
                    className="link link-hover"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            {/* Your CTA on small screens */}
            <div className="flex flex-col">{cta}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
