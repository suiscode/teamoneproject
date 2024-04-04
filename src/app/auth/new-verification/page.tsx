import { Suspense } from "react";
import NewVerificationForm from "./new-verification";

const newVerificationPage = () => {
  return (
    <div className="w-full h-full">
      <Suspense>
        <NewVerificationForm />
      </Suspense>
    </div>
  );
};

export default newVerificationPage;
