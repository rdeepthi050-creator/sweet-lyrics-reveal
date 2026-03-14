import { Shantell_Sans } from "next/font/google";
import "./globals.css";

const shantell = Shantell_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Something for you!",
  description: "I made something special for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${shantell.className} bg-black select-none antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
