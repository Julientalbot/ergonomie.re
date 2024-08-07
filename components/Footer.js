import logo from "@/app/icon.png";
import config from "@/config";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

import appInfos from "@/package.json";
import PWAButton from "./PWAButton";

const Footer = () => {
  return (
    <footer className="bg-primary border-base-content/10 border-t text-white">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className=" flex flex-col flex-wrap md:flex-row md:flex-nowrap lg:items-start">
          <div className="mx-auto w-full flex-shrink-0 text-center md:mx-0 md:w-96 md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex items-center justify-center gap-2 md:justify-start"
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
              Copyright © {new Date().getFullYear()} - All rights reserved -{" "}
              <span className="text-xs opacity-75">v{appInfos.version}</span>
            </p>
          </div>
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap justify-center text-center md:mt-0">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="footer-title mb-3 text-sm font-semibold tracking-widest md:text-left">
                LINKS
              </div>

              <div className="mb-10 flex flex-col items-center justify-center gap-2 text-sm md:items-start">
                <PWAButton />
              </div>
            </div>

            <div className="flex w-full flex-col justify-between px-4 md:w-1/2 lg:w-1/3">
              <div>
                <div className="footer-title mb-3 text-sm font-semibold tracking-widest md:text-left">
                  Contact
                </div>

                <div className="mb-10 flex flex-col items-center justify-center gap-2 text-sm md:items-start">
                  <Link
                    href="mailto:julien.talbot@ergonomie.re"
                    className="link link-hover flex items-center gap-2"
                  >
                    <Mail />
                    julien.talbot@ergonomie.re
                  </Link>
                  <Link
                    href="tel:+262693655544"
                    className="link link-hover flex items-center gap-2"
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
                  className="bg-base-100 rounded-lg p-1"
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
                  className="bg-base-100 rounded-lg p-1"
                >
                  <Facebook color="black" size={24} />
                </Link>
                <Link
                  href="https://www.instagram.com/julien.talbot.ergonomie/"
                  target="_blank"
                  className="bg-base-100 rounded-lg p-1"
                >
                  <Instagram color="black" size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/julien-talbot-ergonome/"
                  target="_blank"
                  className="bg-base-100 rounded-lg p-1"
                >
                  <Linkedin color="black" size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-8 justify-center">
          <img src="/assets/images/fse/2.jpg" width={140} />
          <img src="/assets/images/fse/3.jpg" width={140} />
        </div>
        <div className="mx-auto max-w-lg text-center p-4 mt-4">
          <small>
            {
              "Ce site a été financé par l’Union Européenne dans le cadre du programme"
            }
            {
              "FEDER-FSE+ Réunion dont l’Autorité de gestion est la Région Réunion."
            }
            {"L’Europe s’engage à La Réunion avec le fonds FEDER"}
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
