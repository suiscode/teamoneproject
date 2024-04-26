"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { Button } from "@/components/ui/button";
import React, { useState, useTransition } from "react";
import { Rating } from "react-simple-star-rating";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "@/lib/schema";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea";

const AddReview = () => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  const onPointerLeave = () => console.log(rating);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = (values: z.infer<typeof commentSchema>) => {
    startTransition(async () => {
      try {
        console.log(values, { rating });

        const res = await axios.post("/api/review", {
          comment: values.comment,
          starRating: rating,
        });
        toast({
          variant: "default",
          title: "Successfully added review",
        });
      } catch (e: any) {
        console.log(e);

        toast({
          variant: "destructive",
          title: "Error Occured",
          description: e.response.data.error,
        });
      }
    });
  };

  return (
    <div className="w-full items-start space-y-4">
      <Form {...form}>
        <form
          className="space-y-2 w-full flex flex-col"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex gap-4">
            <h1 className="text-secondary font-bold text-2xl">
              Leave a review
            </h1>
            <Rating
              onClick={handleRating}
              onPointerLeave={onPointerLeave}
              SVGstyle={{ display: "inline-block" }}
              initialValue={2.5}
              size={30}
              transition
            />
          </div>

          <div className="space-y-2 flex flex-col  gap-5 text-white ">
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Leave a comment"
                      className="resize-none"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button className="w-[30%]" type="submit" disabled={isPending}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddReview;
