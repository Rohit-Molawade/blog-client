import Link from "next/link";
import "../styles/globals.css";
import { Inter, Public_Sans, Merriweather } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Public_sans = Public_Sans({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: "400",
});

const merriweather = Merriweather({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: "400",
});

export const metadata = {
  title: "The Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${Public_sans.variable} ${merriweather.variable}`}
      >
        <header className="flex pt-12 pb-6 min-w-screen items-center justify-center font-public_sans text-2xl gap-12 bg-black text-white">
          <Link href={"/"} className="hover:border-b-4 pb-2 hover:text-white">
            Home
          </Link>
          <Link
            href={"/blogs"}
            className="hover:border-b-4 pb-2 hover:text-white"
          >
            Blogs
          </Link>
          <Link
            href={"/about"}
            className="hover:border-b-4 pb-2 hover:text-white"
          >
            About
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
