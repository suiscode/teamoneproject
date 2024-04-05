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
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const NewCarSchema = z.object({
  name: z.string().min(1, {
    message: "Must fill",
  }),
  description: z.string().min(1, {
    message: "Must fill",
  }),
  price: z.string().min(1, {
    message: "Must fill",
  }),
  salePrice: z.optional(z.string()),
  gasoline: z.string().min(1, {
    message: "Must fill",
  }),
  steering: z.string().min(1, {
    message: "Must fill",
  }),
  capacity: z.number().min(1, {
    message: "Must fill",
  }),
});
