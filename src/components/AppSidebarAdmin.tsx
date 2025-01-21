"use client"
import {
  Home,
  Inbox,
  Search,
  Settings,
  User2,
  ChevronUp,
  PersonStanding,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard-admin",
    icon: Home,
  },
  {
    title: "Orders",
    url: "/dashboard-admin/orders",
    icon: Inbox,
  },
  {
    title: "Users",
    url: "/dashboard-admin/users",
    icon: User2,
  },
];

export function AppSidebarAdmin() {
  const currentPath = usePathname(); // Get the current path dynamically
  return (
    <Sidebar>
      <SidebarContent className="bg-pink text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-bold text-white">
            Admin
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = currentPath === item.url; // Check if the item is active
                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={isActive ? "bg-white text-black rounded-md" : ""}
                  >
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={isActive ? "bg-white text-black rounded-md" : ""}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <Link href="/dashboard-admin/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    <span>Profile</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/">
                  <DropdownMenuItem className="cursor-pointer">
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
