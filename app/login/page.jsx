"use client";
import "@/styles/util/login/login.scss";
import Link from "next/link";

export default function Login() {
  return (
    <div className="login-container">
      <div className="title">
        <h2>DPUS 시작하기</h2>
        <p>대평고등학교를 더욱 스마트하게 이용해 보세요.</p>
      </div>
      <div className="login">
        <label>아이디</label>
        <input type="text" placeholder="아이디를 입력해 주세요." />
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력해 주세요." />

        <button>로그인</button>
      </div>
      <p className={"register"}>
        계정이 없으신가요? <Link href={"/register"}>회원가입</Link>
      </p>
    </div>
  );
}
