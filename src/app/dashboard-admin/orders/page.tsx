"use client"
import React, { useEffect, useState } from "react";
import axios from "@/lib/axiosInstance";

// Components
import { Skeleton } from "@/components/ui/skeleton";

// Interface
import { Order } from "@/interfaces/Order";
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

const Orders = () => {
  // Calculate the total price
  // const totalAmount = orders.reduce((acc, order) => acc + order.total_price, 0);
  const [data, setData] = useState<Order[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch user data from API
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/order", {
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
      <h1 className="text-4xl font-bold">Orders Data</h1>
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order ID</TableHead>
            <TableHead>User ID</TableHead>
            <TableHead>Package ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Total Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {data && data.length > 0 ? (
            data.map((order, index) => (
              <TableRow key={order.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{order.user_id}</TableCell>
              <TableCell>{order.package_id}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell className="text-right">${order.total_price}</TableCell>
              </TableRow>
            ))
            ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
              Data not found
              </TableCell>
            </TableRow>
            )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            {/* <TableCell className="text-right">${totalAmount}</TableCell> */}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Orders;
