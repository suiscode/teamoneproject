import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const commentSchema = z.object({
  comment: z.string().min(1, {
    message: "Field is required",
  }),
});

export const NewCategory = z.object({
  category: z.string().min(1, {
    message: "Enter name",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  phoneNumber: z.coerce.number().min(8, {
    message: "Minimum 8 characters required",
  }),

  firstName: z.string().min(2, {
    message: "Minimum 2 characters required",
  }),
  lastName: z.string().min(2, {
    message: "Minimum 2 characters required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const OrderSchema = z.object({
  pickUpLocation: z.string(),
  dropOffLocation: z.string(),
  date: z
    .object(
      {
        from: z.date(),
        to: z.date(),
      },
      { required_error: "Date is required" }
    )
    .refine((date) => {
      return !!date.from;
    }, "Date is required"),
});

export const NewCarSchema = z.object({
  name: z.string().min(1, {
    message: "Must fill",
  }),
  description: z.string().min(1, {
    message: "Must fill",
  }),
  price: z.coerce.number().min(1, {
    message: "Must fill",
  }),
  salePrice: z.optional(z.coerce.number().positive()),
  gasoline: z.coerce.number().min(1, {
    message: "Must fill",
  }),
  steering: z.string().min(1, {
    message: "Must fill",
  }),
  capacity: z.coerce.number().min(1, {
    message: "Must fill",
  }),
});
export const editProfileSchema = z.object({
  firstName: z.string().min(1, {
    message: "Must fill",
  }),
  lastName: z.string().min(1, {
    message: "Must fill",
  }),
  phoneNumber: z.coerce.number().min(8, {
    message: "Phone number must have 8 digits",
  }),
  email: z.string().email(),
  address: z.string().min(12, {
    message: "Phone number must have 12 characters",
  }),
});