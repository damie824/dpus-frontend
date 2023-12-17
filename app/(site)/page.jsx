import HomeSwiper from "@/components/home/swiper";
import "@/styles/home/home.scss";

export const metadata = {
  title: "DPUS - 대평고등학교 학생 관리 플랫폼",
  description: "더 나은 대평고등학교 웹사이트 프로젝트, DPUS에요!",
};

export default function Home() {
  return (
    <main>
      <div className="notice"></div>
      <HomeSwiper />
      <h2>//여기에 내용이 추가됩니다//</h2>
    </main>
  );
}
