"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "@/components/mobile-sidebar";

const font = Poppins({
    weight: "600",
    subsets: ["latin"],
})

export const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
        <div className="flex items-center">
            <MobileSidebar />
            <Link href="/">
                <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary",
                    font.className
                )
                }>
                    AI Companion
                </h1>
            </Link>
        </div>
        <div className="flex items-center gap-x-3">
                <Button size="sm" variant="premium">
                    Upgrade
                    <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
                </Button>
                <ModeToggle />
                <UserButton afterSignOutUrl="/" />   
        </div>
    </div>
  );
}
