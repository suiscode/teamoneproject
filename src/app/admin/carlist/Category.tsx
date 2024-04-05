"use client";
import React, { useEffect, useState, useTransition } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CategoryItem } from "@/lib/interface";
import { BeatLoader } from "react-spinners";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/lib/form-error";
import { FormSuccess } from "@/lib/form-success";
import { NewCategory, NewPasswordSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

function Category() {
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();
  const pathname = usePathname();
  const categoryParam = searchParams.get("category");
  const [category, setCategory] = useState<CategoryItem[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (values: z.infer<typeof NewCategory>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      try {
        const res = await axios.post("/api/category", {
          values,
        });
        form.reset();
        console.log(res);
        setCategory((prev: CategoryItem[]) => [res.data.data, ...prev]);
        setSuccess(res.data.success);
      } catch (e: any) {
        setError(e.response.data.error);
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await axios.get("/api/category");
      setCategory(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleDelete = async (id: string, name: string) => {
    setCategory((prev): any => prev.filter((item) => item._id !== id));
    const res = axios.put("/api/category", {
      id,
    });
  };

  const handleChange = (name: any) => {
    setSuccess("");
    const params = new URLSearchParams(searchParams);
    params.set("category", name);
    push(`${pathname}?${params}`);
  };

  const form = useForm<z.infer<typeof NewCategory>>({
    resolver: zodResolver(NewCategory),
    defaultValues: {
      category: "",
    },
  });

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
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Enter a name"
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
            ADD CATEGORY
          </Button>
        </form>
      </Form>
      <div className="flex flex-col gap-4 border-t-2 border-primary pt-2 min-h-[600px]">
        {loading && <BeatLoader className="self-center" />}
        {!loading && category.length === 0 ? (
          <h1 className="text-center">No category</h1>
        ) : (
          category.map((item: any) => (
            <div
              onClick={(e) => {
                handleChange(item.name);
              }}
              key={crypto.randomUUID()}
              className={`${
                item.name === categoryParam &&
                `bg-primary -ml-0 text-2xl py-[6px]  text-white`
              } py-[2px] items-center border-primary border flex rounded-md  px-2 ml-4 text-sm cursor-pointer justify-between`}
            >
              <p>{item.name}</p>
              <div className="flex gap-4">
                <EditIcon className="cursor-pointer" />
                <DeleteIcon
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item._id, item.name);
                  }}
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
