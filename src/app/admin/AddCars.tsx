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
import React from "react";
import { string, object, number, array } from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

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

const validationSchema = object({
  name: string().required("Must fill"),
  description: string().required("Must fill"),
  type: string().required("Must fill"),
  // img: array().of(string()).required("Must fill"),
  price: number().min(0).required("Must fill"),
  salePrice: string(),
  gasoline: number().min(30, "Must be higher than 30").required("Must fill"),
  steering: string().oneOf(["manual", "auto"]).required("Must fill"),
  capacity: number().required("Must fill"),
});

function AddCars() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {({ isSubmitting, handleChange, handleBlur, values }) => (
                <Form>
                  <div className="grid grid-cols-3 grid-rows-4 gap-4">
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
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
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
