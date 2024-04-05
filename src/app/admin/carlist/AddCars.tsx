"use client";
import {
  FormControlLabel,
  Input,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState, useTransition } from "react";
// import { string, object, number, array } from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NewCarSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Textarea } from "@/components/ui/textarea";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

function AddCars({ data }: any) {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<{ [key: number]: string }>({
    1: "",
    2: "",
    3: "",
  });
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const form = useForm<z.infer<typeof NewCarSchema>>({
    resolver: zodResolver(NewCarSchema),
    defaultValues: {
      name: "",
      description: "",
      price: undefined,
      gasoline: undefined,
      steering: "",
      capacity: 2,
    },
  });

  const handleUpload = async (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const res = await axios("/api/r2");
    const uploadUrl = res.data.uploadUrl;
    const accessUrl = res.data.accessUrl;
    const id = res.data.id;
    const img = event.target.files?.[0];

    try {
      const res = await axios.put(uploadUrl, img, {
        headers: {
          "Content-Type": img?.type,
        },
      });

      setImages((prev) => ({
        ...prev,
        [index]: `https://pub-9e4a462638ff4a6e89664b9e0dd86ca5.r2.dev/carrental%2F${id} `,
      }));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const imageArray = [1, 2, 3];
  // const onSubmit = async (values: any, actions: any) => {
  //   const requestBody = {
  //     ...values,
  //     type: data._id,
  //     images: Object.values(images),
  //   };
  //   const response = await axios.post("/api/car/", requestBody);
  //   actions.setSubmitting(false);
  // };

  const onSubmit = (values: z.infer<typeof NewCarSchema>) => {
    console.log("hello");

    setSuccess("");
    setError("");
    startTransition(async () => {
      try {
        const res = await axios.post("/api/car", {
          ...values,
          type: data._id,
          images: Object.values(images),
        });
        setSuccess(res.data.success);
        form.reset();
      } catch (e: any) {
        console.log(e);
        setError(e.response.data.error);
      }
    });
  };

  return (
    <div>
      <Button onClick={handleOpen}>ADD CARS</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style}>
          <div className="p-4">
            <Form {...form}>
              <form
                className="space-y-6 w-full px-8"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-3 grid-rows-2 gap-8 text-white ">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex flex-col text-black">
                        <FormLabel>Car name</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            {...field}
                            placeholder="Name"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="flex flex-col text-black">
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            {...field}
                            placeholder="Price"
                            type="number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="salePrice"
                    render={({ field }) => (
                      <FormItem className="flex flex-col text-black">
                        <FormLabel>Sale Price</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            {...field}
                            placeholder="Sale Price"
                            type="number"
                            onWheel={(e) => e.preventDefault()}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gasoline"
                    render={({ field }) => (
                      <FormItem className="flex flex-col text-black">
                        <FormLabel>Gasoline</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            {...field}
                            placeholder="Gasoline"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="capacity"
                    render={({ field }) => (
                      <FormItem className="flex flex-col text-black">
                        <FormLabel>Capacity</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            {...field}
                            placeholder="Capacity"
                            type="number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="relative">
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem className="flex flex-col text-black">
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              disabled={isPending}
                              {...field}
                              className="absolute top-4 h-[300px]"
                              placeholder="Description"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="steering"
                    render={({ field }) => (
                      <FormItem className="flex flex-col text-black">
                        <FormLabel>Steering</FormLabel>
                        <RadioGroup
                          {...field}
                          aria-label="Steering"
                          name="steering"
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          row
                        >
                          <FormControlLabel
                            value="auto"
                            control={<Radio />}
                            label="Auto"
                          />
                          <FormControlLabel
                            value="manual"
                            control={<Radio />}
                            label="Manual"
                          />
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-[50px]">
                  {imageArray.map((item) => (
                    <label key={item}>
                      <input type="file" />
                      <div className="border relative rounded-sm h-[150px] flex items-center justify-center w-[150px] border-black">
                        <h1>ADD IMAGE + </h1>
                        {images[item] && (
                          <Image
                            src={images[item]}
                            fill
                            className="absolute object-cover"
                            alt="image"
                          />
                        )}
                      </div>
                    </label>
                  ))}
                </div>

                <FormError message={error} />
                <FormSuccess message={success} />
                <Button className="w-full" type="submit" disabled={isPending}>
                  ADD CAR
                </Button>
              </form>
            </Form>
          </div>
        </Stack>
      </Modal>
    </div>
  );
}

export default AddCars;

{
}
