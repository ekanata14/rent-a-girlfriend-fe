"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2"; // Import SweetAlert2
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export function EditUserDialog({ userId }: { userId: number }) {
  const router = useRouter();
  const [userData, setUserData] = useState<any | null>(null);

  // Fetch existing user data for editing
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`/api/admin/user/${userId}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  // Initialize the form with existing data
  const form = useForm({
    defaultValues: {
      id: userData?.id || 0, // Add id field as hidden input
      username: userData?.username || "",
      email: userData?.email || "",
      age: userData?.age || "",
      height: userData?.height || "",
      gender: userData?.gender || "",
      mobile_phone: userData?.mobile_phone || "",
      password: "", // Set an empty password field
      profile_picture: null, // Default to null for new file input
      role: userData?.role || 1,
    },
  });

  // Effect to update form values after user data is fetched
  useEffect(() => {
    if (userData) {
      form.reset({
        id: userData.id, // Set the id value
        username: userData.username,
        email: userData.email,
        age: userData.age,
        height: userData.height,
        gender: userData.gender,
        mobile_phone: userData.mobile_phone,
        password: "", // Keep password empty to force user input
        // profile_picture: null,
        role: userData.role,
      });
    }
  }, [userData, form]);

  async function onSubmit(data: any) {
    try {
      const formData = new FormData();
      formData.append("id", data.id.toString());
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("age", data.age.toString());
      formData.append("height", data.height.toString());
      formData.append("gender", data.gender.toString());
      formData.append("mobile_phone", data.mobile_phone);
      formData.append("role", data.role.toString());

      if (data.password) {
        formData.append("password", data.password);
      }

      // if (data.profile_picture) {
      //   formData.append("profile_picture", data.profile_picture);
      // }

      const response = await axios.post(
        `/api/admin/user/${userData.id}`,
        formData
      );

      console.log("User update successful:", response.data);
      Swal.fire({
        title: "User updated successfully!",
        text: "The user has been updated by Admin.",
        icon: "success",
        confirmButtonText: "OK",
        timer: 3000,
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Error updating user:", error);
      Swal.fire({
        title: "Update failed",
        text: "Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"pink"}>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 text-black"
          >
            {/* Hidden Input for ID */}
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => <input type="hidden" {...field} />}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <FormControl>
                    <Input id="username" placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <FormControl>
                    <Input id="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <FormControl>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Age"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <FormControl>
                    <select
                      id="gender"
                      {...field}
                      className="w-full p-2 border rounded"
                    >
                      <option value="">Select Gender</option>
                      <option value={0}>Male</option>
                      <option value={1}>Female</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <label
                    htmlFor="height"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Height
                  </label>
                  <FormControl>
                    <Input
                      id="height"
                      type="number"
                      placeholder="Height"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile_phone"
              render={({ field }) => (
                <FormItem>
                  <label
                    htmlFor="mobile_phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile Phone
                  </label>
                  <FormControl>
                    <Input
                      id="mobile_phone"
                      type="tel"
                      placeholder="Mobile Phone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <FormControl>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="profile_picture"
              render={({ field }) => (
                <FormItem>
                  <label
                    htmlFor="profile_picture"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Profile Picture
                  </label>
                  <FormControl>
                    <input
                      type="file"
                      accept="image/*"
                      {...field}
                      id="profile_picture"
                      className="w-full p-2 border rounded"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <DialogFooter>
              <Button type="submit" variant="pink" className="w-full">
                Update User
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
