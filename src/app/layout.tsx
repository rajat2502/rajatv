import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SoundProvider from "@/components/SoundProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajat Verma — Senior Frontend Engineer",
  description:
    "Software engineer passionate about building polished, intuitive user experiences. Currently at Valory, previously at Headout.",
  metadataBase: new URL("https://rajatv.in"),
  openGraph: {
    title: "Rajat Verma — Senior Frontend Engineer",
    description:
      "Software engineer passionate about building polished, intuitive user experiences.",
    url: "https://rajatv.in",
    siteName: "Rajat Verma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajat Verma — Senior Frontend Engineer",
    description:
      "Software engineer passionate about building polished, intuitive user experiences.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rajat Verma",
  url: "https://rajatv.in",
  jobTitle: "Senior Frontend Engineer",
  worksFor: { "@type": "Organization", name: "Valory" },
  sameAs: [
    "https://github.com/rajat2502",
    "https://www.linkedin.com/in/rajat2502",
    "https://medium.com/@rajat2502",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-neutral-50 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <SoundProvider>
            <div className="mx-auto max-w-2xl px-6">
              <Header />
              <main className="py-12">{children}</main>
              <Footer />
            </div>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
