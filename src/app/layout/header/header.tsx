import Image from "next/image";
import Link from "next/link";

import UserButton from "./userButton";

const Header = () => {
  return (
    <div>
      <header className="h-[80px] border-b p-4">
        <div className="container flex h-full max-w-[1200px] items-center justify-between">
          <Link href="/" className="flex">
            <Image src="/logo/logo.jpg" alt="logo" width={50} height={50}/>
            <h1 className="flex items-center text-3xl font-bold">Tech Type</h1>
          </Link>
          <UserButton />
        </div>
      </header>
    </div>
  );
};

export default Header;
