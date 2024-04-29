"use client";
import React, { useEffect, useState, useTransition } from "react";
import axios from "axios";
import { MdDelete, MdModeEdit } from "react-icons/md";

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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";

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
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const onSubmit = async (values: z.infer<typeof NewCategory>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      try {
        const res = await axios.post("/api/category", {
          values,
        });
        setCategory((prev: CategoryItem[]) => [res.data.data, ...prev]);

        form.reset();
        toast({
          variant: "default",
          title: "Category added",
        });
        console.log("toast worked");
      } catch (e: any) {
        toast({
          variant: "destructive",
          title: e.response.data.error,
        });
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
    setError("");
    setSuccess("");
    if (name === categoryParam) {
      push("/admin/carlist");
    }

    setCategory((prev): any => prev.filter((item) => item.id !== id));
    const res = axios.put("/api/category", {
      id,
    });
  };

  const handleChange = (name: any) => {
    setError("");
    setSuccess("");
    const params = new URLSearchParams(searchParams);
    params.set("category", name);
    push(`${pathname}?${params}`);
  };

  const handleEdit = (id: string) => {
    setError("");
    setSuccess("");
    setEdit(true);
    setEditId(id);
  };

  const handleUpdate = async (values: z.infer<typeof NewCategory>) => {
    const res = await axios.patch("/api/category", {
      ...values,
      id: editId,
    });
    const params = new URLSearchParams(searchParams);
    params.set("category", values.category);
    push(`${pathname}?${params}`);
    setCategory((prev) => {
      return prev.map((item) => {
        if (item.id === editId) {
          return {
            ...item,
            name: values.category,
          };
        }
        return item;
      });
    });
    setEdit(false);
    setSuccess("Successfully edited");
  };

  const form = useForm<z.infer<typeof NewCategory>>({
    resolver: zodResolver(NewCategory),
    defaultValues: {
      category: "",
    },
  });

  return (
    <div className="w-[20%] border-l backdrop-blur-3xl h-[calc(100vh-120px)] p-4 flex flex-col rounded-md gap-4 text-secondary">
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
      <div className="flex flex-col gap-4 border-t-2 border-primary pt-2 pl-6  h-full pr-2 overflow-x-hidden overflow-y-scroll">
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
                `-ml-4 text-2xl py-2 text-primary bg-white`
              } py-1 px-4 items-center border-white border flex rounded-mdpx-2 text-md rounded-md cursor-pointer justify-between`}
            >
              <p>{item.name}</p>
              <div className="flex gap-2">
                <MdModeEdit
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(item.id);
                  }}
                />
                <MdDelete
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item.id, item.name);
                  }}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <Dialog open={edit} onOpenChange={setEdit}>
        <DialogTrigger></DialogTrigger>
        <DialogContent className="w-1/4">
          <Form {...form}>
            <form
              className="space-y-2"
              onSubmit={form.handleSubmit(handleUpdate)}
            >
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Change category name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          placeholder="name"
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
                Change category name
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Category;
