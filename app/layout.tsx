import "./globals.css";
import Navbar from "../components/navbar";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google"; // 👈 import Inter font

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        <title>Next.js Landing Page</title>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <Navbar />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
