"use client"
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import axios from "@/lib/axiosInstance";

function Dashboard() {
  const [totalUsers, setTotalUsers] = React.useState<number>(0);
  const [totalOrders, setTotalOrders] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchTotalUsers = async () => {
    // Fetch total users
    try {
      const response = await axios.get("/api/users/total", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      setTotalUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading when data is fetched
    }
  };

  const fetchTotalOrders = async () => {
    // Fetch total orders
    try {
      const response = await axios.get("/api/orders/total", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      setTotalOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading when data is fetched
    }
  };

  useEffect(() => {
    // Fetch total users
    fetchTotalUsers();
    // Fetch total
    fetchTotalOrders();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{loading ? "Loading..." : totalUsers}</CardTitle>
            <CardDescription>Users</CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{loading ? "Loading..." : totalOrders}</CardTitle>
            <CardDescription>Orders</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
