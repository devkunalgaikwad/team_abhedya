import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Header, SideBar } from "./components";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const inter = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <SideBar>
              <Header/>
              {children}
            </SideBar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
