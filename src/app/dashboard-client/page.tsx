import React from "react";

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

import { ThreeDCard } from "@/components/3DCard";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <Input type="email" placeholder="Search..." className="w-[400px]" />
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full">
          {[1, 2, 3, 4].map((item) => (
            <ThreeDCard />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
