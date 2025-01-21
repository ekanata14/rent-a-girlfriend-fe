"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import axios from "@/lib/axiosInstance";

export function DeleteUserDialog({ userId }: { userId: number }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle user deletion
  const handleDelete = async () => {
    setLoading(true);

    try {
      const response = await axios.delete(`/api/admin/user/${userId}`);
      console.log("User deleted successfully:", response.data);
      alert("User deleted successfully!");
      router.push("/admin/users");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <p className="text-sm text-gray-700">
            Are you sure you want to delete this user? This action cannot be
            undone.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => {}} disabled={loading}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
            className="ml-2"
          >
            {loading ? "Deleting..." : "Delete User"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
