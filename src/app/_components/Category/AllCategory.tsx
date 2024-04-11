"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { CarItem, CategoryItem } from "@/lib/interface";
import Category from "@/app/admin/carlist/Category";

const typeItems = [
  {
    id: "Sedan",
    label: "Sedan",
  },
  {
    id: "Coupe",
    label: "Coupe",
  },
  {
    id: "Hatchback",
    label: "Hatchback",
  },
  {
    id: "Truck",
    label: "Truck",
  },
  {
    id: "SUV",
    label: "SUV",
  },
  {
    id: "Camper vans",
    label: "Camper vans",
  },
] as const;

const capacityItems = [
  {
    id: "2 people",
    label: "2 people",
  },
  {
    id: "4 people",
    label: "4 people",
  },
  {
    id: "7 people",
    label: "7 people",
  },
  {
    id: "8 people",
    label: "8 people",
  },
  {
    id: "15+ people",
    label: "15+ people",
  },
] as const;

const FormSchema = z.object({
  typeItems: z.array(z.string()),
  capacityItems: z.array(z.string()),
});

export function AllCategory() {
  const [types, setTypes] = useState<CategoryItem[]>([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const data = await axios.get("/api/category");
      console.log(data.data);

      setTypes(data.data);
    };
    fetchCategory();
  }, []);

  const { push } = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      typeItems: [],
      capacityItems: [],
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    const queryString: string[] = [];
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = data[key as keyof typeof data];
        if (value) {
          if (Array.isArray(value)) {
            const values = value.map((v: string) =>
              encodeURIComponent(v.replace(/\s/g, ""))
            );
            queryString.push(`${key}=${values.join("%20")}`);
          } else {
            queryString.push(`${key}=${encodeURIComponent(value as string)}`);
          }
        }
      }
    }

    const finalQueryString = queryString.join("&");
    console.log(finalQueryString);
    push(`/cars?${finalQueryString}`);
  }
  const searchParam = useSearchParams();
  const id = searchParam.get("id");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 h-[900px] sticky top-[110px] p-4 rounded-md hidden md:flex flex-col xl:flex"
      >
        <FormField
          control={form.control}
          name="typeItems"
          render={() => (
            <FormItem className="flex flex-col gap-4">
              <FormLabel className="text-xl font-bold">Types</FormLabel>
              <div className="space-y-2">
                {types?.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="typeItems"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              className="bg-white w-6 h-6"
                              checked={field.value?.includes(item.name)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.name])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.name
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-lg">
                            {item.name}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>

              <FormLabel className="text-xl font-bold">Capacity</FormLabel>


              <div className="space-y-2">
                {capacityItems.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="capacityItems"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              className="bg-white w-6 h-6"
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-lg">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg">
          Search
        </Button>
      </form>
    </Form>
  );
}
