import React, { useEffect, useState, useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { OrderSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";

const locationOptions = [
  { value: "Ulaanbaatar", label: "Ulaanbaatar" },
  { value: "Darkhan", label: "Darkhan" },
  { value: "Erdenet", label: "Erdenet" },
  { value: "Ulaangom", label: "Ulaangom" },
];

const nameOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
];

interface ChildProps {
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
  setDateRange: React.Dispatch<
    React.SetStateAction<{
      from: Date | undefined;
      to: Date | undefined;
    }>
  >;
}
const RentalInfo: React.FC<ChildProps> = ({ dateRange, setDateRange }) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof OrderSchema>>({
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      pickUpLocation: "Ulaanbaatar",
      dropOffLocation: "Ulaanbaatar",
      date: {
        from: undefined,
        to: undefined,
      },
    },
  });

  const onSubmit = (values: z.infer<typeof OrderSchema>) => {
    setSuccess("");
    setError("");
    startTransition(async () => {
      try {
        // const res = await axios.post("/api/auth/register", values);

        console.log(values);
        // setSuccess(res.data.success);
      } catch (e: any) {
        toast({
          variant: "destructive",
          title: "Error Occured",
          description: "Email is in use ",
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form
        className="space-y-6 w-[62%] px-8 border-2 p-6 bg-white"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col  gap-8">
          <div className="h-full w-full flex justify-between items-center">
            <div className="flex flex-col gap-[6px]">
              <h1 className="text-black text-xl font-bold">Rental Info</h1>
              <h1 className="text-[#90A3BF] text-[14px] font-medium">
                Please select your rental date
              </h1>
            </div>
            <div className="text-[#90A3BF] text-[14px] font-medium flex">
              Step 2 of 3
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-between w-full">
            <div className="flex  gap-[24px] w-full ">
              <FormField
                control={form.control}
                name="pickUpLocation"
                render={({ field }) => (
                  <FormItem className="w-[46%]">
                    <FormLabel>Pick up location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="py-6">
                        <SelectTrigger>
                          <SelectValue placeholder="Select pickup location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {locationOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="text-black"
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dropOffLocation"
                render={({ field }) => (
                  <FormItem className="w-[46%]">
                    <FormLabel>Drop off location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="py-6">
                        <SelectTrigger>
                          <SelectValue placeholder="Select pickup location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {locationOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="text-black"
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Rent date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date"
                          variant={"outline"}
                          className={cn(
                            "w-[46%] py-6 justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value?.from ? (
                            field.value.to ? (
                              <>
                                {format(field.value.from, "LLL dd, y")} -{" "}
                                {format(field.value.to, "LLL dd, y")}
                              </>
                            ) : (
                              format(field.value.from, "LLL dd, y")
                            )
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={field.value.from}
                          selected={{
                            from: field.value.from,
                            to: field.value.to,
                          }}
                          onSelect={field.onChange}
                          // if (date && "from" in date && "to" in date) {
                          //   setDateRange({
                          //     from: date.from ?? new Date(), // Provide default if undefined
                          //     to: date.to ?? new Date(), // Provide default if undefined
                          //   });
                          // } else {
                          //   console.error(
                          //     "Date object is not in expected format:",
                          //     date
                          //   );
                          // }
                          numberOfMonths={2}
                          // disabled={(date) => {
                          //   const today = new Date();
                          //   today.setHours(0, 0, 0, 0);

                          //   const comparisonDate = new Date(date);
                          //   comparisonDate.setHours(0, 0, 0, 0);

                          //   return comparisonDate < today;
                          // }}
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <Button type="submit">Rent now</Button>
      </form>
    </Form>
  );
};

export default RentalInfo;
