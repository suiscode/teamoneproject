"use client";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useTransition,
  useEffect,
} from "react";
import { useSession } from "next-auth/react";
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
import { Button } from "@/components/ui/button";
import { editProfileSchema } from "@/lib/schema";
import { Input } from "@/components/ui/input";

type userDataType = {
  firstName: string | undefined;
  lastName: string | undefined;
  phoneNumber: number | undefined;
  address: string | undefined;
  email: string | undefined;
};

function UserProfile() {
  const session = useSession();
  const [isPending, startTransition] = useTransition();
  const user = session.data?.user;

  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: 0,
      address: "",
      email: "",
    },
    reValidateMode: "onChange",
    shouldUnregister: true,
  });
  console.log(user);

  useEffect(() => {
    if (user) {
      startTransition(() => {
        form.setValue("firstName", user?.firstName || "");
        form.setValue("lastName", user?.lastName || "");
        form.setValue("phoneNumber", user?.phoneNumber || 0);
        form.setValue("address", user?.address || "");
        form.setValue("email", user?.email || "");
      });
    }
  }, [user]);

  console.log(form.getValues());
  const onSubmit = async (values: z.infer<typeof editProfileSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="space-y-6 relative w-full px-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className=" text-white ">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex flex-col text-black">
                  <FormLabel>Firstname</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder={"Firstname"}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex flex-col text-black">
                  <FormLabel>Lastname</FormLabel>
                  <FormControl>
                    <Input
                      // defaultValue={user?.firstName||""}
                      disabled={isPending}
                      {...field}
                      placeholder="Lastname"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex flex-col text-black">
                  <FormLabel>PhoneNumber</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Phonenumber"
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="flex flex-col text-black">
                  <FormLabel>address</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="address"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col text-black">
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="email"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            className="w-3/5 absolute"
            size="lg"
            type="submit"
            disabled={isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default UserProfile;
