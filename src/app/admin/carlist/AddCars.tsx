"use client";
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
import CarCardAdmin from "./CarCardAdmin";

function AddCars({ data, setCarData, carData }: any) {
  //// SUBMIT HANDLE
  const [open, setOpen] = useState(false);
  const [carId, setCarId] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
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
        if (isEditing) {
          // const res = await axios.post("/api/car/update", {
          //   ...values,
          //   carId,
          //   type: data?.name,
          //   categoryId: data?.id,
          //   img: imageArray,
          // });
          console.log(values, carId);
        } else {
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
        }

        setOpen(false);
        setUploadImages([]);
        setImages([null, null, null]);
        // setSuccess(res.data.success);
        form.reset();
      } catch (e: any) {
        setError(e.response.data.error);
      }
    });
  };

  const openDialogWithValues = (car: CarItem, carId: string) => {
    setIsEditing(true);
    setCarId(carId);
    const defaultValues = {
      name: car.name,
      description: car.description,
      price: car.price,
      gasoline: car.gasoline,
      steering: car.steering,
      capacity: car.capacity,
    };
    form.reset(defaultValues);
    setOpen(true);
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
  //// FORM VALIDATION
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
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          onClick={() => {
            setOpen(open);
            setIsEditing(false);
          }}
          className="text-secondary border-secondary border rounded-md px-4 py-2 hover:animate-pulse"
        >
          Add car to this category
        </DialogTrigger>
        <ul className="flex w-full flex-wrap gap-12 py-4">
          {carData?.cars?.map((item: any, index: number) => (
            <CarCardAdmin
              openDialogWithValues={openDialogWithValues}
              key={index}
              car={item}
              setCarData={setCarData}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </ul>
        <DialogContent className="w-[1200px] h-[550px]">
          <div className="p-4">
            <Form {...form}>
              <form
                className="space-y-6 relative w-full px-8"
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
                  />{" "}
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
                              <FormLabel className="font-normal">
                                Auto
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="MANUAL" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Manual
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {!isEditing && (
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
                )}
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button
                  className="w-3/5 absolute"
                  size="lg"
                  type="submit"
                  disabled={isPending}
                >
                  {isEditing ? "EDIT CAR" : "ADD CAR"}
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddCars;
