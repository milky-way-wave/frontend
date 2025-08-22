import "@/assets/globals.scss";

import { type ReactNode } from "react";
import { fontSans } from "@/libs/font.lib";
import { cn } from "@/libs/cn.lib";
import { PlayerBar } from "@/components/PlayerBar";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" className="h-screen overflow-hidden">
      <body
        className={cn(
          "antialiased h-screen overflow-hidden bg-black",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
