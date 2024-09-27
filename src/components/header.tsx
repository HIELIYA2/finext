import Image from "next/image";
import Link from "next/link";
import SiteNav from "./site-nav";
import logo from "../public/images/fincic-logo-full.png";

export default function Header() {
  return (
    <header className=" flex justify-between items-center py-1 px-7 border-b">
      <Link href="/">
        <Image
          src={logo}
          alt="Fincic logo"
          width={140}
          height={80}
        />
      </Link>
      <SiteNav />
    </header>
  );
}
