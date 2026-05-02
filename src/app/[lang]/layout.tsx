import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Roboto } from "next/font/google";
import { Providers } from "@/app/providers";
import MainAppLayout from "@/layouts/MainAppLayout";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import {
  isLocale,
  locales,
  localeDirection,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/app/[lang]/dictionaries";
import "@/app/globals.css";

const roboto = Roboto({
  variable: "--font-roboto-next",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Half Byte",
  description: "Amplifying Digital Intelligence",
  icons: {
    icon: "/icon.ico",
    apple: "/icon.ico",
  },
};

export async function generateStaticParams(): Promise<{ lang: Locale }[]> {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const dir = localeDirection(lang);

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <Providers>
          <DictionaryProvider dict={dict} locale={lang}>
            <MainAppLayout>{children}</MainAppLayout>
          </DictionaryProvider>
        </Providers>
      </body>
    </html>
  );
}
