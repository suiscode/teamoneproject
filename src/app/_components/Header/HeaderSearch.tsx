"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import SeachResults from "./SeachResults";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

function HeaderSearch() {
  const { push } = useRouter();
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.put("/api/car/", {
        input,
      });
      console.log(res);
      setData(res.data.hits);
    };
    fetchData();
    if (!show && input) {
      setShow(true);
    }
  }, [input]);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      setShow(false);
      push(`/cars?search=${input}`);
    }
  };
  return (
    <div className="flex h-4 items-center flex-row rounded-3xl w-1/3  relative">
      <Input
        type="texts"
        placeholder="Search"
        value={input}
        onKeyDown={handleKeyPress}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-4 text-black rounded-3xl bg-white outline-none"
      />
      <button className="absolute right-4">
        <IoIosSearch className="h-[18px] text-black w-[18px]" />
      </button>
      {show && <SeachResults data={data} setShow={setShow} />}
    </div>
  );
}

export default HeaderSearch;
