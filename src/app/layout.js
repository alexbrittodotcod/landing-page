import "../styles/globals.scss";
import Header from "../components/CommonComponents/Header.js";
import Footer from "../components/CommonComponents/Footer";
import Head from "next/head";

export const metadata = {
  title: "Hirewalks",
  description: "This is my landing page built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for title and description */}
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description} />
      </head>

      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
