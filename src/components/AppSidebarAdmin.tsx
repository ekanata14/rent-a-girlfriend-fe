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
  return (
    <Sidebar>
      <SidebarContent className="bg-pink text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-bold text-white">Rent a Girlfriend Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
