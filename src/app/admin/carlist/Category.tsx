"use client";
import React, { useEffect, useState, useTransition } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormError } from "@/lib/form-error";
import { FormSuccess } from "@/lib/form-success";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { newCategorySchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategoryType } from "@/lib/interfaces";

function Category() {
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();
  const pathname = usePathname();

  const categoryParam = searchParams.get("category");

  const [category, setCategory] = useState<CategoryType[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await axios.get("/api/category");
      setCategory(result.data);
      console.log("fetched");
    };
    fetchData();
  }, [refresh]);

  const handleDelete = async (id: string, name: string) => {
    console.log(name);
    console.log(categoryParam);
    if (name == categoryParam) {
      console.log(pathname);
      replace(`${pathname}`);
      console.log("worked");
    }
    const res = axios.put("/api/category", {
      id,
    });
    setRefresh((prev: boolean) => !prev);
  };

  const handleChange = (name: any) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", name);
    push(`${pathname}?${params}`);
  };

  const form = useForm<z.infer<typeof newCategorySchema>>({
    resolver: zodResolver(newCategorySchema),
    defaultValues: {
      category: "",
    },
  });

  const onSubmit = (values: z.infer<typeof newCategorySchema>) => {
    setSuccess("");
    setError("");

    startTransition(async () => {
      try {
        const res = await axios.post("/api/category", { values });
        setSuccess(res.data.success);
        setCategory((prev: CategoryType[]) => [...prev, res.data.data]);
      } catch (e: any) {
        setError(e.response.data.error);
      }
    });
  };

  return (
    <div className="w-[28%] p-4 flex flex-col rounded-md gap-4">
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Category name"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button className="w-full" type="submit" disabled={isPending}>
            Add category
          </Button>
        </form>
      </Form>
      <div className="flex flex-col gap-4 border-t-2 border-[#3563e8] pt-2 min-h-[600px]">
        {category.length == 0 ? (
          <h1 className="text-center">No category</h1>
        ) : (
          category.map((item: any) => (
            <div
              onClick={() => handleChange(item.name)}
              key={crypto.randomUUID()}
              className={`${
                item.name === categoryParam &&
                `bg-[#3563e8] ml-0 text-2xl text-white`
              } flex border-2 rounded-md border-[#3563e8] px-2 ml-4 text-sm cursor-pointer justify-between`}
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
