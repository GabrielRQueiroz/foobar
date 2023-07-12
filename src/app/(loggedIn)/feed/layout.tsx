import { ReactNode } from "react";

export default function GeneralFeedLayout ({children}: {children: ReactNode}) {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between bg-base-100 text-base-content p-2 sm:p-6 md:p-12">
         {children}
		</main>
   )
}