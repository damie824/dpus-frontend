import Head from "next/head";

export default function Community() {
  return (
    <div>
      <Head>
        <title>커뮤니티 - DPUS</title>
        <meta
          name="description"
          content="대평고에서 지금 무슨 일이 일어나고 있는 걸까요?"
        />
      </Head>
      <h1 className="page-title">📫 커뮤니티</h1>
      <p className="page-subtitle">
        우리 학교에서 지금 무슨 일이 일어나고 있는 걸까요?
      </p>
    </div>
  );
}
