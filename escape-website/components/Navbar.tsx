"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "./Button";

import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => setMobileMenu((open) => !open);

  return (
    <nav className="flexBetween max-container padding-container z-30 py-5">
      <Link href={"/"}>
        <Image
          src={"/escape-logo.png"}
          priority
          alt="EscaPE"
          width={74}
          height={29}
          className="w-auto"
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Iniciar Sesión"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <button
        type="button"
        onClick={toggleMenu}
        className="inline-block cursor-pointer lg:hidden"
      >
        <Image src="menu.svg" alt="menu" width={32} height={32} />
        {mobileMenu && (
          <ul className="absolute top-16 right-0 flex flex-col items-center justify-center gap-5 bg-black h-full w-full z-50">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-32 text-white flexCenter cursor-pointer transition-all hover:font-bold p-2 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
