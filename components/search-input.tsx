"use client";
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

export const SearchInput =()=>{
    return(
        <div className="relative">
            <Search classame="absolute h-4 w-4 top-3 left-4 text-muted-foreground" /> 
            <Input 
                
            
            />
        </div>
    )
}