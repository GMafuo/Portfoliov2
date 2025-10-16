import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Portfolio | Développeur Web</title>
        <meta name="description" content="Portfolio moderne d'un développeur web" />
        <meta name="keywords" content="développeur, web, portfolio, react, nextjs" />
        <meta name="author" content="Votre Nom" />
        <meta name="theme-color" content="#131424" />
        {/* Open Graph */}
        <meta property="og:title" content="Portfolio | Développeur Web" />
        <meta property="og:description" content="Portfolio moderne d'un développeur web" />
        <meta property="og:type" content="website" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;