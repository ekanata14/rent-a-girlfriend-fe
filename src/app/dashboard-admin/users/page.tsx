"use client";
import React, { useEffect, useState } from "react";
import axios from "@/lib/axiosInstance";

// Components
import CardWithForm from "@/components/CardWithForm";
import { CreateUserDialog } from "@/components/Users/CreateUserDialog";
import { EditUserDialog } from "@/components/Users/EditUserDialog";
import { DeleteUserDialog } from "@/components/Users/DeleteUserDialog";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { User } from "@/interfaces/User";
import { Skeleton } from "@/components/ui/skeleton";

function Users() {
  const [data, setData] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch user data from API
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/admin/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading when data is fetched
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center space-y-4 w-full h-full">
        {/* Loading indicator */}
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 w-full">
      <h1 className="text-4xl font-bold">Users Data</h1>
      <CreateUserDialog />
      <Table>
        <TableCaption>A list of your users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Mobile Phone</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Aksi</TableHead> {/* Action column */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.mobile_phone}</TableCell>
              <TableCell>{user.gender === 0 ? "Male" : "Female"}</TableCell>
              <TableCell>{user.role === 0 ? "Admin" : "User"}</TableCell>
              <TableCell className="flex gap-4">
                {/* Action buttons */}

                <EditUserDialog userId={user.id} />
                <DeleteUserDialog userId={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Users;
