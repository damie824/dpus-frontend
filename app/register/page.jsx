"use client";

import Link from "next/link";
import "@/styles/util/login/register.scss";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import JSConfetti from "js-confetti";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function Register() {
  const [index, setIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [registeData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const nextPage = () => {
    setIndex(index + 1);
  };

  function SendEmail() {
    if (email === "") {
      alert("이메일을 입력해주셔야 합니다.");
    }
    axios.post(process.env.FRONTURL + "/get-code", {
      email,
    });
    const checkButton = document.querySelector("#verify");
    const sendButton = document.querySelector("#send-email");

    checkButton.attributes.removeNamedItem("disabled");
    sendButton.attributes.getNamedItem("disabled");
  }

  return (
    <div className="register-container">
      {index === 0 ? (
        <>
          <div className="title">
            <h2>회원가입</h2>
            <p>회원으로 가입해 더욱 스마트한 학교 생활을 누려보세요.</p>
          </div>
          <div className="register-form">
            <label>이메일</label>
            <div className="register-inputs">
              <input type="email" placeholder="이메일을 입력해 주세요." />
              <button id="send-email">인증하기</button>
            </div>
            <label>인증번호</label>
            <div className="register-inputs">
              <input type="text" placeholder="인증 번호를 입력해 주세요." />
              <button id="verify" disabled>
                확인
              </button>
            </div>
            <button
              id="next-button"
              onClick={() => {
                nextPage();
                toast.success("작동했어요!");
              }}
              disabled
            >
              다음으로 (1/2)
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
      {index === 1 ? (
        <>
          <div className="title">
            <h2>세부 정보 설정하기</h2>
            <p>당신의 자세한 정보들을 알려주세요!</p>
          </div>
          <div className="register-form">
            <label>학번</label>
            <input type="email" placeholder="학번을 입력해 주세요." />
            <label>이름</label>
            <input
              type="password"
              placeholder="이름을 입력해 주세요. 실명이 아니어도 좋아요!"
            />
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호를 입력해 주세요." />
            <button
              onClick={() => {
                toast.success("작동했어요!");
                nextPage();
              }}
            >
              완료하기 (2/2)
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
      {index === 2 ? <DoneRegister /> : <></>}
    </div>
  );
}

function DoneRegister() {
  useEffect(() => {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      confettiColors: [
        "#6cff74",
        "#38caff",
        "#ff7096",
        "#ffef85",
        "#2279e5",
        "#9a3dfa",
      ],
    });
  }, []);

  return (
    <div className="title">
      <h2>회원가입을 완료했어요!</h2>
      <p>이제 DPUS의 모든 서비스를 사용하실 수 있어요!</p>
      <button
        onClick={() => {
          window.location.href = "/login";
        }}
      >
        로그인하기
      </button>
    </div>
  );
}
