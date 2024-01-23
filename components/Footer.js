import logo from "@/app/icon.png";
import config from "@/config";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

import appInfos from "@/package.json"

const Footer = () => {
  return (
    <footer className="bg-primary text-white border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-full md:w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                // className="max-w-full h-auto"
                // width={24}
                height={45}
              />
            </Link>

            <p className="mt-3 text-sm">{config.appDescription}</p>
            <p className="mt-3 text-sm">
              Copyright © {new Date().getFullYear()} - All rights reserved - <span className="text-xs opacity-75">v{appInfos.version}</span>
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link prefetch={false} href="/blog" className="link link-hover">
                  Blog
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4 flex flex-col justify-between">
              <div>
                <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                  Contact
                </div>

                <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                  <Link
                    href="mailto:julien.talbot@ergonomie.re"
                    className="link link-hover flex gap-2 items-center"
                  >
                    <Mail />
                    julien.talbot@ergonomie.re
                  </Link>
                  <Link
                    href="tel:+262693655544"
                    className="link link-hover flex gap-2 items-center"
                  >
                    <Phone />
                    +262693655544
                  </Link>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href="https://twitter.com/ergonomie_re"
                  target="_blank"
                  className="p-1 rounded-lg bg-base-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#000000"
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100088132995870"
                  target="_blank"
                  className="p-1 rounded-lg bg-base-100"
                >
                  <Facebook color="black" size={24} />
                </Link>
                <Link
                  href="https://www.instagram.com/julien.talbot.ergonomie/"
                  target="_blank"
                  className="p-1 rounded-lg bg-base-100"
                >
                  <Instagram color="black" size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/julien-talbot-ergonome/"
                  target="_blank"
                  className="p-1 rounded-lg bg-base-100"
                >
                  <Linkedin color="black" size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
