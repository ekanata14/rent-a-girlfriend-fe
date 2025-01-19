"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "@/lib/axiosInstance";
import jwt from "jsonwebtoken";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";

// Define validation schema
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Login function to handle API request
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await axios.post("/api/login", data); // Replace with your actual API URL
      const { token } = response.data;

      // Save token to localStorage
      localStorage.setItem("jwtToken", token);

      const decodedToken = jwt.decode(token);

      if (decodedToken.role === 1) {
        // Redirect to dashboard
        router.push("/dashboard-client");
      }

      if (decodedToken.role === 0) {
        // Redirect to dashboard
        router.push("/dashboard-admin");
      }
    } catch (error) {
      console.error("Login failed:", error);

      // Display an error message (optional)
      alert(
        error.response?.data?.message || "Failed to login. Please try again."
      );
    }
  }

  return (
    <>
      <div className="w-full max-w-xl p-8 rounded-xl shadow-lg bg-white">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" variant={"pink"} className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
