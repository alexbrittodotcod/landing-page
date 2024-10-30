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
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
