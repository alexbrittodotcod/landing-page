//import "./globals.css";
import "../styles/landing-page.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        <meta name="description" content={metadata.description} />

        {/* Link to the favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
