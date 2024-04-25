"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { CategoryItem } from "@/lib/interface";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Items = {
  id: string;
  label: string;
};

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
] as Items[];

const FormSchema = z.object({
  typeItems: z.string(),
});

export function AllCategory({ category, data }: any) {
  const [types, setTypes] = useState<CategoryItem[]>([]);
  const { push } = useRouter();
  const searchParam = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const car = searchParam.get("typeItems");

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await axios.get("/api/category");
      setTypes(data.data);
    };
    fetchCategory();
  }, []);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      typeItems: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.typeItems === "default") {
      router.push("/cars");
    } else {
      router.push(`${pathname}?typeItems=${data.typeItems}`);
    }
  }
  const handleRadioChange = (value: string) => {
    form.setValue("typeItems", value);
    if (value === "default") {
      onSubmit({ typeItems: "default" });
    } else {
      onSubmit({ typeItems: value });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 sticky top-[110px] h-[400px] w-[20%] p-4 rounded-md hidden md:block xl:block md:w-72"
      >
        <FormField
          control={form.control}
          name="typeItems"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4">
              <FormLabel className="text-xl font-bold">Category</FormLabel>

              <FormControl>
                <RadioGroup
                  defaultValue={car || "default"}
                  onValueChange={handleRadioChange}
                  className="flex flex-col space-y-1 "
                >
                  <div className="space-y-2">
                    <FormField
                      key={"default"}
                      control={form.control}
                      name="typeItems"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={"default"}
                            className="flex flex-row items-center space-x-3 space-y-0"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem
                                  className="bg-white"
                                  value={"default"}
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-lg">
                                {"All"}
                              </FormLabel>
                            </FormItem>
                          </FormItem>
                        );
                      }}
                    />
                    {category?.map((item: CategoryItem) => (
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
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem
                                    className="bg-white"
                                    value={item.name}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal text-lg">
                                  {item.name}
                                </FormLabel>
                              </FormItem>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
