import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import { auth } from "../../../../auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UserEditSchema } from "@/lib/schema";
import { Input } from "@/components/ui/input";
import axios from "axios";

const UserEdit = ({ session, state, setState }: any) => {
  const [isPending, startTransition] = useTransition();
  console.log(session);

  const form = useForm<z.infer<typeof UserEditSchema>>({
    resolver: zodResolver(UserEditSchema),
    defaultValues: {
      firstName: session.user.firstName,
      lastName: session.user.lastName,
      phoneNumber: session.user.phoneNumber,
    },
  });

  const onSubmit = (values: z.infer<typeof UserEditSchema>) => {
    console.log(values);
    startTransition(async () => {
      try {
        const res = await axios.put("/api/user/", {
          ...values,
          userId: session.user.id,
        });
        console.log(res);
        setState(!state);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <Form {...form}>
      <form
        className="space-y-6 relative w-full px-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4 text-white">
          <div className="flex flex-col">
            <div className="flex flex-col items-center w-full">
              <div className="flex  items-center justify-center gap-2 flex-col w-48 h-48">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={session.user.image} />
                  <AvatarFallback className="text-black">CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col p-4 justify-between items-center gap-4 w-96">
                <div className="flex flex-col gap-4 justify-between items-center w-full items">
                  <div className="flex flex-col items-center">
                    <h1 className="text-gray-400">First name</h1>
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="flex flex-col text-white">
                          <FormControl>
                            <Input
                              disabled={isPending}
                              {...field}
                              placeholder="firstName"
                              type="text"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-gray-400">Last name</h1>
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="flex flex-col text-white">
                          <FormControl>
                            <Input
                              disabled={isPending}
                              {...field}
                              placeholder="Last name"
                              type="text"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-gray-400">Phone</h1>
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem className="flex flex-col text-white">
                          <FormControl>
                            <Input
                              disabled={isPending}
                              {...field}
                              placeholder="Phone number"
                              type="text"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <Button className="w-1/3">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default UserEdit;
