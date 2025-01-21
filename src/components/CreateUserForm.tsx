"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "@/lib/axiosInstance";

export function CreateUserForm() {
  const [loading, setLoading] = useState(true);
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      age: "",
      height: "",
      gender: "",
      mobile_phone: "",
      password: "",
    },
  });

  // Fungsi untuk mendapatkan ID dari JWT di localStorage
  const getUserIdFromJWT = () => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const decoded = jwt.decode(token);
        return decoded?.id || null;
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
    return null;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = getUserIdFromJWT();
      if (!userId) {
        console.error("User ID not found in JWT");
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.get(`/api/admin/user/${userId}`);
        form.reset({
          username: data.username || "",
          email: data.email || "",
          age: data.age || "",
          height: data.height || "",
          gender: data.gender || "",
          mobile_phone: data.mobile_phone || "",
          password: "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [form]);

  async function onSubmit(data: any) {
    const userId = getUserIdFromJWT();
    if (!userId) {
      Swal.fire({
        title: "Error",
        text: "User ID not found. Please log in again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const formData = {
        username: data.username,
        email: data.email,
        age: data.age,
        height: data.height,
        gender: data.gender,
        mobile_phone: data.mobile_phone,
      };

      if (data.password) {
        formData["password"] = data.password;
      }

      await axios.post(`/api/admin/user/${userId}`, formData);

      Swal.fire({
        title: "User updated successfully!",
        text: "The user has been updated by Admin.",
        icon: "success",
        confirmButtonText: "OK",
        timer: 3000,
      }).then(() => window.location.reload());
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full max-w-xl bg-transparent px-8 rounded-xl">
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
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Age" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Gender" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height (cm)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Height" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile_phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Phone</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Mobile Phone" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormItem>
            <Button type="submit">Save</Button>
          </FormItem>
        </form>
      </Form>
    </div>
  );
}
