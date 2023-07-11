import { Navbar } from "@/components";
import { ReactNode } from "react";

export default function LoggedInLayout ({children}: {children: ReactNode}) {
   return (
      <>
			<Navbar />
         {children}   
      </>
   )
} 