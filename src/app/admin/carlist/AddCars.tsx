"use client";
import {
  Button,
  FormControlLabel,
  Input,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { string, object, number, array } from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import Image from "next/image";

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

const validationSchema = object({
  name: string().required("Must fill"),
  description: string().required("Must fill"),
  // img: array().of(string()).required("Must fill"),
  price: number().min(0).required("Must fill"),
  salePrice: string(),
  gasoline: number().min(30, "Must be higher than 30").required("Must fill"),
  steering: string().oneOf(["manual", "auto"]).required("Must fill"),
  capacity: number().required("Must fill"),
});

function AddCars({ data }: any) {
  const initialValues = {
    name: "",
    description: "",
    price: "",
    salePrice: "",
    gasoline: "",
    steering: "",
    capacity: "",
  };

  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<{ [key: number]: string }>({
    1: "",
    2: "",
    3: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "description", label: "Description", type: "text" },
    { name: "price", label: "Price", type: "number" },
    { name: "salePrice", label: "Sale Price", type: "text" },
    { name: "gasoline", label: "Gasoline", type: "number" },
    { name: "capacity", label: "Capacity", type: "number" },
    {
      name: "steering",
      label: "Steering",
      type: "radio",
      options: ["manual", "auto"],
    },
  ];

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
  const handleSubmit = async (values: any, actions: any) => {
    const requestBody = {
      ...values,
      type: data._id,
      images: Object.values(images),
    };
    const response = await axios.post("/api/car/", requestBody);
    actions.setSubmitting(false);
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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
              {({ isSubmitting, handleChange, handleBlur, values }) => (
                <Form>
                  <div className="grid grid-cols-3 grid-rows-3 gap-4">
                    {fields.map(({ name, label, type, options }) => (
                      <div key={name}>
                        <div className="flex justify-between w-full">
                          {type === "radio" ? (
                            <RadioGroup
                              row
                              aria-label={name}
                              name={name}
                              value={values[name as keyof typeof values]}
                              onChange={handleChange}
                            >
                              {options &&
                                options.map((option) => (
                                  <FormControlLabel
                                    key={option}
                                    value={option}
                                    control={<Radio />}
                                    label={option}
                                  />
                                ))}
                            </RadioGroup>
                          ) : (
                            <TextField
                              id="outlined-basic"
                              label={name}
                              variant="outlined"
                              className="w-full"
                              autoComplete="false"
                              type={type}
                              name={name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          )}
                        </div>
                        <ErrorMessage
                          className="text-red-500"
                          name={name}
                          component="div"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {imageArray.map((item) => (
                      <label key={item}>
                        <input
                          type="file"
                          onChange={(e) => handleUpload(e, item)}
                        />
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
                  <Button
                    type="submit"
                    className="mt-[20px] disabled:text-gray-400 px-[100px]"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Stack>
      </Modal>
    </div>
  );
}

export default AddCars;
