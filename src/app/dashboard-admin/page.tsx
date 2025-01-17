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

function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="w-full">
            <CardHeader>
              <CardTitle>Project {item}</CardTitle>
              <CardDescription>
                Users
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Dashboard;