import React from "react";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";

async function ProfilePage() {
  return (
    <div className="bg-black h-full w-full">
      <Header />
      <div className="border flex justify-center p-[1000px]">
        <div className="border w-[380px] rounded-2xl flex flex-col items-center text-white">
          <div className="border border-sky-500 rounded-t-2xl h-[100px] w-full bg-sky-500 flex items-center justify-center">
            <div className="border rounded-full w-20 h-20"></div>
          </div>
          <div className="p-4 w-full flex flex-col items-center">
            <p>User Name</p>
          </div>
          <div className="p-4 w-full flex flex-col items-center">
            <p>User Email</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
