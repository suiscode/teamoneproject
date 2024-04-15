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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { CarItem, CategoryItem } from "@/lib/interface";
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

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await axios.get("/api/category");
      console.log(data.data);

      setTypes(data.data);
    };
    fetchCategory();
  }, []);

  const { push } = useRouter();
  const searchParam = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const car = searchParam.get("typesItems");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      typeItems: "",
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
    console.log(data);

    router.push(`${pathname}?typeItems=${data.typeItems}`);

    // const queryString: string[] = [];
    // for (const key in data) {
    //   if (Object.prototype.hasOwnProperty.call(data, key)) {
    //     const value = data[key as keyof typeof data];
    //     if (value) {
    //       if (Array.isArray(value)) {
    //         const values = value.map((v: string) =>
    //           encodeURIComponent(v.replace(/\s/g, ""))
    //         );
    //         queryString.push(`${key}=${values.join("%20")}`);
    //       } else {
    //         queryString.push(`${key}=${encodeURIComponent(value as string)}`);
    //       }
    //     }
    //   }
    // }

    // const finalQueryString = queryString.join("&");
    // console.log(finalQueryString);
    // push(`/cars?${finalQueryString}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 h-[900px] sticky top-[110px] p-4 rounded-md hidden md:flex flex-col xl:flex"
      >
        <FormField
          control={form.control}
          name="typeItems"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4">
              <FormLabel className="text-xl font-bold">Category</FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <div className="space-y-2">
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
        <Button type="submit" size="lg">
          Search
        </Button>
      </form>
    </Form>
  );
}
