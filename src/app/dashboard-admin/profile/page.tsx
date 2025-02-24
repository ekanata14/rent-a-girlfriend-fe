import React from "react";
import { CreateUserForm } from "@/components/CreateUserForm";

function Profile() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Profile</h1>
        <CreateUserForm />
      </div>
    </>
  );
}

export default Profile;
