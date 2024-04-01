"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Category() {
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();
  const pathname = usePathname();

  const categoryParam = searchParams.get("category");

  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("/api/category", {
      name: input,
    });
    setRefresh((prev: any) => prev + 1);
    setInput("");
    console.log(res);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await axios.get("/api/category");
      setCategory(result.data);
    };
    fetchData();
  }, [refresh]);

  const handleDelete = async (id, name) => {
    console.log(name);
    console.log(categoryParam);
    if (name == categoryParam) {
      console.log(pathname);
      replace(`${pathname}`);
      console.log('worked');
    }
    const res = axios.put("/api/category", {
      id,
    });
    setRefresh((prev: boolean) => !prev);
  };

  const handleChange = (name: any) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", name);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="w-[28%] p-4 flex flex-col rounded-md gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <TextField
          id="outlined-basic"
          label="Category"
          variant="outlined"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="w-full"
          autoComplete="false"
          required
        />
        <button className="bg-[#3563e8] w-1/2 text-white rounded-md py-1">
          ADD CATEGORY
        </button>
      </form>
      <div className="flex flex-col gap-4 border-t-2 border-[#3563e8] pt-2 min-h-[600px]">
        {category.length === 0 ? (
          <h1 className="text-center">No category</h1>
        ) : (
          category.map((item: any) => (
            <div
              onClick={() => handleChange(item.name)}
              key={crypto.randomUUID()}
              className={`${
                item.name === categoryParam && `bg-[#3563e8] ml-0 text-white`
              } flex border-2 rounded-md border-[#3563e8] px-2 ml-4 text-xl cursor-pointer justify-between`}
            >
              <p>{item.name}</p>
              <div className="flex gap-4">
                <EditIcon className="cursor-pointer" />
                <DeleteIcon
                  className="cursor-pointer"
                  onClick={() => handleDelete(item._id, item.name)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Category;
