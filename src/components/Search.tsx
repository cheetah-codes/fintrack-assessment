"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { debounce } from "@/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [isHidden, setIsHidden] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const queryParams = useSearchParams();

  const { filterFunction } = useGlobalContext();

  const handleOnKeyUp = (val: string) => {
    filterFunction && filterFunction(val);

    router.push(`${pathname}?search=${val}`);
  };

  return (
    <div className="flex-1 h-10 mx-4 md:inline-flex items-center justify-between relative p-2">
      <input
        type="text"
        placeholder="Search "
        className={`w-full h-full p-4 rounded-md duration-2000 bg-[#34616F17] px-2 placeholder:text-sm text-base text-[#7d8184] border border-transparent outline-none focus-visible:border-[#f5f5f5] border[3px] ${
          isHidden ? "hidden" : ""
        }`}
        defaultValue={queryParams.get("search") ?? ""}
        onKeyUp={debounce(
          (e) => handleOnKeyUp((e.target as HTMLInputElement).value),
          500
        )}
      />
      <span className="w-12 h-full hover text-lightash text-2xl flex items-center justify-center rounded-tr-md rounded-br-md absolute right-0">
        <Image
          aria-hidden
          src="/search.svg"
          alt="widget"
          width={24}
          height={24}
          onClick={() => setIsHidden(!isHidden)}
        />
      </span>
    </div>
  );
};

export default Search;
