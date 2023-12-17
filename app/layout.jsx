import { Noto_Sans_KR } from "next/font/google";
import "@/styles/global/global.scss";
import Header from "@/components/global/header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/global/footer";

const notoSansKorean = Noto_Sans_KR({
  weight: ["200", "300", "700"],
  preload: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSansKorean.className}>
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
