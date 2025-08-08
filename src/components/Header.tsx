import Image from "next/image";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex justify-between mt-3 sm:justify-between">
      <div className="flex gap-7 align-center">
        <div className="py-[10px] pl-[3px]">
          <Image
            aria-hidden
            src="/hamburger-Icon.svg"
            alt="menu"
            width={18}
            height={12}
          />
        </div>
        <Image aria-hidden src="/logo.svg" alt="logo" width={112} height={32} />
      </div>

      {/* second half */}
      <div className="flex align-center gap-7 ">
        <Search />

        <Image
          aria-hidden
          src="/widget-Icon.svg"
          alt="widget"
          width={24}
          height={24}
        />
      </div>
    </header>
  );
};

export default Header;
