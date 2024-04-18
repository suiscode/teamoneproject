import React, { ChangeEvent, useState, useTransition } from "react";
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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { FormError } from "@/lib/form-error";
import { FormSuccess } from "@/lib/form-success";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CarItem, CategoryItem } from "@/lib/interface";

function EditCarModal({ data, setCarData, car }: any) {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [uploadImages, setUploadImages] = useState<File[]>([]);
  let imageArray: string[];

  const [images, setImages] = useState<(string | null)[]>([null, null, null]);

  const handleUpload = async () => {
    const { data } = await axios.get<{
      uploadUrl: string[];
      accessUrls: string[];
    }>(`/api/r2?count=${uploadImages.length}`);

    const uploadUrls = data.uploadUrl;
    const accessUrls = data.accessUrls;
    imageArray = data.accessUrls;
    // const id = res.data.id;
    console.log(data);

    try {
      await Promise.all(
        uploadUrls.map(async (uploadUrl, index) => {
          await axios.put(uploadUrl, uploadImages[index], {
            headers: {
              "Content-Type": uploadImages[index].type,
            },
          });
        })
      );
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const onSubmit = (values: z.infer<typeof NewCarSchema>) => {
    setSuccess("");
    setError("");
    startTransition(async () => {
      try {
        await handleUpload();
        const res = await axios.post("/api/car", {
          ...values,
          type: data.name,
          categoryId: data.id,
          img: imageArray,
        });
        setCarData((prev: any) => ({
          ...prev,
          cars: [
            { ...values, tyspe: data.name, categoryId: data.id },
            ...prev.cars,
          ],
        }));
        setOpen(false);
        setUploadImages([]);
        setImages([null, null, null]);
        setSuccess(res.data.success);
        form.reset();
      } catch (e: any) {
        setError(e.response.data.error);
      }
    });
  };
  const onImageChange =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

        setUploadImages([...uploadImages, file]);

        const newImages = [...images];
        newImages[index] = URL.createObjectURL(event.target.files[0]);
        setImages(newImages);
      }
    };
  const form = useForm<z.infer<typeof NewCarSchema>>({
    resolver: zodResolver(NewCarSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      gasoline: 0,
      steering: "",
      capacity: 0,
    },
  });
  return (
    <div className="w-[1100px] h-[550px] p-4 bg-white absolute top-[10%] left-10 z-10 rounded-md">
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
                      value={car.name}
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
                  <FormLabel>Price/hour</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Price"
                      type="number"
                      value={car.price}
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
                  <FormLabel>Price/hour(sale)</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Sale(Optional)"
                      type="number"
                      value={car.sale}
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
                  <FormLabel>Gasoline capacity</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Gasoline"
                      type="number"
                      value={car.gasoline}
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
                  <FormLabel>Car capacity</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Car capacity"
                      type="number"
                      value={car.capacity}
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
                        value={car.description}
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
                <FormItem className="flex items-end gap-4 text-black">
                  <FormLabel>Steering</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex items-center"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="AUTO" />
                        </FormControl>
                        <FormLabel className="font-normal">Auto</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="MANUAL" />
                        </FormControl>
                        <FormLabel className="font-normal">Manual</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-[67px]">
            {images.map((image, index) => (
              <div key={index}>
                <label key={index}>
                  <input type="file" onChange={onImageChange(index)} />
                  <div className="border relative rounded-sm h-[185px] flex items-center justify-center w-[185px] border-black">
                    <h1>ADD IMAGE + </h1>
                    {image && (
                      <Image
                        src={image}
                        fill
                        className="absolute object-cover"
                        alt="image"
                      />
                    )}
                  </div>
                </label>
              </div>
            ))}
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            className="w-full"
            size="lg"
            type="submit"
            disabled={isPending}
          >
            UPDATE CAR
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default EditCarModal;
