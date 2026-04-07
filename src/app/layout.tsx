import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "@/app/providers";
import MainAppLayout from "@/layouts/MainAppLayout";
import { ThemeProvider } from "@/components/theme-provider";
import "@/app/globals.css";

const roboto = Roboto({
  variable: "--font-roboto-next",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Beyond Intelligence",
  description: "Beyond Intelligence",
  icons: {
    icon: "/icon.ico",
    apple: "/icon.ico",
  },
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MainAppLayout>{children}</MainAppLayout>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
export default RootLayout;
