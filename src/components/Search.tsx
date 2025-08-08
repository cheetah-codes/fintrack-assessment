"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { debounce } from "@/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const queryParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const { filterFunction } = useGlobalContext();

  const handleOnKeyUp = (val: string) => {
    // first filter and push to route params

    filterFunction && filterFunction(val);
    // secondly, push search to query params
    router.push(`${pathname}?search=${val}`);
  };

  return (
    <div className="flex-1 h-10 mx-4 md:inline-flex items-center justify-between relative">
      <input
        type="text"
        placeholder="Search "
        className="w-full h-full rounded-md bg-[#e5e5e5] px-2 placeholder:text-sm text-base text-[#7d8184] border border-transparent outline-none focus-visible:border-[#f5f5f5] border[3px]"
        defaultValue={queryParams.get("search") ?? ""}
        onKeyUp={debounce(
          (e) => handleOnKeyUp((e.target as HTMLInputElement).value),
          500
        )}
      />
      {/* {searchQuery && (
        <MdOutlineClose className=" text-2xl text-lightash hover:text-red-600 absolute right-14 duration-200 cursor-pointer" />
      )} */}
      <span className="w-12 h-full hover text-lightash text-2xl flex items-center justify-center rounded-tr-md rounded-br-md absolute right-0">
        <Image
          aria-hidden
          src="/search.svg"
          alt="widget"
          width={24}
          height={24}
        />
      </span>
    </div>
  );
};

export default Search;
