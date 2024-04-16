"use client";
import React, { useState } from "react";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../../lib/schema";
import { Input } from "../../../components/ui/input";
import { useTransition } from "react";
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
import ButtonAuth from "@/app/_components/Button/ButtonOauth";
import Wrapper from "../Wrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function LoginForm() {
  const router = useRouter();
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setSuccess("");
    setError("");
    startTransition(async () => {
      try {
        const res = await axios.post("/api/auth/login", values);
        setSuccess(res.data.success);
        router.push("/cars");
        if (res.data.twoFactor) {
          setShowTwoFactor(true);
        }
      } catch (e: any) {
        if (e.response.data.error) {
          form.reset();
        }
        toast({
          variant: "destructive",   
          title: "Error Occured",
          description: "Email or password wrong",
        });
        setError(e.response.data.error);
      }
    });
  };

  return (
    <Wrapper
      label={"Log in"}
      backbutton={"Dont have an account?"}
      backurl={"/auth/register"}
    >
      <Form {...form}>
        <form
          className="space-y-6 w-full px-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-2 flex flex-col gap-5">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Two Factor Code</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="123456"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
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
              </>
            )}
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
          <Button className="w-full" type="submit" disabled={isPending}>
            {showTwoFactor ? "Confirm" : "Login"}
          </Button>
        </form>
        <Button
          variant="link"
          size="sm"
          className="ml-[-230px] w-full mt-[-23px] text-white"
          type="button"
        >
          <Link href="/auth/reset">Forgot password?</Link>
        </Button>
      </Form>

      <ButtonAuth />
    </Wrapper>
  );
}
