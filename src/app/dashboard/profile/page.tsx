import React from "react";
import CardWithForm from "@/components/CardWithForm";

function Profile() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold">Profile</h1>
        <CardWithForm />
      </div>
    </>
  );
}

export default Profile;
