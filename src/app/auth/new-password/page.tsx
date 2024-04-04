import React, { Suspense } from "react";
import NewPasswordForm from "./password-form";

function NewPasswordPage() {
  return (
    <div className="w-full h-full">
      <Suspense>
        <NewPasswordForm />;
      </Suspense>
    </div>
  );
}

export default NewPasswordPage;
