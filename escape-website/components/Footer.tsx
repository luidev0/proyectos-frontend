import Image from "next/image";
import Link from "next/link";

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";

const Footer = () => {
  return (
    <footer id="contacto" className="flexCenter mb-14">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-start gap-[10%] md:flex-row">
          <Link href={"/"} className="mb-10">
            <Image src={"/escape-logo.png"} alt="logo" width={74} height={74} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href={"/"} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link
                  href={"/"}
                  key={link.label}
                  className="flex gap-4 md:flex-col lg:flex-row"
                >
                  <p className="whitespace-nowrap">{link.label}</p>
                  <p className="medium-14 whitespace-nowrap">{link.value}</p>
                </Link>
              ))}
            </FooterColumn>

            <FooterColumn title={SOCIALS.title}>
              <ul className="regular-14 flex gap-4 text-gray-30">
                {SOCIALS.links.map((link) => (
                  <Link href={"/"} key={link}>
                    <Image
                      src={link}
                      alt="logo"
                      width={24}
                      height={24}
                      className="w-auto"
                    />
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="border bg-gray-20" />
        
        <p className="regular-14 w-full text-center text-gray-30">
          2024 Luidev | Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
