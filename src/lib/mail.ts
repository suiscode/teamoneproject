import { Resend } from "resend";
import nodemailer from "nodemailer";

const email = process.env.GMAIL;
const pass = process.env.GMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorEmail = async (email: string, token: string) => {
  const info = await transporter.sendMail({
    from: "tuuduu00@gmail.com",
    to: email,
    subject: "2FA code",
    html: `<p>Your 2FA code ${token}</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  const info = await transporter.sendMail({
    from: "tuuduu00@gmail.com",
    to: email,
    subject: "Hello ✔",
    html: `<p>Click <a href="${confirmLink}">here<a> to confirm email </p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  const info = await transporter.sendMail({
    from: "tuuduu00@gmail.com",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here<a> to reset password </p>`,
  });
};
