import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>Next.js Landing Page</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
