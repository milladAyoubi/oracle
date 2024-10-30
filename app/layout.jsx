import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Oracle",
  description: "The Next Great Breakthrough",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-body bg-cover bg-no-repeat`}>
        {children}
      </body>
    </html>
  );
}
