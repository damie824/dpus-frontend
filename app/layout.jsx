import { Inter } from "next/font/google";
import "@/styles/global/global.scss";
import Header from "@/components/global/header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/global/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="body ">
          <Toaster
            position={"top-center"}
            containerStyle={{
              margin: "0 auto",
              marginTop: "30px",
              maxWidth: "900px",
            }}
          />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
