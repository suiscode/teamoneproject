import { Suspense } from "react";
import NewVerificationForm from "./new-verification";

const newVerificationPage = () => {
  return (
    <div>
      <Suspense>
        <NewVerificationForm />
      </Suspense>
    </div>
  );
};

export default newVerificationPage;
