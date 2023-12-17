"use client";

import Image from "next/image";
import logo from "@/public/brand/logo.png";
import Link from "next/link";
import "@/styles/global/header.scss";
import { useEffect, useState } from "react";
import { DpusReq } from "@/util/dpus-apis";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState("");

  useEffect(() => {
    try {
      const dpusReq = new DpusReq();

      async function setLogin() {
        const loginData = await dpusReq.isLogin();

        console.log(loginData);

        if (loginData.isLoggined) {
          setProfile(loginData.userData.profile);
          setIsLoggedIn(true);
        }
      }

      setLogin();
    } catch (error) {
      setIsLoggedIn(false);
    }

    const header = document.querySelector(".header-container");
    document.addEventListener("scroll", (e) => {
      if (window.scrollY >= 30) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    });
  }, []);

  return (
    <div className="header-container">
      <div className="header">
        <Link href={"/"} className="header-logo">
          <Image src={logo} alt={"logoimg"} priority={true} />
        </Link>
        <div className="header-items">
          <Link href={"/meals"}>
            <p>🍔 급식</p>
          </Link>
          <Link href={"/community"}>
            <p>📫 커뮤니티</p>
          </Link>
          <Link href={"/bamboo"}>
            <p>🎍 대나무숲</p>
          </Link>
          <Link href={"/library"}>
            <p>🗂️ 자료실</p>
          </Link>
          <Link href={"/records"}>
            <p>📈 성적 관리</p>
          </Link>
          <Link href={"/lost"}>
            <p>📦 분실물 관리소</p>
          </Link>
        </div>
        {isLoggedIn ? (
          <div className="header-profile">
            <Link className="header-alert" href="/notifications"></Link>
            <Link className="header-profile-img" href="/my">
              <img src={profile} alt="profile" />
            </Link>
          </div>
        ) : (
          <Link href="/login">
            <button className="login-button">로그인</button>
          </Link>
        )}
      </div>
    </div>
  );
}
