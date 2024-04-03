"use client";
import React, { useState } from "react";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../../lib/schema";
import { Input } from "../../../components/ui/input";
import { useTransition } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import { FormError } from "../../../lib/form-error";
import { FormSuccess } from "../../../lib/form-success";
import axios from "axios";
import ButtonAuth from "@/app/cars/components/Button/ButtonOauth";

export default function RegisterForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: ""
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setSuccess("");
    setError("");
    startTransition(async () => {
      try {
        const res = await axios.post("/api/auth/register", values);
        setSuccess(res.data.success);
      } catch (e: any) {
        console.log(e);
        setError(e.response.data.error);
      }
    });
  };

  return (
    <div className="absolute top-[33%] left-[44%] w-[350px] h-[500px] backdrop-blur-md flex justify-center">
      <div className=" flex flex-col justify-center items-center gap-5 text-white">
        <h1 className="text-2xl">Sign up</h1>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-2 flex flex-col  gap-5 text-white ">
              <FormField

                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem >

                    <FormControl>
                      <Input
                        className="text-white w-[250px] "
                        disabled={isPending}
                        {...field}
                        placeholder="Your Email"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>

                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="Your name"
                        type="name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField

                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>

                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="Password"
                        type="password"
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
              Create an account
            </Button>
          </form>
        </Form>
        <ButtonAuth />

      </div>
    </div>
  );
}

