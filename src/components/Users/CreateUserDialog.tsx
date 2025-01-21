"use client";
import React from "react";
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

export function CreateUserDialog() {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      age: "",
      height: "",
      gender: "",
      mobile_phone: "",
      password: "",
      role: 1, // Default to a default role (e.g., admin or user)
    },
  });

  // Handle form submission for creating a new user
  async function onSubmit(data: any) {
    try {
      const formData = new FormData();
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

      const response = await axios.post("/api/register", formData);

      console.log("User created successfully:", response.data);

      // Show success alert using SweetAlert2
      Swal.fire({
        title: "User Created Successfully",
        text: "The user has been created by Admin.",
        icon: "success",
        confirmButtonText: "OK",
        timer: 3000,
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Error creating user:", error);

      // Show error alert using SweetAlert2
      Swal.fire({
        title: "Creation Failed",
        text: "There was an error while creating the user.",
        icon: "error",
        confirmButtonText: "Try Again",
        timer: 3000,
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"pink"}>Create User</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 text-black"
          >
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
            <DialogFooter>
              <Button type="submit" variant="pink" className="w-full">
                Create User
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
