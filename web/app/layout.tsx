"use client";
import { Andika } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/wrappers/ThemeProvider";
import AuthProvider from "@/wrappers/AuthProvider";
import { Provider as StoreProvider } from "react-redux";
import { store } from "@/redux/store";
import { PublicEnvScript } from "next-runtime-env";

const andika = Andika({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <PublicEnvScript />
        <link rel="icon" type="image/x-icon" href="/public/assets/Logo.png"></link>
      </head>
      <body className={andika.className}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <StoreProvider store={store}>{children}</StoreProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
