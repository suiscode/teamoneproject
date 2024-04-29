"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { FormError } from "@/lib/form-error";
import { FormSuccess } from "@/lib/form-success";
import Wrapper from "../Wrapper";
import { toast } from "@/components/ui/use-toast";

function NewVerificationForm() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token");
      return;
    }
    const verify = async () => {
      if (success || error) return;
      try {
        const res = await axios.post("/api/auth/newverification", { token });
        toast({
          variant: "default",
          title: "Verification email sent",
        });
      } catch (e) {
        toast({
          variant: "destructive",
          title: "Something went wrong ",
        });
      }
    };
    verify();
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  });

  return (
    <Wrapper
      label={"Email verification"}
      backbutton={"Back to log in"}
      backurl={"/auth/login"}
    >
      {!success && !error && <BeatLoader color="white" />}
      <FormSuccess message={success} />
      {!success && <FormError message={error} />}
    </Wrapper>
  );
}

export default NewVerificationForm;
