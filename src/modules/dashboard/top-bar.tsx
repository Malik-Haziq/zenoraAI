"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, Brain, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { UserMenu } from "../../components/user-menu";

interface DashboardTopNavProps {
  children: React.ReactNode;
}

export function DashboardTopNav({ children }: DashboardTopNavProps) {
  return (
    <div className="flex h-full flex-col">
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="flex h-16 items-center px-4">
          <SidebarTrigger className="mr-4 lg:hidden" />

          <div className="mr-4 lg:hidden">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Brain className="text-primary h-6 w-6" />
                <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-green-400" />
              </div>
              <span className="text-foreground text-lg font-bold">
                Humantryx
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 items-center space-x-4">
            <div className="relative max-w-md flex-1">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="Search employees, attendance, payroll..."
                className="pl-9"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs"
                  >
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">New leave request</p>
                    <p className="text-muted-foreground text-xs">
                      John Doe submitted a leave request for next week
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Payroll reminder</p>
                    <p className="text-muted-foreground text-xs">
                      Monthly payroll processing due in 2 days
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">AI Analysis Ready</p>
                    <p className="text-muted-foreground text-xs">
                      Employee sentiment analysis report is ready
                    </p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Help */}
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>

            <UserMenu />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
