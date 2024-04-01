"use client";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { object, string, number, array, ObjectSchema } from "yup";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const initialValues = {
  name: "",
  description: "",
  type: "",
  price: "",
  salePrice: "",
  gasoline: "",
  steering: "",
  capacity: "",
};

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "description", label: "Description", type: "text" },
  { name: "type", label: "Type", type: "text" },
  { name: "price", label: "Price", type: "number" },
  { name: "salePrice", label: "Sale Price", type: "text" },
  { name: "gasoline", label: "Gasoline", type: "number" },
  {
    name: "steering",
    label: "Steering",
    type: "radio",
    options: ["manual", "auto"],
  },
  { name: "capacity", label: "Capacity", type: "number" },
];

function AddCars() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const validationSchema: any = object({
    name: string().required("Required"),
    description: string().required("Required"),
    type: string().required("Required"),
    // img: array().of(string()).required("Must fill"),
    price: number().min(0).required("Required"),
    salePrice: string(),
    gasoline: number().min(30).required("Required"),
    steering: string().oneOf(["manual", "auto"]).required("Required"),
    capacity: number().required("Required"),
  });

  console.log(validationSchema.error);

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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="border-2 border-black gap-4 flex flex-col">
                {fields.map(({ name, label, type, options }) => (
                  <div key={name}>
                    <label>{label}: </label>
                    {type === "radio" ? (
                      <div>
                        {options.map((option) => (
                          <label key={option}>
                            <Field type="radio" name={name} value={option} />
                            {option}
                          </label>
                        ))}
                      </div>
                    ) : (
                      <Field type={type} name={name} className='border-2 rounded-sm'/>
                    )}
                    <ErrorMessage
                      className="text-red-600"
                      name={name}
                      component="div"
                    />
                  </div>
                ))}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </Stack>
      </Modal>
    </div>
  );
}

export default AddCars;
